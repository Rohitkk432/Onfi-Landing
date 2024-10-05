import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'

const Nav = () => {
  return (
    <nav className='flex absolute items-center justify-between my-8 px-4 py-3 bg-[#F9F8EE] rounded-[21px] border border-[#E6E6E6] nav-shadow w-[80%]'>
        <div className='relative'>
            <Image src={Logo} alt='logo' className='object-cover' />
        </div>
        <div className='flex items-center justify-center gap-7 text-base poppins-regular text-[#10A68C]'>
            <a href="#">Why NeoGPT?</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
        </div>
        <button className='btn-gradient rounded-[4.5px] text-[13px] text-white exo-2-bold px-[22px] py-[9px]'>Get free trial</button>
    </nav>
  )
}

export default Nav