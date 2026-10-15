import React from 'react'
import Image from './Image'
import Button from './Button'

const GroupItemsCard = ({src, userName, des, text}) => {
  return (
    <div className='flex justify-between items-center px-3 relative mb-8
    after:absolute after:-bottom-4 after:w-[93%] after:h-[1px] after:content-[""] after:bg-black/20
    '>
      <div className='flex gap-4 items-center'>
        <div className='w-[50px] h-[50px] bg-black/60 rounded-full'>
          <Image src={src}/>
        </div>
        <div>
          <p className='font-poppins font-bold text-black text-base'>{userName}</p>
          <p className='font-poppins font-medium text-[#4d4d4d] text-sm mt-0.5'>{des}</p>

        </div>
      </div>
      <Button text={text}/>
    </div>
  )
}

export default GroupItemsCard