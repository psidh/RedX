"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic input validation
    if (!username) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Form submission
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      if (!res.ok) {
        toast.error("Username already taken");
        return;
      } else {
        toast.success("Saved successfully");
      }
    } catch (error: any) {
      console.log("Error FE:", error.message);
    }

    // Redirect after successful signup
    router.push("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSignup}
        className="bg-neutral-900 p-8 rounded-lg shadow-md w-80"
      >
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
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded text-white font-bold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
