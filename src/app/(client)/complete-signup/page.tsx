"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const session = useSession();
  const email = session.data?.user?.email;

  const handleSignup = async (e: any) => {
    e.preventDefault();
    toast.loading("Signing up...");

    if (!username) {
      toast.error("Please enter a username");
      return;
    }
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });

      if (!res.ok) {
        throw new Error("Username already taken");
      }

      toast.success("Signed up successfully");
      router.push("/home");
      toast.dismiss();
    } catch (error: any) {
      toast.error(error.message);
      router.push("/api/auth/signin");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between p-2 bg-neutral-700 rounded-xl">
        <h1 className="text-3xl my-4">Complete your SignUp</h1>
        <form
          onSubmit={handleSignup}
          className="bg-neutral-900 p-8 rounded-lg shadow-md w-80"
        >
          <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full bg-neutral-800 border border-neutral-700 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded font-bold`}
          >
            New User Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
