import SearchBar from "@/components/Home/SearchBar";
import Sidebar from "@/components/Home/Sidebar";
import BottomBar from "@/components/Home/BottomBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-between">
        <div className="fixed top-0 left-0 h-full hidden lg:flex lg:w-[19%]">
          <Sidebar />
        </div>
        <div className="w-full lg:w-[60%] lg:ml-[17.83%]">{children}</div>
        <div className="hidden lg:flex lg:w-[28%]">
          <div className="flex flex-col justify-start items-center w-full">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <BottomBar />
      </div>
    </div>
  );
}
