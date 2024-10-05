import React from 'react';
import Image from 'next/image';
import WorksWith1 from '@/assets/workswith1.png';
import WorksWith2 from '@/assets/workswith2.png';
import WorksWith3 from '@/assets/workswith3.png';
import WorksWith4 from '@/assets/workswith4.png';

const WorksWith = () => {
  return (
    <div className='section-inner-shadow flex items-center justify-center w-full gap-7 py-[61px]'>
        <div className='custom-text-gradient poppins-regular text-[21px] text-center'>OnFinance works with banks, asset managers,<br/> wealth professionals & insurance companies.</div>
        <div className='flex items-center gap-[96px]'>
            <div className='relative h-11'>
                <Image src={WorksWith1} alt='works-with-1' className='object-cover h-full w-auto' />
            </div>
            <div className='relative h-20'>
                <Image src={WorksWith2} alt='works-with-2' className='object-cover h-full w-auto' />
            </div>
            <div className='relative h-20'>
                <Image src={WorksWith3} alt='works-with-3' className='object-cover h-full w-auto' />
            </div>
            <div className='relative h-20'>
                <Image src={WorksWith4} alt='works-with-4' className='object-cover h-full w-auto' />
            </div>
        </div>
    </div>
  )
}

export default WorksWith