"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { FiCalendar } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import Image from "next/image";

interface Tweet {
  id: string;
  content: string;
  date: string;
  likeCount: number;
  comment: number;
  userId: string;
}

export default function Tweets() {
  const session = useSession();
  const imgSrc = session.data?.user?.image || "";
  const sessionEmail = session.data?.user?.email;
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionEmail) {
      const fetchTweets = async () => {
        setLoading(true);
        toast.loading("Getting tweets...");
        setError("");
        try {
          const response = await axios.get(`/api/tweet?userId=${sessionEmail}`);
          setTweets(response.data);
          toast.success("Retrieved tweets");
        } catch (err) {
          setError("Server is down");
          toast.error("Server is down");
        } finally {
          setLoading(false);
          toast.dismiss();
        }
      };
      fetchTweets();
    }
  }, [sessionEmail]);

  return (
    <div className="flex items-center justify-start">
      <div className="w-full rounded-lg shadow-md">
        {error && (
          <div className="mt-4 text-red-600 flex flex-col items-center justify-center">
            {error}
          </div>
        )}
        <div className="my-6">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="p-4 mb-4 rounded-md shadow">
              <div className="flex items-center justify-start space-x-4">
                <div>
                  <Image
                    src={imgSrc}
                    alt="Profile Icon"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                </div>
                <h1 className="text-lg font-semibold">
                  {session.data?.user?.name}
                </h1>
              </div>
              <p className="text-neutral-500 my-4 text-xl">{tweet.content}</p>
              <div className="tweet-box">
                <div className="tweet space-x-2">
                  <FiCalendar />
                  <p>{new Date(tweet.date).toLocaleString()}</p>
                </div>
                <div className="tweet space-x-2">
                  <FiHeart /> <p>{tweet.likeCount}</p>
                </div>
                <div className="tweet space-x-2">
                  <LuMessageSquare />
                  <p>{tweet.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
