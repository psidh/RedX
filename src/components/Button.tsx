"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Button({
  name,
  onClick,
  disabled,
}: {
  name: string;
  onClick: () => Promise<void>;
  disabled: boolean;
}) {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`px-9 py-3 rounded-full flex items-center justify-center cursor-pointer my-2 ${
        disabled
          ? "bg-neutral-600 cursor-not-allowed"
          : "bg-neutral-800/80 hover:bg-neutral-600"
      }`}
      style={{ pointerEvents: disabled ? "none" : "auto" }}
    >
      {name === "Google" ? <FaGoogle /> : <FaGithub />}
      <p className=" ml-2">SignIn with {name}</p>
    </div>
  );
}
