import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import { IoSearch } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { FaUser } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <div>
      <div className='flex flex-col justify-between items-center px-8  py-12 h-[100vh] border-r  border-[#515151]'> 
        <div className='sidebar1'>
          <div className='element space-x-8'>
            <GoHomeFill className='text-3xl' /> <p>Home</p>
          </div>
          <div className='element space-x-8'>
            <IoSearch className='text-3xl' /> <p>Explore</p>
          </div>
          <div className='element space-x-8'>
            <IoNotificationsOutline className='text-3xl' /> <p>Notifications</p>
          </div>
          <div className='element space-x-8'>
            <FaRegBookmark className='text-3xl' /> <p>Bookmarks</p>
          </div>
          <div className='element space-x-8'>
            <IoMdPeople className='text-3xl' /> <p>Communities</p>
          </div>
          <div className='element space-x-8'>
            <FaUser className='text-3xl' /> <p>Profile</p>
          </div>
          <button className='w-full bg-blue-500 hover:bg-white text-center font-bold text-md hover:text-black py-3 mt-2 px-8 rounded-full transition-all duration-150'>
            Post
          </button>
        </div>
        <div className='sidebar2'>
          <img src='/profile.jpg' alt='Profile Icon' className='w-10 h-10' />
          <div>
            <p className='text-md'>Dhananjaya</p>
            <p className='text-md text-[#7d7d7d]'>@dhananjay</p>
          </div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
}
