import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const PageTitle = ({Text}) => {
  return (
    <div className='flex justify-between px-4 py-2'>
      <h5 className='font-poppins font-semibold text-xl' >{Text}</h5>
  
      <BsThreeDotsVertical className='text-[#5F35F5] text-xl  rounded-r-2xl py-[6px] box-content'/>
    </div>
    
  )
}

export default PageTitle