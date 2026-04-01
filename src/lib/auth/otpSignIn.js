import { headers } from "next/headers";
import { prisma } from "../prisma";
import { verifyOtpRateLimit } from "../rate-limit";
import bcrypt from 'bcrypt';


export const handleSignInWithOTP = async ({email, otp}) => {
  const normalizedEmail = email.toLowerCase();

  // CHECK USER IP AND RATE LIMIT
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";
  const identifier = `${ip}-${normalizedEmail}`;
  const {success} = await verifyOtpRateLimit.limit(identifier);
  if (!success) {
    throw new Error("Too many attempts. Try again later.");
  }

  // FIND, CHECK AND VERIFIED USER
  const user = await prisma.user.findUnique({
    where: {email: normalizedEmail},
  });
  if (!user) throw new Error("User not found!");
  if (!user.emailVerified) throw new Error("Email not verified!");

  // GET USER OTP & OTP EXISTENCE CHECK
  const userOtp = await prisma.userOtp.findFirst({
    where: {userId: user.id},
    orderBy: {createdAt: "desc"}
  })
  if (!userOtp) throw new Error("OTP does not exists!");

  // CHECK EXPIRY & ATTEMPTS LIMIT
  if (new Date() > userOtp.expiresAt) throw new Error("OTP expired!");
  if (userOtp.attempts >= 5) throw new Error("Too many wrong attempts. Try again later.");

// VEIRFY OTP & INCREMENT ATTEMPTS IF OTP IS WRONG
  const isValid = await bcrypt.compare(otp, userOtp.otp);
  if (!isValid) {
    await prisma.userOtp.update({
      where: {id: userOtp.id},
      data: {attempts: {increment: 1}}
    });
    throw new Error("OTP is invalid!");
  }

  // DELETE OTP AFTER SUCCESS
  await prisma.userOtp.deleteMany({
    where: {userId: user.id},
  });

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  }
}