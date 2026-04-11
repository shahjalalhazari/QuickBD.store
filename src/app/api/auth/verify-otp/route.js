import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { verifyOtpRateLimit } from "@/lib/rate-limit";
import { rateLimitChecker } from "@/lib/rate-limit-checker";
import { getClientInfo } from "@/lib/getClientInfo";

export async function POST (req) {
  try {
    // CHECK USER IP AND RATE LIMIT
    const {ip} = await getClientInfo();
    const rateLimitResponse = await rateLimitChecker(verifyOtpRateLimit, ip);
    if (rateLimitResponse) return rateLimitResponse;

    // GET USER ID & OTP
    const {userId, otp} = await req.json();
    if (!userId || !otp) {
      return NextResponse.json(
        {success: false, error: "Missing Data"},
        {status: 400}
      );
    }

    // FIND THE USER
    const user = await prisma.user.findUnique({
      where: {id: userId},
    });
    if (!user) {
      return NextResponse.json(
        {success: false, error: "User not found!"},
        {status: 404}
      )
    }
    // IF USER VERIFICAION EXPIRED & USER'S EMAIL STILL NOT VERIFIED. DELETE OLD RECORDS & USER TOO
    if (user.verificationExpires && user.verificationExpires < new Date() && !user.emailVerified){
      await prisma.userOtp.deleteMany({
        where: {id: userId}
      });
      await prisma.user.delete({
        where: {id: userId}
      });
      return NextResponse.json(
        {success: false, error: "Verification expired! Please SingUp again."},
        {status: 400}
      )
    }

    // FIND THE LATEST OTP
    const record = await prisma.userOtp.findFirst({
      where: {userId, expiresAt: {gte: new Date()}},
      orderBy: {createdAt: "desc"},
    });
    if (!record){
      return NextResponse.json(
        {success: false, error: "OTP invalid or expired"},
        {status: 400}
      )
    }
    // CHECK OTP ATTEMPS LIMIT
    if (record.attempts >= 5) {
      await prisma.userOtp.delete({
        where: {id: record.id}
      });
      return NextResponse.json(
        {success: false, error: "Too many incorrect attempts. Resend OTP."},
        {status: 400}
      )
    }

    // COMPARE HASHED OTP. IF INVALID, INCRESE ATTEMPTS
    const validOtp = await bcrypt.compare(otp, record.otp);
    if (!validOtp) {
      await prisma.userOtp.update({
        where: {id: record.id},
        data: {attempts: {increment: 1}},
      });
      return NextResponse.json(
        {success: false, error: "Invalid OTP"},
        {status: 400}
      )
    }
    // MAKE USER VERIFIED
    await prisma.user.update({
      where: {id: userId},
      data: {
        emailVerified: new Date(Date.now()), 
        verificationExpires: null, 
        otpResendAllowedAt: null
      }
    });
    // THEN DELETE OTP
    await prisma.userOtp.delete({
      where: {id: record.id}
    });

    // SUCCES
    return NextResponse.json(
      {success: true, message: "Verification Successful! You will be redirected to Sign In page"},
      {status: 200}
    )
  } catch (error) {
    return NextResponse.json(
      {success: false, error: "Failed to varify OTP"},
      {status: 500}
    )
  }
};