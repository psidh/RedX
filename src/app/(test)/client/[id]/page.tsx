import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Page() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  return (
    <div>
      <h1>id: {session?.user.id}</h1>
    </div>
  );
}
