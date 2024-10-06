import React from 'react'
import Image from 'next/image'
import NeoGPTChart from '@/assets/NeoGPTChart.svg'


const NeoGPTSection = () => {
  return (
    <div className='section-inner-shadow flex flex-col items-center w-full py-[61px]'>
        <div className='poppins-semibold text-[64px] custom-text-gradient text-center leading-[84px] mb-7'>
          NeoGPT is in the top 10%ile of CFA,<br/> FRM, and NISM test takers
        </div>
        <div className='poppins-regular text-[21px] text-center text-[#2F2F2F] mb-9' >This makes us the ideal deployment across financial use cases that involve reasoning from multiple documents.</div>
        <div className='relative w-[65%] ml-40'>
          <Image src={NeoGPTChart} alt='neogpt-chart' className='object-cover' />
        </div>
        <a href='#' className='btn-gradient rounded-lg p-[2.5px] mt-[66px]'>
          <div className='rounded-[5.5px] poppins-bold bg-[#FEFDF5] leading-[31px] text-[#36AA8E] text-[21px] px-9 py-3'>View Results</div>
        </a>
    </div>
  )
}

export default NeoGPTSection