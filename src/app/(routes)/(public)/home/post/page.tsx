"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const TweetPage = () => {
  const [content, setContent] = useState("");
  const router = useRouter();
  const session = useSession();

  const handleTweetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("tweeting...");

    // Replace with actual userId from authentication context
    const email = session?.data?.user?.email;

    const response = await fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, content }),
    });

    const data = await response.json();

    if (response.ok) {
      // Reset the content field and navigate to home or show success message
      setContent("");
      toast.dismiss();
      toast.success("Tweet posted successfully");
      router.push(`/home/profile/${session.data?.user?.email}`); // Redirect to home or another page
    } else {
      toast(data.error || "Failed to post tweet");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center poster">
      <form
        onSubmit={handleTweetSubmit}
        className="border-t border-red-500 p-8 rounded-xl shadow-red-500 shadow-xl w-96"
      >
        <h1 className="text-2xl font-bold mb-6">Post a Tweet</h1>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium">
            Tweet Content
          </label>
          <textarea
            id="content"
            className="mt-1 p-2 w-full bg-neutral-900 border border-neutral-700 rounded focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 rounded  font-bold"
        >
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetPage;
