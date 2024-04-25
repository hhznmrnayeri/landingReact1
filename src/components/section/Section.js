import React from 'react'

export default function Section(props) {
  return (
    <div className="container mt-10 py-14">
      <div className='grid grid-cols-1 md:grid-cols-12 gap-2 items-center'>
        <div className={`bg-cover  col-span-1 md:col-span-12 lg:col-span-5 w-full hidden xs:block ${props.styleName}`}></div>
        <div className='flex flex-col items-start col-span-1 md:col-span-12 lg:col-span-7 text-start'>
          <h2 className='font-interSemibold text-2xl sm:text-4xl'>{props.title}</h2>
          <p className='text-sm text-neutral-gray mt-4 mb-8'>{props.caption}</p>
          <button className='text-white bg-primary font-interMedium rounded py-3.5 px-8'>Learn More</button>
        </div>
      </div>
    </div>
  )
}
