import React from 'react'

export default function SectionTitle(props) {
  return (
    <div className='flex-center flex-col gap-2 w-full md:w-[628px] mx-auto'>
        <h2 className='text-neutral-d-gray font-interSemibold text-lg xs:text-2xl sm:text-4xl'>{props.title}</h2>
        <p className='text-neutral-gray text-xs xs:text-base'>{props.caption}</p>
    </div>
  )
}
