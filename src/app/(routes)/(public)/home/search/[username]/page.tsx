import Tweets from "@/components/Tweets";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { FiCalendar } from "react-icons/fi";
import { formatDate } from "@/lib/formateDate";

export default async function Page({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const prisma = new PrismaClient();
  const username = decodeURIComponent(params.username);
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (!user) {
    <div>
      <p>No user found</p>
    </div>;
  }
  prisma.$disconnect();

  return (
    <div className="h-screen">
      <div className="relative h-32 xl:h-48 bg-neutral-800/80 ">
        <Image
          src={`/vercel.svg`}
          alt="Profile Icon"
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover absolute bottom-0 left-4 transform translate-y-1/2 border-4 border-black"
        />
      </div>
      <div className="flex flex-col space-y-1 p-6 pt-12 border-b border-r border-neutral-800 ">
        <p className="text-2xl font-bold">{user?.fullname}</p>
        <p className="text-md text-neutral-500">@{user?.username}</p>
        <div className="tweet space-x-2">
          <FiCalendar />
          <p>Date Joined: </p>
          <p>
            {user?.dateJoined
              ? formatDate(user.dateJoined)
              : "Date not available"}
          </p>
        </div>
      </div>
      <Tweets />
    </div>
  );
}
