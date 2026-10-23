
import React from 'react'
import Sideber from '../components/Sideber'
import Grid from '@mui/material/Grid'
import { LuSearch } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import PageTitle from '../components/PageTitle';
import GroupItemsCard from '../components/GroupItemsCard';
import UserCard from '../Layouts/UserCard';

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      className="pt-7 ml-1 mr-5 h-[100vh] overflow-hidden content-start"
    >
      {/* Group list start */}
      <Grid
        size={4}
        className="h-[44.5vh] rounded-2xl px-1 flex flex-col min-h-0"
      >
        <UserCard/>
      </Grid>
      {/* Group list end */}

      {/* Friends list start */}
      <Grid size={4} className="h-[44.5vh] rounded-2xl px-1 flex flex-col min-h-0">
        <UserCard/>
      </Grid>
      {/* Friends list end */}

      {/* Third column start */}
      <Grid size={4} className="h-[44.5vh] rounded-2xl px-1 flex flex-col min-h-0">
        <UserCard/>
      </Grid>
      {/* Third column end */}

      <Grid size={4} className="h-[44.5vh] rounded-2xl px-1 flex flex-col min-h-0">
        <UserCard/>
      </Grid>

      <Grid size={4} className="h-[44.5vh] rounded-2xl px-1 flex flex-col min-h-0">
        <UserCard/>
      </Grid>

      <Grid size={4} className="h-[44.5vh] rounded-2xl px-1 flex flex-col min-h-0">
        <UserCard/>
      </Grid>

    </Grid>
  );
}

export default Home




// import React from 'react'
// import Sideber from '../components/Sideber'
// import  Grid from '@mui/material/Grid'
// import { LuSearch } from "react-icons/lu";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import PageTitle from '../components/PageTitle';
// import GroupItemsCard from '../components/GroupItemsCard';

// const Home = () => {
//   return (
//       <Grid container spacing={2} className="pt-7 ml-1 mr-5 h-screen overflow-hidden">
//         {/* Group list start */}
//         <Grid size={4} className="h-[47.3vh] rounded-2xl px-1 overflow-y-hidden">
//           {/* input container start */}
//           <div className='flex items-center rounded-2xl  shadow-[0px_2px_4px_1px_rgba(0,0,0,0.26)]'>
//             <LuSearch className='text-black text-xl bg-white rounded-l-2xl py-[12px] px-3 box-content'/>

//             <input type="text" placeholder='Search' className='bg-white font-poppins font-medium text-[#3d3d3d] text-base py-[10px] pr-2 w-full border-none outline-none' />

//             <BsThreeDotsVertical className='text-[#5F35F5] text-xl bg-white rounded-r-2xl py-[12px] px-3 box-content'/>
//           </div>
//           {/* input container end */}


//           <div className='w-full h-[80%] bg-white mt-5 rounded-2xl  shadow-[0px_1px_4px_2px_rgba(0,0,0,0.26)]'>
//             <PageTitle Text={"Groups List"}/>
//             <div className='h-[78%] overflow-y-scroll '>
//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />

//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />
              
//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />
              
//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />
              
//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />
              
//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />
              
//               <GroupItemsCard src={""} userName={`Friends Reunion`} des={`Hi Guys, Wassup!`} text="JOIN" />
              

//             </div>
//           </div>
//         </Grid>
//         {/* Group list end */}

//         {/* Friends list start */}
//         <Grid size={4} className="h-[47.3vh] bg-white shadow-[0px_2px_4px_1px_rgba(0,0,0,0.26)] rounded-2xl"> 
//           <PageTitle Text={`Friends`} />
//           <div className='h-[82%] bg-red-400 overflow-y-scroll'>

//           </div>
//         </Grid>
//         {/* Friends list end */}

//         <Grid size={4}>   
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt aperiam voluptas nam veritatis. Reiciendis omnis et labore fuga est asperiores incidunt iste, animi non possimus delectus quisquam doloremque id veniam reprehenderit aliquid ullam repellat, optio exercitationem. Quidem odit quaerat incidunt doloribus quos! Eum quasi nobis dolorum? Impedit quos harum sint ex voluptatibus dolor itaque iusto veritatis, ad quo ipsum repellendus veniam ut numquam magni unde delectus ea molestias. Labore blanditiis, quibusdam facilis eveniet ipsam sint aut mollitia cum dignissimos, ex culpa excepturi perferendis repudiandae aspernatur? Dolores sapiente soluta beatae quisquam est repellat nemo eaque suscipit eveniet dignissimos! Perspiciatis ipsam doloremque voluptates soluta rerum, voluptatem atque voluptatibus eos eligendi maiores quibusdam, cumque minima reprehenderit qui illo, dolorum animi optio recusandae eum rem aut nam? Consequatur optio placeat repellat, voluptatum ab nobis impedit asperiores. Tenetur eveniet dolores distinctio officia modi. Iure repudiandae id libero neque, perferendis eaque quisquam ab suscipit officia quia ex voluptatibus aperiam quos! Ratione perferendis distinctio quae excepturi delectus ad iste ex quod dolore adipisci officiis, fugiat placeat perspiciatis recusandae aperiam eligendi id exercitationem? Sunt voluptates quo, voluptatibus quidem laborum reiciendis odit accusamus sit facere! Minima natus, cumque error impedit doloribus dolor a soluta pariatur consequuntur officiis corporis?</p>    
//         </Grid>
//       </Grid>
//   );
// }

// export default Home