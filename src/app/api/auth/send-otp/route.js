import { sendOtpEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { rateLimitChecker } from "@/lib/rate-limit-checker";
import { sendOtpRateLimit } from "@/lib/rate-limit";
import { getClientInfo } from "@/lib/getClientInfo";


export async function POST(req) {
  try {
    // CHECK USER IP AND RATE LIMIT
    const {ip, userAgent} = await getClientInfo();
    const rateLimitResponse = await rateLimitChecker(sendOtpRateLimit, ip);
    if (rateLimitResponse) return rateLimitResponse;

    const {userId} = await req.json();
    if (!userId) {
      return NextResponse.json(
        {error: "Missing userId", success: false},
        {status: 400}
      );
    };

    // GET, CHECK & VERIFIED USER
    const user = await prisma.user.findUnique({
      where: {id: userId},
    });
    if (!user){
      return NextResponse.json(
        {success: false, error: "User not found!"},
        {status: 404}
      )
    }
    if (user.emailVerified) {
      return NextResponse.json(
        {success: false, error: "Email already verified!"},
        {status: 400}
      )
    }
    // CHECK COOLDOWN
    if (user.otpResendAllowedAt && user.otpResendAllowedAt > new Date()) {
      const secondsLeft = Math.ceil((user.otpResendAllowedAt - new Date()) / 1000);
      return NextResponse.json(
        {success: false, error: `Please wait, ${secondsLeft}s left.`, secondsLeft},
        {status: 429}
      )
    }

    // DELETE OLD OTPs (IF AVAILABLE)
    await prisma.userOtp.deleteMany({
      where:{userId}
    });

    // GENERATE 6-DIGITS OTP, MAKE IT HASHED & SET EXPIRATION FOR 3 MIN
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedOtp = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(Date.now() + 3 * 60 * 1000);

    // SAVE THE OTP IN DB
    await prisma.UserOtp.create({
      data: {userId, otp:hashedOtp, expiresAt},
    });

    // SET COOLDOWN
    await prisma.user.update({
      where: {id: userId},
      data: {
        otpResendAllowedAt: new Date(Date.now() + 30 * 1000)
      }
    });

    // SEND MAIL WITH OTP
    await sendOtpEmail(user.email, otp);

    return NextResponse.json(
      { message: "OTP sent successfully!.", success: true, cooldown: 30 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send OTP.", success: false },
      { status: 500 }
    );
  }
}