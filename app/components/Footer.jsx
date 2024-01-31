import React from 'react'
import Logo from "../../public/images/website-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white'>
        <div className='container p-8 flex justify-between'>
            <span>
              <Image 
                alt='Website Logo'
                src={Logo}
                height={25}
                width={25}
              />
            </span>
            <p className='text-slate-600 text-xs sm:text-md'>
                @2024 Daniel McGrath All Rights Reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer