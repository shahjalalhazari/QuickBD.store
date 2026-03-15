import { sendOtpEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { rateLimitChecker } from "@/lib/rate-limit-checker";
import { sendOtpRateLimit } from "@/lib/rate-limit";


export async function POST(req) {
  try {
    // CHECK USER IP AND RATE LIMIT
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "anonymous";
    const rateLimitResponse = await rateLimitChecker(sendOtpRateLimit, ip);
    if (rateLimitResponse) return rateLimitResponse;

    const {userId} = await req.json();

    if (!userId) {
      return NextResponse.json(
        {error: "Missing user", success: false},
        {status: 400}
      );
    };

    // GENERATE 6-DIGITS OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // MAKE OTP HASHED
    const hashedOtp = await bcrypt.hash(otp, 10);
    // SET EXPIRATION FOR 3 MIN
    const expiresAt = new Date(Date.now() + 3 * 60 * 1000);
    
    // DELETE OLD OTPs OF CURRENT USER (IF AVAILABLE)
    await prisma.userOtp.deleteMany({
      where:{userId}
    });
    // SAVE THE OTP IN DB
    await prisma.UserOtp.create({
      data: {userId, otp:hashedOtp, expiresAt},
    });

    // FIND THE USER
    const user = await prisma.user.findUnique({
      where: {id: userId}
    });
    // SEND MAIL WITH OTP
    await sendOtpEmail(user.email, otp);

    return NextResponse.json(
      { error: "OTP sent successfully!.", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send OTP.", success: false },
      { status: 500 }
    );
  }
}