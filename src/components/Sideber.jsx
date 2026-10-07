import React from 'react'
import Image from './Image'
import ProfilePick from '../assets/profilePick.png'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";

const Sideber = () => {
  return (
    <div className='w-[80%] mx-auto mt-6 h-[92vh] rounded-[20px] bg-[#5F35F5] py-10'>
      <div className='flex flex-col items-center justify-between h-full'>
        <div className="flex flex-col items-center">
          <Image src={ProfilePick} className={`w-[100px]`}/>
          <div className='mt-10 flex flex-col gap-8'>
            <IoHomeOutline  className='text-white text-4xl'/>
            <IoChatbubbleEllipsesSharp  className='text-white text-4xl'/>
            <IoIosNotificationsOutline  className='text-white text-4xl'/>
            <IoSettingsOutline className='text-white text-4xl'/>
          </div>

        </div>
        <RiLogoutBoxRLine className='text-white text-4xl' />

      </div>
    </div>
  )
}

export default Sideber