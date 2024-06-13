import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    const tweet = await prisma.tweet.findUnique({
      where: { id },
    });

    if (!tweet) {
      return NextResponse.json({ error: "Tweet not found" }, { status: 404 });
    }

    const updatedTweet = await prisma.tweet.update({
      where: { id: id },
      data: {
        likeCount: tweet.likeCount + 1,
      },
    });

    console.log("updatedTweet", updatedTweet);
    
    return NextResponse.json({ message: "Liked" }, { status: 200 });
  } catch (error: any) {
    console.error("error", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    prisma.$disconnect();
  }
}
