import React from 'react'
import Social from './Social'
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className='bg-secondary'>
      <div className="container py-16">
        <div className='flex items-start justify-between gap-2 text-neutral-silver flex-wrap gap-y-10'>
          <div className='flex flex-col items-start text-sm sm:flex-1 md:flex-none w-52 flex-shrink-0'>
            <img src="./images/Logo-footer.webp" alt="logo" />
            <p className='mb-2 mt-10'>Copyright © 2020 Nexcent ltd.</p>
            <p className='text-sm'>All rights reserved</p>
            <div className='flex items-center gap-4 mt-10'>
              <Social img={<FaInstagram></FaInstagram>}></Social>
              <Social img={<FaDribbble></FaDribbble>}></Social>
              <Social img={<FaTwitter></FaTwitter>}></Social>
              <Social img={<FaYoutube></FaYoutube>}></Social>
            </div>
          </div>
          <div className='flex items-start gap-4 lg:gap-7 sm:flex-1 md:flex-none flex-wrap gap-y-10 justify-between'>
            <div className='flex flex-col items-start gap-6  lg:w-40'>
              <h6 className='text-white font-interSemibold text-xl'>Company</h6>
              <ul className='flex flex-col items-start gap-3 child:text-sm child:cursor-pointer'>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className='flex flex-col items-start gap-6  lg:w-40'>
              <h6 className='text-white font-interSemibold text-xl'>Support</h6>
              <ul className='flex flex-col items-start gap-3 child:text-sm child:cursor-pointer'>
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>
            <div className='flex flex-col items-start gap-6 md:w-64'>
              <h6 className='text-white font-interSemibold text-xl'>Stay up to date</h6>
              <form className='bg-white/20 rounded-lg p-3 flex items-center justify-between w-full'>
                <input type="text" className='text-sm w-full border-none outline-none bg-transparent' placeholder='Your email address'/>
                <button className=''>
                  <FiSend className='w-4 h-4'></FiSend>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
