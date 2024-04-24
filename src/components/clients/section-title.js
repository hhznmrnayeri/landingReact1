import React from 'react'

export default function SectionTitle(props) {
    // let title=props.title
    // let caption=props.caption
  return (
    <div className='flex-center flex-col gap-2'>
        <h2 className='text-neutral-d-gray font-interSemibold text-4xl'>{props.title}</h2>
        <p className='text-neutral-gray'>{props.caption}</p>
    </div>
  )
}
