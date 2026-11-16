import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import PageTitle from "../components/PageTitle";
import GroupItemsCard from "../components/GroupItemsCard";
import Image from "../components/Image";

import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

// read operation from database

const Friends = () => {
  const data = useSelector((state) => state.activeuser.value);
  // console.log(data);
  const [friends, setFriends] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "friends");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().receiverid ||
          data.uid == item.val().senderid
        ) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriends(arr);
    });
  }, []);
  console.log(friends);

  return (
    <>
      {/* input container start */}
      <div className="flex items-center shrink-0 rounded-2xl shadow-[0px_2px_4px_1px_rgba(0,0,0,0.26)]">
        <LuSearch className="text-black text-xl bg-white rounded-l-2xl py-3 px-3 box-content" />

        <input
          type="text"
          placeholder="Search"
          className="bg-white font-poppins font-medium text-[#3d3d3d] text-base py-[10px] pr-2 w-full min-w-0 border-none outline-none"
        />

        <BsThreeDotsVertical className="text-[#5F35F5] text-xl bg-white rounded-r-2xl py-[12px] px-3 box-content" />
      </div>
      {/* input container end */}

      {/* Groups card start */}
      <div className="w-full flex-1 min-h-0 bg-white mt-5 pb-2 rounded-2xl shadow-[0px_1px_4px_2px_rgba(0,0,0,0.26)] flex flex-col">
        <div className="shrink-0">
          <PageTitle Text={"Friend's"} />
        </div>

        {/* items */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {friends.map((item) => (
            <div
              className='flex justify-between items-center px-3 relative mb-8
            after:absolute after:-bottom-4 after:w-[93%] after:h-[1px]         after:content-[""] after:bg-black/20
    '
            >
              <div className="flex gap-4 items-center">
                <div className="w-[50px] h-[50px] bg-black/60 rounded-full">
                  <Image
                    src={data.uid == item.senderid ? item.receiverphoto : item.senderphoto}
                    className={`w-full h-full rounded-full object-cover object-center`}
                  />
                </div>
                <div>
                  <p className="font-poppins font-bold text-black text-base">
                    {data.uid == item.senderid ? item.receivername : item.sendername}
                  </p>
                  <p className="font-poppins font-medium text-[#4d4d4d] text-sm mt-0.5">
                    {"dafsdfas asdfsdf gas "}
                  </p>
                </div>
              </div>

              {/* button */}
              <button className="bg-blue-violet font-poppins font-semibold text-base px-4 text-white rounded-md cursor-pointer">
                Block
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Friends;
