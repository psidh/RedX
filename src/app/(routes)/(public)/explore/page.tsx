import BottomBar from "@/components/Home/BottomBar";
import Sidebar from "@/components/Home/Sidebar";
import Search from "@/components/Home/Search";

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-between">
        <div className="fixed top-0 left-0 h-full hidden lg:flex lg:w-[19%]">
          <Sidebar />
        </div>
        <div className="lg:w-1/2 lg:ml-[17.83%] p-8">
          <Search />
        </div>
      </div>
      <div className="lg:hidden">
        <BottomBar />
      </div>
    </div>
  );
}
