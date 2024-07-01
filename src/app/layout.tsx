import type { Metadata } from "next";
import  { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";
const plus_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <body className={`bg-black text-white  ${plus_sans.className} `}>
        <Providers>
          <Toaster />
           {children}
        </Providers>
      </body>
    </html>
  );
}
