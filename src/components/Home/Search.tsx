"use client";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        if (search) {
          const res = await fetch(`/api/user?q=${search}`);
          const data = await res.json();
          setResults(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchResults();
  }, [search]);

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
        <IoSearch className="mr-2 text-2xl cursor-pointer" onClick={() => setSearch(search)} />
      </div>
      <div>
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
