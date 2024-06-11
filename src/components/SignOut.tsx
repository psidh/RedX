"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div className="flex w-full items-center justify-center text-center">
      <button className="text-center w-full text-xl font-bold" onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
}
