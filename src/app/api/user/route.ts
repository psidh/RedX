import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();

    if (!username) {
      return NextResponse.json({ error: "username not given", status: 411 });
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }

    return NextResponse.json({ user, status: 200 });
  } catch (error: any) {
    return NextResponse.json({
      error: "Error on the server api/user",
      status: 404,
    });
  } finally {
    prisma.$disconnect();
  }
}
