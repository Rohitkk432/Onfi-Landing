import React from 'react'
import Image from 'next/image'
import ReliableImg from '@/assets/ReliableSection.svg'


const ReliableSection = () => {
  return (
    <div className='section-inner-shadow flex flex-col items-center w-full pt-[50px] pb-20'>
        <div className='poppins-semibold text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[64px] px-6 sm:px-10 custom-text-gradient text-center lg:leading-[84px] mb-8'>
        Reliable and repeatable responses
        </div>
        <div className='poppins-regular text-base md:text-[21px] text-center text-[#2F2F2F] mb-[50px] px-10' >Analyse all the production interactions with the LLM and granularly any attribute response drift across<span className='hidden lg:inline'><br/></span> changes in the LLM, model input context, retrieval recall, and prompt changes.</div>
        <div className='relative w-full xl:w-[80%] pl-10 lg:pl-40'>
          <Image src={ReliableImg} alt='reliable-img' className='object-cover' />
        </div>
    </div>
  )
}

export default ReliableSection