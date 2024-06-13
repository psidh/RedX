import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import Image from "next/image";

export default async function ProfileBar() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const imgSrc = session?.user?.image || "";

  return (
    <div>
      <a className="sidebar2">
        <Image
          src={imgSrc}
          alt="Profile Icon"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-md">{session?.user?.name}</p>
          <p className="text-md text-neutral-500 hover:text-red-600 text-md">
            View Profile
          </p>
        </div>
      </a>
    </div>
  );
}
