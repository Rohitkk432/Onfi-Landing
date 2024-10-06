import React from 'react'
import Image from 'next/image'
import NeoGPTChart from '@/assets/NeoGPTChart.svg'


const NeoGPTSection = () => {
  return (
    <div className='section-inner-shadow flex flex-col items-center w-full py-[61px]'>
        <div className='poppins-semibold text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[48px] md:leading-[56px] lg:text-[64px] px-6 sm:px-10 custom-text-gradient text-center lg:leading-[84px] mb-7'>
          NeoGPT is in the top 10%ile of CFA,<span className='hidden xl:inline'><br/></span> FRM, and NISM test takers
        </div>
        <div className='poppins-regular text-base md:text-[21px] text-center text-[#2F2F2F] mb-9 px-10' >This makes us the ideal deployment across financial use cases that involve reasoning from multiple documents.</div>
        <div className='relative w-[95%] xl:w-[80%] pl-10 lg:pl-40'>
          <Image src={NeoGPTChart} alt='neogpt-chart' className='object-cover' />
        </div>
        <a href='#' className='btn-gradient rounded-lg p-[2.5px] mt-[66px]'>
          <div className='rounded-[5.5px] poppins-bold bg-[#FEFDF5] leading-[31px] text-[#36AA8E] text-[21px] px-9 py-2 md:py-3'>View Results</div>
        </a>
    </div>
  )
}

export default NeoGPTSection