"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { FiCalendar } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";

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
          setError("Server is down");
          toast.error("Server is down");
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
        {error && (
          <div className="mt-4 text-red-600 flex flex-col items-center justify-center">
            {error}
          </div>
        )}
        <div className="my-6">
          <div key="{tweet.id}" className="p-4 mb-4 rounded-md shadow">
            <div className="flex items-center justify-start space-x-4">
              <div>
                <img
                  src={session.data?.user?.image}
                  alt="Profile Icon"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <h1 className="text-lg font-semibold">
                {session.data?.user?.name}
              </h1>
            </div>
            <p className="text-neutral-500 my-4 text-xl">{`ascascas`}</p>
            <div className="tweet-box">
              <div className="tweet space-x-2">
                <FiCalendar />
                <p>date</p>
              </div>
              <div className="tweet space-x-2">
                <FiHeart /> <p>12</p>
              </div>
              <div className="tweet space-x-2">
                <LuMessageSquare />
              </div>
            </div>
          </div>
          <div key="{tweet.id}" className="tweet-box-large">
            <div className="flex items-center justify-start space-x-4">
              <div>
                <img
                  src={session.data?.user?.image}
                  alt="Profile Icon"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <h1 className="text-lg font-semibold">
                {session.data?.user?.name}
              </h1>
            </div>
            <p className="text-neutral-500 my-4 text-xl">{`ascascas`}</p>
            <div className="tweet-box">
              <div className="tweet space-x-2">
                <FiCalendar />
                <p>date</p>
              </div>
              <div className="tweet space-x-2">
                <FiHeart /> <p>12</p>
              </div>
              <div className="tweet space-x-2">
                <LuMessageSquare />
              </div>
            </div>
          </div>
          {/* {tweets.map((tweet) => (
            <div key={tweet.id} className="p-4 mb-4 rounded-md shadow">
              <p className="text-neutral-800">{tweet.content}</p>
              <div className="tweet-box">
                <div className="tweet">
                  <FiCalendar />
                  <p>{new Date(tweet.date).toLocaleString()}</p>
                </div>
                <div className="tweet">
                  <FiHeart /> <p>{tweet.likeCount}</p>
                </div>
                <div className="tweet">
                  <AiFillMessage />
                  <p>{tweet.comment}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
