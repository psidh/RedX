"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleSignup = async (e: any) => {
    e.preventDefault();
    toast.loading("Signing up...");

    try {
      // Basic input validation
      if (!username) {
        throw new Error("Please fill in all fields");
      }

      // Form submission
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error("Username already taken");
      }

      // Redirect after successful signup
      router.push("/api/auth/signin");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  ">
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
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded  font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
