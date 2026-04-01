import { prisma } from "../prisma";
import bcrypt from 'bcrypt';
import { passwordSignInRateLimit } from "../rate-limit";
import { headers } from "next/headers";


export const handleSignInWithPassword = async ({email, password}) => {
  const normalizedEmail = email.toLowerCase();

  // CHECK USER IP AND RATE LIMIT
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";
  const identifier = `${ip}-${normalizedEmail}`;
  const { success } = await passwordSignInRateLimit.limit(identifier);
  if (!success) {
    throw new Error("Too many attempts. Try again later.");
  }

  // FIND USER BY EMAIL
  const user = await prisma.user.findUnique({
    where: {email: normalizedEmail},
  });
  if (!user || !user.password) throw new Error("User not found!");
  if (!user.emailVerified) throw new Error("Email not verified!");

  // CHECK TEMP LOCK
  if (user.passwordLockUntil && user.passwordLockUntil > new Date()) {
    const secondLeft = Math.ceil(
      (user.passwordLockUntil - new Date()) / 1000
    );
    const error = new Error("Account locked");
    error.secondsLeft = secondLeft;
    throw error;
  }

  // CHECK ATTPEMPTS LIMIT
  if (user.passwordAttempts >= 5) {
    await prisma.user.update({
      where: {id: user.id},
      data: {
        passwordLockUntil: new Date(Date.now() + 5 * 60 * 1000), // LOCK FOR 5 MINs
        passwordAttempts: 0, // RESET ATTEMPTS
      }
    })
    throw new Error("Too many wrong attempts. Account locked for 5 minutes.");
  }

  // VERIFY PASSWORD
  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    await prisma.user.update({
      where: {id: user.id},
      data: {passwordAttempts: {increment: 1}}
    });
    throw new Error("Incorrect password!")
  };

  // SUCCESSFUL SIGNIN, RESET ATTEMPTS AND LOCK
  await prisma.user.update({
    where: {id: user.id},
    data: {passwordAttempts: 0, passwordLockUntil: null}
  });

  // RETURN USER DATA FOR JWT & SESSION
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }
}