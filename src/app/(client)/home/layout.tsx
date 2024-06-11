import SearchBar from "@/components/Home/SearchBar";
import Sidebar from "@/components/Home/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`dark: dark:  :  flex justify-between`}>
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[52%]">{children}</div>
      <div className="w-[28%]">
        <SearchBar />
      </div>
    </div>
  );
}
