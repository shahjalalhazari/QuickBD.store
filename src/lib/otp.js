import { sendOtpEmail } from "./mail";
import { prisma } from "./prisma";
import bcrypt from 'bcrypt';


export async function generateAndSendOtp(userId, email) {
  // DELETE OLD OTP
  await prisma.userOtp.deleteMany({
      where: {userId}
  });

  // GENERATE OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const hashedOtp = await bcrypt.hash(otp, 10);
  const expiresAt = new Date(Date.now() + 3 * 60 * 1000);

  // CREATE OTP
  await prisma.userOtp.create({
    data: {
      userId, otp: hashedOtp, expiresAt
    }
  });

  // SEND EMAIL WITH OTP
  await sendOtpEmail(email, otp);
}