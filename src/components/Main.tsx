import TitleBox from './Home/TitleBox';
import TweetBox from './TweetBox';

export default function Main() {
  return (
    <div className='w-[45%]'>
      <div className='flex flex-col justify-start items-start '>
        <div className='w-full'>
          <TitleBox params={'Home'} />
          <TweetBox />
        </div>
      </div>
    </div>
  );
}
