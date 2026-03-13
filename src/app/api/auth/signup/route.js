import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signUpSchema } from "@/schemas/auth.schema";
import { sendOtpEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    // *** Part - 1: Get data and save them.
    // GET USER SUBMITTED DATA AND VALIDATE THEM
    const body = await req.json();
    const validated = signUpSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { error: validated.error.issues[0].message, success: validated.success },
        { status: 400 },
      )
    }

    // GET VALIDATED DATA AND CHECK EXISTING USER
    const {name, email, password} = validated.data;
    const userExist = await prisma.user.findUnique({
      where: {email: email.toLocaleLowerCase()},
    });
    if (userExist) {
      return NextResponse.json(
        { error: "User Already Exists", success: false},
        { status: 400 },
      )
    }

    // MAKE HASH PASSWORD AND SAVE NEW USER
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLocaleLowerCase(),
        password: passwordHash,
      }
    });

    // *** Part - 2: Create and Send OTP to user email.
    const userId = user.id;
    // GENERATE 6-DIGITS OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // SET EXPIRATION FOR 3 MIN
    const expiresAt = new Date(Date.now() + 3 * 60 * 1000);
    try {
      // SAVE THE OTP IN DB
      await prisma.UserOtp.create({
        data: {userId, otp, expiresAt},
      });
      // SEND MAIL WITH OTP
      await sendOtpEmail(email, otp);
    } catch (error) {
      return NextResponse.json(
      { error: "Something went wrong! While sending email with OTP.", success: false },
      { status: 500 }
    );
    }

    return NextResponse.json(
      { message: "User Created Successfully! An OTP has been send to your email.", userId, success: true },
      { status: 200 }
    )
  } catch (erroe) {
    return NextResponse.json(
      { error: "Something went wrong", success: false },
      { status: 500 }
    );
  };
};