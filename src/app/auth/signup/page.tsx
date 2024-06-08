"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic input validation
    if (!name || !username || !email) {
      alert("Please fill in all fields");
      return;
    }

    // Form submission
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email }),
    });

    // Redirect after successful signup
    router.push("/api/auth/signin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSignup}
        className="bg-neutral-900 p-8 rounded-lg shadow-md w-80"
      >
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full bg-neutral-800 border border-neutral-700 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full bg-neutral-800 border border-neutral-700 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
