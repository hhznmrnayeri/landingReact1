import React from 'react';
// import Logo from 'images/Logo.webp';

export default function Nav() {
  return (
    <nav>
        <div className="container">
            {/* nav wrapper */}
            <div className='flex items-center justify-between py-5'>
                {/* logo */}
                <a href="index.html">
                    <img src="images/Logo.webp" alt="logo" />
                </a>
                {/* menu */}
                <ul className='hidden md:flex items-center gap-3 lg:gap-12 text-black'>
                    <li>
                        <a href="1">Home</a>
                    </li>
                    <li>
                        <a href="1">Service</a>
                    </li>
                    <li>
                        <a href="1">Feature</a>
                    </li>
                    <li>
                        <a href="1">Product</a>
                    </li>
                    <li>
                        <a href="1">Testimonial</a>
                    </li>
                    <li>
                        <a href="1">FAQ</a>
                    </li>
                </ul>
                {/* btn wrapper */}
                <div className='flex items-center text-sm font-interMedium gap-1 xs:gap-3.5'>
                    <button className=' text-primary'>Login</button>
                    <button className='text-white bg-primary rounded-md px-2 py-2.5 xs:px-4'>Sign up</button>
                </div>
            </div>
        </div>
    </nav>
  )
}
