"use client"
import Main from "@/components/Main";
import { useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log("Session => ", session);
  return (
    <>
      <Main />
    </>
  );
}
