import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Social Media networking site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`dark:bg-black dark:text-white bg-white :text-black ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
