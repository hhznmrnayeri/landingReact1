import React from 'react'
import HelpSection from './HelpSection'
export default function Help() {
  return (
    <div className='bg-neutral-silver'>
      <div className="container py-16">
        <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-10'>
          <div className='flex flex-col items-start text-start gap-2 col-span-1 md:col-span-7 lg:col-span-6'>
            <h2 className='font-interSemibold text-2xl xs:text-4xl '>Helping a local<br /><span className='text-primary'>business reinvent itself</span></h2>
            <p className='text-xs sm:text-base'>We reached here with our hard work and dedication</p>
          </div>
          <div className='col-span-1 md:col-span-5 lg:col-span-6 flex items-start flex-wrap gap-10 lg:gap-8 sm:justify-center'>
            <div className='flex flex-col items-start gap-10'>
              <HelpSection img='./icons/Members.svg' name='Members' number='2,245,341'></HelpSection>
              <HelpSection img='./icons/Event-Bookings.svg' name='Event Bookings' number='828,867'></HelpSection>
            </div>
            <div className='flex flex-col items-start gap-10'>
              <HelpSection img='./icons/Clubs.svg' name='Clubs' number='46,328'></HelpSection>
              <HelpSection img='./icons/Payments.svg' name='Payments' number='1,926,436'></HelpSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
