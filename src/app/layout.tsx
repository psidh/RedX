import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Home/Sidebar";
import SearchBar from "@/components/Home/SearchBar";
import { Providers } from "./providers";

const plus_sans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter",
  description: "Social Media networking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark:bg-black dark:text-white bg-white :text-black ${plus_sans.className} flex justify-between`}
      >
        <Providers>
          <div className="w-[20%]">
            <Sidebar />
          </div>
          <div className="w-[52%]">{children}</div>
          <div className="w-[28%]">
            <SearchBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
