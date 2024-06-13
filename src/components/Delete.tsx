"use client";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Delete({ tweet }: any) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    toast.loading("Deleting post...");
    const response = await fetch(`/api/tweet/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: tweet.id }),
    });

    const data = await response.json();
    toast.dismiss();

    if (!response.ok) {
      toast.error(data.message);
      return;
    }

    toast.success(data.message);
    setShowConfirm(false);
    router.refresh();
  };

  return (
    <div>
      <IoTrashOutline
        className="text-red-500 text-lg cursor-pointer"
        onClick={() => setShowConfirm(true)}
      />
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-neutral-800 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this post?</p>
            <div className="flex justify-around">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-neutral-300 px-4 py-2 text-black rounded hover:bg-neutral-400"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
