import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import Image from "next/image";

export default async function TweetBox() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const imgSrc = session?.user?.image || "";
  const url = "/home/profile/" + session?.user?.id;

  return (
    <a
      className="flex justify-between items-start p-4 w-full border-b border-neutral-800/80"
      href={url}
    >
      <Image
        src={imgSrc}
        alt="Profile Icon"
        width={96}
        height={96}
        className="w-16 h-16 rounded-full border-4 border-black"
      />
      <div className="flex flex-col justify-between w-[90%]">
        <textarea
          title="tweet"
          name="tweet"
          id="tweet"
          cols={10}
          rows={2}
          className="pl-4  w-full focus:outline-none bg-black"
          placeholder="Type Something..."
        />
        <button
          className="bg-blue-500 w-[25%]
          hover:bg-blue-500/90 text-center font-bold text-md 
           py-2 mt-2 px-8 rounded-full
         transition-all duration-150"
        >
          Tweet
        </button>
      </div>
    </a>
  );
}
