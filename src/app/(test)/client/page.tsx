"use client"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Page() {
  const router = useRouter();

  const session = useSession();
  
  const id = "";
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Client Component</h1>
      <p>Data: {JSON.stringify(session)}</p>

      <button onClick={() => router.push(`/client/${id}`)}>ID</button>
    </div>
  );
}
