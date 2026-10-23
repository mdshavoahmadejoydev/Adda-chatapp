import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import PageTitle from "../components/PageTitle";
import GroupItemsCard from "../components/GroupItemsCard";

// read operation from database
import { getDatabase, ref, onValue } from "firebase/database";

const UserCard = () => {

  const db = getDatabase();
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    const starCountRef = ref(db, "aluser");
    onValue(starCountRef, (snapshot) => {
      // console.log(snapshot) object powa jay , jeta kno kaj a ase na . tay ata ke array a convert korer jonno....
      let arr = []
      snapshot.forEach(item => {
        arr.push(item.val())
      }) 
      // console.log(arr) array powa jay but array amr akne lagbe na . ata amr return er moddhe lagbe , {scope} er karone array ta akn theke ber hobe na . tay akn theke ber korer jonno amra oupore state nici (allUsers) , oi state theke amra return er vitore amader arr ar array(data) ta niye jabo 
      setAllUsers(arr)

    });
  }, []);
  console.log(allUsers)

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
          <PageTitle Text={"User List"} />
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">

        {
          allUsers.map(item => (
            <GroupItemsCard
              src={""}
              userName={item.name}
              des={item.email}
              text="JOIN"
            />
            
          ))
        }


          

         
        </div>
      </div>
    </>
  );
};

export default UserCard;
