import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
export default function Customer() {
  return (
    <div className='bg-neutral-silver'>
      <div className="container py-8">
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4 xl:gap-20 items-stretch'>
          <div className='col-span-1 md:col-span-4 bg-section3 rounded-lg bg-center bg-cover h-80 overflow-hidden block md:hidden lg:block'></div>
          <div className='col-span-1 md:col-span-12 lg:col-span-8 flex flex-col items-start text-start'>
            <p className='font-interMedium text-neutral-gray'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h5 className='mt-4 mb-2 text-primary font-interSemibold text-xl'>Tim Smith</h5>
            <p className='text-neutral-l-gray'>British Dragon Boat Racing Association</p>
            <div className='flex items-center justify-between gap-4 lg:gap-2 xl:gap-8 mt-8 w-full flex-wrap'>
              <ul className='flex items-center gap-4 lg:gap-2 xl:gap-10 justify-between flex-grow flex-wrap'>
                <img src="./images/client1.webp" alt="customer" className='w-12'/>
                <img src="./images/client2.webp" alt="customer" className='w-12'/>
                <img src="./images/client3.webp" alt="customer" className='w-12'/>
                <img src="./images/client4.webp" alt="customer" className='w-12'/>
                <img src="./images/client5.webp" alt="customer" className='w-12'/>
                <img src="./images/client6.webp" alt="customer" className='w-12'/>
              </ul>
              <button className='text-primary flex items-center gap-2 font-interSemibold sm:text-xl flex-shrink-0'>Meet all customers <FaArrowRightLong className='w-3 sm:w-6 h-3 sm:h-6'></FaArrowRightLong></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
