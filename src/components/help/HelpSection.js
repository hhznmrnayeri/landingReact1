import React from 'react'

export default function HelpSection(props) {
  return (
    <div className='flex items-center gap-4 '>
        <div className='w-12 h-12 flex-center'>
            <img src={props.img} alt="help" className='h-10'/>
        </div>
        <div className='flex flex-col items-start '>
            <h4 className='font-interBold text-3xl'>{props.number}</h4>
            <h6 className='text-neutral-gray'>{props.name}</h6>
        </div>
    </div>
  )
}
