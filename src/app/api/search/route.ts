import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    let username = searchParams.get("q");

    if (!username) {
      return NextResponse.json({ error: "username not given", status: 411 });
    }

    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }
    prisma.$disconnect();
    return NextResponse.json({ user, status: 200 });
  } catch (error: any) {
    return NextResponse.json({
      error: "Error on the server api/user",
      status: 500,
    });
  } finally {
    prisma.$disconnect();
  }
}
