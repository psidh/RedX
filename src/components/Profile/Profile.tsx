import React from 'react'
import TitleBox from '../Home/TitleBox'

export default function Profile() {
  return (
    <div>
      <TitleBox params={"Profile"}/>
      <img src="/profile.jpg" alt="Header Pic" className='w-full h-10' />
      <img src="/profile.jpg" alt="Profile Pic" className='rounded-full border-2 border-white dark:border-black hover:opacity-85' />
    </div>
  )
}
