import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

export default async function TweetBox() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const url = "/home/profile/" + session?.user?.id;

  return (
    <a className="flex justify-between items-start p-4 w-full border-b border-neutral-800/80" href={url}>
      <img
        src={session?.user?.image}
        alt="Profile Picture"
        className="w-16 h-16 rounded-full transform border-2 border-black"
      />
      <div className="flex flex-col justify-between w-[90%]">
        <textarea
          title="tweet"
          name="tweet"
          id="tweet"
          cols={10}
          rows={2}
          className="pl-4 bg-black w-full focus:outline-none"
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
