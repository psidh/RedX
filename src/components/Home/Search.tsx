"use client";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>(null);

  const fetchResults = async () => {
    try {
      {
        const res = await fetch(`/api/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: search }),
        });
        const data = await res.json();
        setResults(data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="search-input-bar flex items-center">
        <input
          type="text"
          title="search"
          className="bg-[#313131] pl-4 focus:outline-none w-full border-r border-neutral-400 mr-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IoSearch
          className="mr-2 text-2xl cursor-pointer"
          onClick={fetchResults}
        />
      </div>
      <div>
        {results ? (
          <a href={`/home/profile/email?${results.user.email}`} target="_blank">
            <div className="rounded-xl bg-neutral-800 p-4 flex flex-col items-start justify-start">
              <h1 className="text-xl font-semibold mb-2">
                @{results.user.username}
              </h1>
              <p>{results.user.email}</p>
            </div>
          </a>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
