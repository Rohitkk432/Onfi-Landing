import React from 'react'
import Image from 'next/image'
import ReliableImg from '@/assets/ReliableSection.svg'


const ReliableSection = () => {
  return (
    <div className='section-inner-shadow flex flex-col items-center w-full pt-[50px] pb-20'>
        <div className='poppins-semibold text-[64px] custom-text-gradient text-center leading-[84px] mb-8'>
        Reliable and repeatable responses
        </div>
        <div className='poppins-regular text-[21px] text-center text-[#2F2F2F] mb-[50px]' >Analyse all the production interactions with the LLM and granularly any attribute response drift across<br/> changes in the LLM, model input context, retrieval recall, and prompt changes.</div>
        <div className='relative w-[70%] ml-20'>
          <Image src={ReliableImg} alt='reliable-img' className='' />
        </div>
    </div>
  )
}

export default ReliableSection