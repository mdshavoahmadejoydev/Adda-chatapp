import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const SideberMenu = ({Path, ConditionPath, className, Icon, Color}) => {

  

  let location = useLocation();
  let active = (location.pathname.replace("/", ""));
  // console.log(active);


  return (
    <Link
      to={Path}
      className={
        active == ConditionPath &&
        `after:absolute after:right-0 after:h-16 after:w-8/12 content-[""] after:bg-white after:rounded-l-2xl after:-z-10 z-10
                          
                          
        before:absolute before:right-0 before:h-16 before:w-2 content-[""] before:bg-[#5F35F5] before:rounded-l-4xl ${className}`
      }
    >
      {" "}
      <Icon
        className={`${active == Color ? "text-[#5F35F5]" : "text-white"} text-3xl cursor-pointer`}
      />{" "}
    </Link>
  );
};

export default SideberMenu;
