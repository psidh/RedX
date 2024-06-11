import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import { BsPlusCircleFill } from "react-icons/bs";
import { PrismaClient } from "@prisma/client";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default async function BottomBar() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const url = "/home/profile/email?" + session?.user?.email;
  const imgSrc = session?.user?.image || "";
  const prisma = new PrismaClient();

  const email = session.user.email;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return (
    <div className="flex lg:hidden fixed bottom-0 left-0 w-full justify-between items-center py-4 px-6 bg-neutral-700/70">
      <a href="/home">
        <GoHomeFill className="text-3xl" />
      </a>
      <a href="/explore">
        <IoSearch className="text-3xl" />
      </a>
      <a href="/home/post">
        <BsPlusCircleFill className="text-3xl text-blue-500" />
      </a>
      <a href="/api/auth/signout">
        <LuLogOut className="text-3xl" />
      </a>

      {user ? (
        <div className="element hover:bg-black cursor-default space-x-8">
          <IoMdCheckmarkCircle className="text-3xl text-blue-500" />
        </div>
      ) : (
        <div>
          <a href="/complete-signup">Complete SignUp</a>
        </div>
      )}
    </div>
  );
}
