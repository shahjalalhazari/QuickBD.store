import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signUpSchema } from "@/schemas/auth.schema";

export async function POST(req) {
  try {
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
    const normalizedEmail = email.toLowerCase();
    const userExists = await prisma.user.findUnique({
      where: {email: normalizedEmail},
    });
    // USER EXISTS AND EMAIL VERIFIED
    if (userExists && userExists.emilaVerified) {
      console.log("User exists and email verified.");
      return NextResponse.json(
        { error: "User Already Exists. Please SignIn", success: false},
        { status: 400 },
      )
    }
    // EXISTS AND NOT VERIFIED. DELETE OLD DATA AND OTPS
    if (userExists && !userExists.emilaVerified) {
      console.log("Exists and not verified.");
      await prisma.userOtp.deleteMany({
        where: {userId: userExists.id}
      });
      console.log("Deleted old otps.");
      await prisma.user.delete({
        where: {id: userExists.id}
      })
      console.log("Deleted user's old data.");
    }

    // MAKE HASH PASSWORD AND SAVE NEW USER
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        password: passwordHash,
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000) // EXPIRATION FOR 10 MINUTES.
      }
    });
    console.log("New user created.");

    return NextResponse.json(
      { 
        message: "User Created Successfully! OTP sent to your email.", 
        userId: user.id, 
        success: true 
      },
      { status: 200 }
    )
  } catch (erroe) {
    return NextResponse.json(
      { error: "Something went wrong", success: false },
      { status: 500 }
    );
  };
};