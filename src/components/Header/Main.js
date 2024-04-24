import React from 'react'

export default function Main() {
  return (
    <>
        <div className="container pb-4">
            <div className='grid w-full items-center grid-cols-1 lg:grid-cols-12 gap-1 mt-12 lg:mt-24 xs:mb-16'>
                {/* content box */}
                <div className='flex flex-col items-start col-span-1 lg:col-span-8 xl:col-span-7'>
                    {/* header title */}
                    <h1 className='font-interSemibold text-4xl md:text-6xl text-start'>Lessons and insights<br /><span className='text-primary'>from 8 years</span></h1>
                    <p className='text-neutral-gray mt-4 mb-8 text-justify'>Where to grow your business as a photographer: site or social media?</p>
                    <button className='text-white bg-primary font-interMedium rounded text-xs sm:text-base p-2 sm:py-3.5 sm:px-8'>Register</button>
                </div>
                {/* img box */}
                <div className='bg-header col-span-1 lg:col-span-4 xl:col-span-5 h-[407px]  bg-no-repeat hidden xs:block lg:hidden xl:block object-cover mx-auto w-full bg-center'></div>
            </div>
            {/* navigation wrapper */}
            <div className='flex-center gap-2 mt-4'>
                <span className='rounded-full w-2.5 h-2.5 bg-primary'></span>
                <span className='rounded-full w-2.5 h-2.5 bg-primary opacity-30'></span>
                <span className='rounded-full w-2.5 h-2.5 bg-primary opacity-30'></span>
            </div>
        </div>
        {/* main wrapper */}
        
    </>
  )
}
