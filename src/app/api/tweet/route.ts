import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    let userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    const tweets = await prisma.tweet.findMany({
      where: {
        userId: String(userId),
      },
    });

    return NextResponse.json(tweets);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, content } = await req.json();
    if (!email || !content) {
      return NextResponse.json(
        { error: "email and content are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const tweet = await prisma.tweet.create({
      data: {
        content,
        userId: user.email,
      },
    });
    return NextResponse.json(tweet, { status: 201 });
  } catch (error) {
    console.error("Error posting tweet:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const tweet = await prisma.tweet.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(tweet);
  } catch (error) {
    console.error("Error deleting tweet:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
