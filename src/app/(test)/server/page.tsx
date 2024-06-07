import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

export default async function page() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Server Component</h1>
      <p>Data: {JSON.stringify(session)}</p>
    </div>
  );
}
