import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <>
      <section className='flex justify-between'>
        <Sidebar />
        <SearchBar />
      </section>
    </>
  );
}
