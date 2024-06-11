"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
export default function TweetBox() {
  const session = useSession();
  const imgSrc = session?.data?.user?.image || "";
  const url = "/home/profile/email" + session?.data?.user?.email;

  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTweetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("tweeting...");

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
      router.push(`/home/profile/email?${session.data?.user?.email}`); // Redirect to home or another page
    } else {
      toast.dismiss();
      toast(data.error || "Failed to post tweet");
      toast.dismiss();
    }
  };

  return (
    <div className="flex justify-between items-start p-4 w-full border-b border-neutral-800/80">
      <a title="user" href={url}>
        <Image
          src={imgSrc}
          alt="Profile Icon"
          width={96}
          height={96}
          className="rounded-full border-4 border-black object-cover"
        />
      </a>
      <div className="flex flex-col justify-between w-full">
        <textarea
          title="tweet"
          name="tweet"
          id="tweet"
          cols={10}
          rows={2}
          className="pl-4  w-full focus:outline-none bg-black"
          placeholder="Type Something..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-500 w-[25%]
          hover:bg-blue-500/90 text-center font-bold text-md 
           py-2 mt-2 px-4 rounded-full
         transition-all duration-150"
          onClick={handleTweetSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
