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
    const userExist = await prisma.user.findUnique({
      where: {email: email.toLowerCase()},
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
        email: email.toLowerCase(),
        password: passwordHash,
        // EXPIRATION FOR 10 MINUTES.
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
      }
    });

    return NextResponse.json(
      { 
        message: "User Created Successfully! An OTP has been send to your email.", 
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