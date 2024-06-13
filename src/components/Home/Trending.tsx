import TrendingBox from "./TrendingBox";
import Search from "./Search";
export default function Trending() {
  return (
    <div>
      <div className="flex flex-col justify-start items-start py-6 px-8 h-[100vh]">
        <Search />
        <TrendingBox />
      </div>
    </div>
  );
}
