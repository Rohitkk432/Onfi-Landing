import React from 'react'
import Image from 'next/image'
import HeroImage from '@/assets/HeroImage.svg'

const HeroSection = () => {
  return (
    <div className='hero-background w-full flex flex-col items-center pt-32 pb-4'>
      <div className='flex flex-col items-center'>
        <div className='space-grotesk-bold text-[52px] mb-[13px] custom-text-gradient'>Explainable copilots for financial services</div>
        <div className='text-base dm-sans-regular text-[#505050] mb-[26px]'>Get verifiable and controllable responses from LLMs that are deployed safely on your premises.</div>
        <button className='btn-gradient rounded-[4.5px] text-base text-white exo-2-bold px-[52px] py-4'>Watch Demo</button>
      </div>
      <div className='relative w-[65%] h-fit mr-6'>
        <Image src={HeroImage} alt='hero-image' className='object-cover' />
      </div>
    </div>
  )
}

export default HeroSection