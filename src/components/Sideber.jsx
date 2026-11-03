import React, { useEffect, useState } from "react";
import Image from "./Image";
import ProfilePick from "../assets/profilePick.png";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideberMenu from "./SideberMenu";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

import { getDatabase, ref, onValue } from "firebase/database";

const Sideber = () => {
  let data = useSelector((state) => state.activeuser.value);
  // console.log(data.uid);

  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logut");
        setTimeout(() => {
          navigate("/login");
        }, 150);
        localStorage.removeItem("activeUser");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // for profile name read operation
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const alluserRef = ref(db, "aluser/");
    onValue(alluserRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if(data.uid == item.val().userid) {

          arr.push(item.val());
        }
      });
      setAllUsers(arr);
    });
  }, []);
  // console.log(allUsers);

  return (
    <div
      className="w-[80%] mx-auto mt-6 h-[92vh] rounded-[20px] bg-[#5F35F5] py-10 group relative
    "
    >
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col items-center">
          {allUsers.map((item) => (
            <div>
              <Image src={ProfilePick} className={`w-[100px]`} />
              <h2 className=" text-white text-center mt-2 text-xl font-poppins font-semibold">{item.name}</h2>
            </div>
          ))}

          <div className="mt-10 flex flex-col gap-10">
            <SideberMenu
              className={` after:top-[198px]  before:top-[198px]`}
              Path="/deshboard/home"
              ConditionPath="deshboard/home"
              Icon={IoHomeOutline}
              Color="deshboard/home"
            />

            <SideberMenu
              className={` after:top-[268px]  before:top-[268px]`}
              Path="/deshboard/massage"
              ConditionPath="deshboard/massage"
              Icon={IoChatbubbleEllipsesSharp}
              Color="deshboard/massage"
            />

            <SideberMenu
              className={` after:top-[337px]  before:top-[337px]`}
              Path="/deshboard/notifications"
              ConditionPath="deshboard/notifications"
              Icon={IoIosNotificationsOutline}
              Color="deshboard/notifications"
            />

            <SideberMenu
              className={` after:top-[408px]  before:top-[408px]`}
              Path="/deshboard/setting"
              ConditionPath="deshboard/setting"
              Icon={IoSettingsOutline}
              Color="deshboard/setting"
            />
          </div>
        </div>
        <RiLogoutBoxRLine
          onClick={handleLogout}
          className="text-white text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sideber;
