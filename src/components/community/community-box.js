import React from 'react'

export default function CommunityBox(props) {
    // const LogoIcon=props.icon
  return (
    <div className='flex flex-col items-center col-span-1 sm:col-span-6 lg:col-span-4 shadow-2 rounded-lg py-6 px-12'>
        <span className='community__icon--wrapper child:absolute child:inset-0 child:w-full child:m-auto'>
            {props.icon}
        </span>
        <h3 className='mt-4 mb-2 text-neutral-d-gray text-3xl font-interBold'>{props.title}</h3>
        <p className='text-sm text-neutral-gray'>{props.caption}</p>
    </div>
  )
}
