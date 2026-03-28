import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { generateAndSendOtp } from "@/lib/otp";

export async function POST(req) {
  const {email} = await req.json();
  const user = await prisma.user.findUnique({
    where: {email: email.toLowerCase()},
  });

  // CHECK USER EXISTS
  if (!user) {
    return NextResponse.json(
      {success: false, message: "User not found!"},
      {status: 404}
    );
  }
  // CHECK USER IS VERIFIED
  if (!user.emailVerified) {
    return NextResponse.json(
      {success: false, message: "Please verify your email first!"},
      {status: 404}
    );
  }

  // GENERATE AND SEND MAIL
  await generateAndSendOtp(user.id, user.email);

  // SEND SUCCESS MESSAGE
  return NextResponse.json(
    {success: true, message: "OTP sent successfull!", userId: user.id},
    {status: 200}
  );
}