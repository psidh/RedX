import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { LuLogOut } from "react-icons/lu";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default async function Sidebar() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const url = "/home/profile/" + session?.user?.email;
  const imgSrc = session?.user?.image || "";
  const prisma = new PrismaClient();

  const email = session.user.email;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  await prisma.$disconnect();

  return (
    <div className="fixed top-0 left-0 hidden lg:flex lg:w-[19%] flex-col justify-between items-center py-12 h-[100vh] border-r border-neutral-800/80">
      <div className="sidebar1">
        <a href="/home" className="element space-x-8">
          <GoHomeFill className="text-3xl" />
          <p>Home</p>
        </a>
        <a href="/explore" className="element space-x-8">
          <IoSearch className="text-3xl" /> <p>Explore</p>
        </a>
        <a href="/notifications" className="element space-x-8">
          <IoNotificationsOutline className="text-3xl" /> <p>Notifications</p>
        </a>
        <a href="/bookmarks" className="element space-x-8">
          <FaRegBookmark className="text-3xl" /> <p>Bookmarks</p>
        </a>
        <a href="/communities" className="element space-x-8">
          <IoMdPeople className="text-3xl" /> <p>Communities</p>
        </a>
        <a href="/api/auth/signout" className="element space-x-8">
          <LuLogOut className="text-3xl" />
          <p>Sign Out</p>
        </a>

        {user ? (
          <div className="element hover:bg-black cursor-default space-x-8">
            <IoMdCheckmarkCircle className="text-3xl text-red-500" />
            <p className="">Verified</p>
          </div>
        ) : (
          <div>
            <a href="/home/complete-signup" className="element space-x-8">
              Complete SignUp
            </a>
          </div>
        )}

        <a
          href="/home/post"
          className="element inline-flex items-center justify-center bg-red-600 hover: w-full font-bold text-md hover: py-3 mt-2 px-8 rounded-full transition-all duration-150"
        >
          Post
        </a>
      </div>
      <a className="sidebar2 hover:shadow-lg hover:shadow-red-600 border border-red-900 hover:text-red-600" href={url}>
        <Image
          src={imgSrc}
          alt="Profile Icon"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-md">{session?.user?.name}</p>
          <p className="text-md text-neutral-500">
            View Profile
          </p>
        </div>
      </a>
    </div>
  );
}
