import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import Tweets from "@/components/Tweets";

export default async function Page({ email }: any) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const imgSrc = session?.user?.image || "";

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative h-48 bg-neutral-800/80">
        <img
          src={imgSrc}
          alt="Profile Icon"
          className="w-24 h-24 rounded-full absolute bottom-0 left-4 transform translate-y-1/2 border-4 border-black"
        />
      </div>
      <div className="p-6 pt-12 border-b border-neutral-800">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">{session?.user?.name}</p>
          <p className="text-md text-[#7d7d7d]">{session?.user?.email}</p>
        </div>
      </div>
      <Tweets />
    </div>
  );
}
