"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

interface Tweet {
  id: string;
  content: string;
  date: string;
  likeCount: number;
  comment: number;
  userId: string;
}

export default function Tweets() {
  const sessionEmail = useSession().data?.user?.email;
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
          setError("Failed to fetch tweets");
          toast.error("Failed to fetch tweets");
        } finally {
          setLoading(false);
        }
      };
      fetchTweets();
    }
  }, [sessionEmail]);

  return (
    <div className="flex items-center justify-start">
      <div className="w-full rounded-lg shadow-md">
        {error && <div className="mt-4 text-red-600">{error}</div>}
        <div className="mt-6">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="p-4 mb-4 rounded-md shadow">
              <p className="text-gray-800">{tweet.content}</p>
              <div className="mt-2 text-neutral-200 text-sm flex justify-evenly items-start">
                <p>Date: {new Date(tweet.date).toLocaleString()}</p>
                <p>Likes: {tweet.likeCount}</p>
                <p>Comments: {tweet.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
