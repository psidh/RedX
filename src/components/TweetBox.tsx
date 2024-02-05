export default function TweetBox() {
  return (
    <div className='flex justify-between items-start p-4 w-full'>
      <img src='/profile.jpg' alt='Profile Picture' className='w-10 h-10' />
      <div className='flex flex-col justify-between w-[90%]'>
        <textarea
          title='tweet'
          name='tweet'
          id='tweet'
          cols={10}
          rows={2}
          className='pl-4 bg-black w-full focus:outline-none'
          placeholder='Type Something...'
        />
        <button
          className='bg-blue-500 w-[25%]
          hover:bg-blue-500/90 text-center font-bold text-md 
           py-2 mt-2 px-8 rounded-full
         transition-all duration-150'
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
