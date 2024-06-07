"use client";
import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <button
        className="py-2 px-6 rounded-xl bg-neutral-700 my-12"
        onClick={() => signIn()}
      >
        Signin
      </button>
      <button
        className="py-2 px-6 rounded-xl bg-neutral-700"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
};
