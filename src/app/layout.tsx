import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
const plus_sans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RedX",
  description: "Social Media networking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark:bg-black dark:text-white text-black bg-white   ${plus_sans.className} `}>
        <Providers>
          <Toaster />
           {children}
        </Providers>
      </body>
    </html>
  );
}
