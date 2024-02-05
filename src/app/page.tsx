import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
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
