import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { signOut } from "next-auth/react";

export default async function Sidebar() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const url = "/home/profile/email?" + session?.user?.email;

  return (
    <div>
      <div className="flex flex-col justify-between items-center py-12 h-[100vh] border-r  border-neutral-800/80">
        <div className="sidebar1">
          <a href="/" className="element space-x-8">
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
          <a href="/home/post" className="element inline-flex items-center justify-center bg-blue-500 hover:bg-white w-full font-bold text-md hover:text-black py-3 mt-2 px-8 rounded-full transition-all duration-150">
            Post
          </a>
        </div>
        <a className="sidebar2" href={url}>
          <img
            src={session?.user?.image}
            alt="Profile Icon"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-md">{session?.user?.name}</p>
            <p className="text-sm text-[#7d7d7d]">@{session?.user?.email}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
