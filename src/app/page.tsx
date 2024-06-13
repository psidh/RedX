import Trending from "@/components/Home/Trending";
import Sidebar from "@/components/Home/Sidebar";
import Main from "@/components/Main";
import BottomBar from "@/components/Home/BottomBar";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-between">
        <div>
          <Sidebar />
        </div>
        <div className="w-full lg:w-[60%] lg:ml-[19%]">
          <Main />
        </div>
        <div className="hidden lg:flex lg:w-[28%]">
          <div className="flex flex-col justify-start items-center w-full">
            <Trending />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <BottomBar />
      </div>
    </div>
    </>
  );
}
