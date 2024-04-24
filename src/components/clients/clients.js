import React from 'react'
import SectionTitle from './section-title'

export default function Clients() {
  return (
    <div className='container my-10'>
      <SectionTitle></SectionTitle>
      <div className='flex items-center justify-between mt-10 gap-4 flex-wrap'>
        <img src="images/client1.webp" alt="client" />
        <img src="images/client2.webp" alt="client" />
        <img src="images/client3.webp" alt="client" />
        <img src="images/client4.webp" alt="client" />
        <img src="images/client5.webp" alt="client" />
        <img src="images/client6.webp" alt="client" />
        <img src="images/client3.webp" alt="client" />
      </div>
    </div>
  )
}
