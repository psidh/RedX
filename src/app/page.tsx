import Sidebar from '@/components/Home/Sidebar';
import SearchBar from '@/components/Home/SearchBar';
import Main from '@/components/Main';
export default function Home() {
  return (
    <>
      <section className='flex'>
        <Sidebar />
        <Main />
        <SearchBar />
      </section>
    </>
  );
}
