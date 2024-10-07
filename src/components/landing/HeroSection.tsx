import React from 'react'
import Image from 'next/image'
import HeroImage from '@/assets/landing/HeroImage.svg'

const HeroSection = () => {
  return (
    <div className='hero-background justify-between lg:justify-start w-full h-[95vh] lg:h-auto flex flex-col items-center pt-32 lg:pt-40 pb-20 lg:pb-4'>
      <div className='flex flex-col items-center'>
        <div className='space-grotesk-bold text-[32px] leading-8 sm:text-[36px] sm:leading-[36px] md:text-[42px] md:leading-[42px] lg:text-[52px] lg:leading-[52px] mb-10 md:mb-[13px] custom-text-gradient text-center px-6'>Explainable copilots for financial services</div>
        <div className='text-base md:text-lg dm-sans-regular text-[#505050] mb-8 md:mb-[26px] px-10 text-center'>Get verifiable and controllable responses from LLMs that are deployed safely on your premises.</div>
        <a href='#' className='btn-gradient rounded-[4.5px] text-base text-white exo-2-bold px-[52px] py-3 md:py-4'>Watch Demo</a>
      </div>
      <div className='relative w-[99%] md:w-[80%] lg:w-[65%] h-fit mr-6'>
        <Image src={HeroImage} alt='hero-image' className='object-cover' />
      </div>
    </div>
  )
}

export default HeroSection