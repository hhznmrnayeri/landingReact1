import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function MarketingBox(props) {
  return (
    <div className={`col-span-1 sm:col-span-6 lg:col-span-4 relative rounded-lg h-72 bg-cover ${props.styleName}`}>
        <div className='absolute w-11/12 h-32 sm:h-44 mx-auto bg-neutral-silver shadow-8 rounded-lg p-2 xl:p-4 flex flex-col justify-between items-center gap-4 left-0 right-0 -bottom-14 sm:-bottom-20'>
            <p className='text-neutral-gray font-interSemibold text-sm sm:text-xl'>{props.text}</p>
            <button className='text-primary flex items-center font-interSemibold gap-2 text-sm sm:text-xl'>Readmore <FaArrowRightLong className='w-3 sm:w-6 h-3 sm:h-6'></FaArrowRightLong></button>
        </div>
    </div>
  )
}
