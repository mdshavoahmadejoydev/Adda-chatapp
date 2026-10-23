import React from 'react'
import Image from './Image'
import ProfilePick from '../assets/profilePick.png'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import SideberMenu from './SideberMenu';
import { useSelector } from 'react-redux';

const Sideber = () => {

  let data = useSelector(state => (state.activeuser.value))

  return (
    <div
      className="w-[80%] mx-auto mt-6 h-[92vh] rounded-[20px] bg-[#5F35F5] py-10 group relative
    "
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center">
          <div>
            <Image src={ProfilePick} className={`w-[100px]`} />
            <h2 className=' font-semibold'>shajib khan</h2>
          </div>
          
          <div className="mt-10 flex flex-col gap-10">
  
            <SideberMenu className={` after:top-[185px]  before:top-[185px]`} Path="/deshboard/home" ConditionPath="deshboard/home" Icon={IoHomeOutline} Color="deshboard/home"/>
            
            <SideberMenu className={` after:top-[255px]  before:top-[255px]`} Path="/deshboard/massage" ConditionPath="deshboard/massage" Icon={IoChatbubbleEllipsesSharp} Color="deshboard/massage"/>
            
            <SideberMenu className={` after:top-[324px]  before:top-[324px]`} Path="/deshboard/notifications" ConditionPath="deshboard/notifications" Icon={IoIosNotificationsOutline} Color="deshboard/notifications"/>

            <SideberMenu className={` after:top-[395px]  before:top-[395px]`} Path="/deshboard/setting" ConditionPath="deshboard/setting" Icon={IoSettingsOutline} Color="deshboard/setting"/>
            
          </div>
        </div>
        <RiLogoutBoxRLine className="text-white text-3xl" />
      </div>
    </div>
  );
}

export default Sideber