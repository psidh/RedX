import TitleBox from './Home/TitleBox';
import TweetBox from './TweetBox';

export default function Main() {
  return (
    <div className='flex flex-col justify-start items-start'>
      <TitleBox params={'Home'} />
      <TweetBox />
    </div>
  );
}
