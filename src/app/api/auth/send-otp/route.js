import { sendOtpEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    const {userId} = await req.json();

    if (!userId) {
      return NextResponse.json(
        {error: "Missing UserId or Email", success: false},
        {status: 400}
      );
    };

    // GENERATE 6-DIGITS OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // SET EXPIRATION FOR 3 MIN
    const expiresAt = new Date(Date.now() + 3 * 60 * 1000);
    // SAVE THE OTP IN DB
    await prisma.UserOtp.create({
      data: {userId, otp, expiresAt},
    });

    // FIND THE USER
    const user = await prisma.user.findUnique({
      where: {id: userId}
    });
    // SEND MAIL WITH OTP
    await sendOtpEmail(user.email, otp);

    return NextResponse.json(
      { error: "OTP sent.", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Faild to send OTP.", success: false },
      { status: 500 }
    );
  }
}