import React from 'react'

export default function Social(props) {
  return (
    <button className='rounded-full w-8 h-8 bg-white/10 flex-center child:w-5 child:h-5'>
        {/* <img src={props.img} alt="social" className='w-4 h-4' /> */}
        {props.img}
    </button>
  )
}
