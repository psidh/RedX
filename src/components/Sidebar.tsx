import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { FaUser } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <div>
      <div className='flex flex-col justify-between px-20 py-12 w-[30%]'>
        <div className='sidebar'>
          <div className='element'>
            <GoHomeFill className='text-3xl' /> <p>Home</p>
          </div>
          <div className='element'>
            <IoSearch className='text-3xl' /> <p>Explore</p>
          </div>
          <div className='element'>
            <IoNotificationsOutline className='text-3xl' /> <p>Notifications</p>
          </div>
          <div className='element'>
            <FaRegBookmark className='text-3xl' /> <p>Bookmarks</p>
          </div>
          <div className='element'>
            <IoMdPeople className='text-3xl' /> <p>Communities</p>
          </div>
          <div className='element'>
            <FaUser className='text-3xl' /> <p>Profile</p>
          </div>
          <button className='w-full bg-blue-500 hover:bg-white text-center font-bold text-md hover:text-black py-3 mt-2 px-8 rounded-full transition-all duration-150'>
            Post
          </button>
        </div>
        <div>{/* Profile Icon */}</div>
      </div>
    </div>
  );
}
