import { IoSearch } from 'react-icons/io5';
import TrendingBox from './Trending';
export default function SearchBar() {
  return (
    <div className='w-[30%]'>
      <div className='flex flex-col justify-start items-start py-6 px-8 h-[100vh]  border-l  border-[#515151]'>
        <div className='search-input-bar'>
          <input
            type='text'
            title='search'
            className='bg-[#313131] pl-4  focus:outline-none w-full'
            placeholder='Search...'
          />
          <IoSearch className='mr-2 text-xl' />
        </div>
        <TrendingBox />
      </div>
    </div>
  );
}
