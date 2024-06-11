import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

export default async function ProfileBar() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const imgSrc = session?.user?.image || "";

  return (
    <div>
      <a className="sidebar2">
        <img
          src={imgSrc}
          alt="Profile Icon"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-md">{session.data?.user?.name}</p>
          <p className="text-md text-neutral-500 hover:text-blue-600 text-md">View Profile</p>
        </div>
      </a>
    </div>
  );
}
