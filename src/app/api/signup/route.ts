import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email } = body;
    if (!username) {
      return NextResponse.json(
        { error: "Name and username are required" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already taken" },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        dateJoined: new Date(),
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
