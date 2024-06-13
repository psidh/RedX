import Trending from "@/components/Home/Trending";
import Sidebar from "@/components/Home/Sidebar";
import Main from "@/components/Main";
export default function Home() {
  return (
    <>
      <div className={`flex justify-between`}>
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[52%]">
          <Main />
        </div>
        <div className="w-[28%]">
          <Trending />
        </div>
      </div>
    </>
  );
}
