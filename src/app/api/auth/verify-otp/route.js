import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST (req) {
  try {
    const {userId, otp} = await req.json();

    if (!userId || !otp) {
      return NextResponse.json(
        {success: false, error: "Missing Data"},
        {status: 400}
      );
    }

    // FIND THE OTP IN DB
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

    // COMPARE HASHED OTP
    const validOtp = await bcrypt.compare(otp, record.otp);
    if (!validOtp) {
      return NextResponse.json(
        {success: false, error: "Invalid OTP"},
        {status: 400}
      )
    }
    // IF OTP IS VALID MAKE USER VERIFIED & DELETE THE OTP
    await prisma.user.update({
      where: {id: userId},
      data: {emailVerified: true}
    });
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
}