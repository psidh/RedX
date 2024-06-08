import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { userId } = await req.json();
    const tweets = await prisma.tweet.findMany({
      where: {
        userId: String(userId),
      },
    });
    console.log(tweets);
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
    const { userId, content } = await req.json();
    if (!userId || !content) {
      return NextResponse.json(
        { error: "userId and content are required" },
        { status: 400 }
      );
    }
    const tweet = await prisma.tweet.create({
      data: {
        content,
        userId,
      },
    });
    console.log(tweet);
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
    console.log(tweet);
    return NextResponse.json(tweet);
  } catch (error) {
    console.error("Error deleting tweet:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
