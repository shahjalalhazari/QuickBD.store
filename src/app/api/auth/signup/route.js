import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signUpSchema } from "@/schemas/auth.schema";

export async function POST(req) {
  try {
    const body = await req.json();
    const validated = signUpSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { error: validated.error.issues[0].message, success: validated.success },
        { status: 400 },
      )
    }

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

    const passwordHash = await bcrypt.hash(password, 16);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLocaleLowerCase(),
        password: passwordHash,
      }
    });

    return NextResponse.json(
      { message: "User Created Successfully! An OTP has been send to your email.", userId: user.id, success: true },
      { status: 200 }
    )
  } catch (erroe) {
    return NextResponse.json(
      { error: "Something went wrong", success: false },
      { status: 500 }
    );
  };
};