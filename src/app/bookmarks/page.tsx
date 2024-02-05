import TitleBox from '@/components/Home/TitleBox';

export default function page({ params }: { params: string }) {

  return (
    <div>
      <TitleBox params={'Bookmarks'} />
    </div>
  );
}
