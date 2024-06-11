import SearchBar from "@/components/Home/SearchBar";
import Sidebar from "@/components/Home/Sidebar";
import BottomBar from "@/components/Home/BottomBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="hidden lg:flex lg:w-[18%]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[58%]">{children}</div>
        <div className="hidden lg:flex lg:w-[28%]">
          <SearchBar />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
