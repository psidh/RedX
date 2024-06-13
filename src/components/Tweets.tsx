"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { FiCalendar } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import Image from "next/image";
import Delete from "./Delete";

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
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionEmail) {
      const fetchTweets = async () => {
        setError("");
        try {
          const response = await axios.get(`/api/tweet?userId=${sessionEmail}`);
          setTweets(response.data);
          toast.success("Retrieved posts");
        } catch (err) {
          setError("Server is down");
          toast.error("Server is down");
        } finally {
          toast.dismiss();
        }
      };
      fetchTweets();
    }
  }, [sessionEmail]);

  const formatDate = (dateString : string) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };


  return (
    <div className="flex items-center justify-start">
      <div className="w-full rounded-lg mb-12">
        {error && (
          <div className="mt-4 text-red-600 flex flex-col items-center justify-center">
            {error}
          </div>
        )}
        <div>
          {tweets.map((tweet) => (
            <div key={tweet.id} className="p-4 border-b border-r border-neutral-800">
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
              <p className="text-neutral-300 my-8 text-xl">{tweet.content}</p>
              <div className="tweet-box text-sm">
                <div className="tweet space-x-2">
                  <FiCalendar />
                  <p>{formatDate(tweet.date)}</p>
                </div>
                <div className="tweet space-x-2">
                  <FiHeart /> <p>{tweet.likeCount}</p>
                </div>
                <div className="tweet space-x-2">
                  <LuMessageSquare />
                  <p>{tweet.comment}</p>
                </div>
                <Delete tweet={tweet} />
              </div>
            </div>
          ))}
        </div>
        <h1 className="w-full text-center mt-12 mb-24 text-red-600 italic">
          End of the tweets
        </h1>
      </div>
    </div>
  );
}
