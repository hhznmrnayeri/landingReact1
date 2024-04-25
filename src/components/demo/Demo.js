import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
export default function Demo() {
  return (
    <div className='bg-neutral-silver py-8 flex-center flex-col gap-8 mt-20 px-4'>
      <h2 className='font-interSemibold text-2xl xs:text-4xl md:text-6xl text-secondary'>Pellentesque suscipit<br />fringilla libero eu.</h2>
      <button className='bg-primary text-white flex items-center gap-2 font-interMedium rounded py-3.5 px-8'>Get a Demo <FaArrowRightLong className='w-4 h-4'></FaArrowRightLong></button>
    </div>
  )
}
