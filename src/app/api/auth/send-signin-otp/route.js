import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { generateAndSendOtp } from "@/lib/otp";
import { rateLimitChecker } from "@/lib/rate-limit-checker";
import { sendOtpRateLimit } from "@/lib/rate-limit";
import { getClientInfo } from "@/lib/getClientInfo";

export async function POST(req) {
  // CHECK USER IP AND RATE LIMIT
  const {ip, userAgent} = await getClientInfo();

  const {email} = await req.json();
  const identifier = `${ip}-${email.toLowerCase()}`;

  const rateLimitResponse = await rateLimitChecker(sendOtpRateLimit, identifier);
  if (rateLimitResponse) return rateLimitResponse;

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

  // CHECK OTP RESEND ALLOWED
  if (user.otpResendAllowedAt && user.otpResendAllowedAt > new Date()) {
    const secondsLeft = Math.ceil(
      (user.otpResendAllowedAt - new Date()) / 1000
    );

    return NextResponse.json(
      {
        success: false,
        message: `Please wait ${secondsLeft}s before requesting again`,
        secondsLeft,
      },
      { status: 429 }
    );
  }

  // GENERATE AND SEND MAIL
  await generateAndSendOtp(user.id, user.email);

  // UPDATE OTP RESEND TIME & RESET ATTEMPTS
  await prisma.user.update({
    where: { id: user.id },
    data: {
      otpResendAllowedAt: new Date(Date.now() + 30 * 1000),
    }
  });

  // SEND SUCCESS MESSAGE
  return NextResponse.json(
    {success: true, message: "OTP sent successfull!", userId: user.id},
    {status: 200}
  );
}