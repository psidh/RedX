import React from 'react';
import { IoBalloon } from 'react-icons/io5';
import { IoCalendarOutline } from 'react-icons/io5';
import TitleBox from '../Home/TitleBox';

export default function Profile({ params }: { params: String }) {
  const name = params.charAt(0).toUpperCase() + params.slice(1);

  return (
    <div>
      <TitleBox params={'Profile'} />
      <div className='flex flex-col justify-between items-start'>
        <img
          src='/profile.jpg'
          alt='Header Pic'
          className='w-full h-44 object-cover'
        />
        <img
          src='/profile.jpg'
          alt='Profile Pic'
          className='rounded-full border-8  border-white absolute top-44 cursor-pointer
           dark:border-[#313131] hover:opacity-85 w-28 h-28 ml-4 object-cover'
        />
        <div className='mt-16 ml-8'>
          <h1 className='font-bold text-xl text-[#ebebeb]'>{name}</h1>
          <h2 className='text-[#d5d5d5] my-1'>
            Full Stack Developer in Next.js
          </h2>
          <h3 className='text-[#676767] text-sm flex items-center space-x-2'>
            <IoBalloon /> <p>6 Oct 2004</p>
          </h3>
          <h3 className='text-[#676767] text-sm flex items-center space-x-2'>
            <IoCalendarOutline /> <p>9 Feb 2019</p>
          </h3>
        </div>
      </div>
    </div>
  );
}
