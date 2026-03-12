import { sendOtpEmail } from "@/lib/mail";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {userId, email} = await req.json();

    if(!userId || !email) {
      return NextResponse.json(
        {error: "Missing user or email", success: false},
        {status: 400}
      );
    }

    
    

    

    return NextResponse.json({success: true, message: "OTP sent"});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {error: "Failed to send OTP", success: false},
      {status: 500}
    )
    
  }
}