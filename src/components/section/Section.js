import React from 'react'

export default function Section(props) {
  return (
    <div className="container mt-10 py-14">
      <div className='grid grid-cols-1 md:grid-cols-12 gap-2 items-center'>
        <div className={`bg-cover ${props.styleName}`}></div>
      </div>
    </div>
  )
}
