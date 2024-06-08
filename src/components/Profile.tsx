import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

export default async function ProfileBar() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  return (
    <div>
      <a className="sidebar2">
        <img
          src={session?.user?.image}
          alt="Profile Icon"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-md">{session.data?.user?.name}</p>
          <p className="text-md text-[#7d7d7d]">@{session?.user?.id}</p>
        </div>
      </a>
    </div>
  );
}