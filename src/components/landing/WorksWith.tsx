import React,{useRef} from 'react';
import Image from 'next/image';
import WorksWith1 from '@/assets/workswith1.png';
import WorksWith2 from '@/assets/workswith2.png';
import WorksWith3 from '@/assets/workswith3.png';
import WorksWith4 from '@/assets/workswith4.png';

import { useIsVisible } from './useIsVisible';

const WorksWith = () => {
    const refEl = useRef(null);
    const isVisible = useIsVisible(refEl);
    return (
    <div ref={refEl} className={`section-inner-shadow flex flex-wrap items-center justify-center w-full gap-7 py-[61px] transition-all ease-in duration-500 ${isVisible ? "translate-y-0" : "translate-y-20"}`}>
        <div className='custom-text-gradient poppins-regular text-[21px] text-center px-6'>OnFinance works with banks, asset managers,<span className='hidden sm:inline'><br/></span> wealth professionals & insurance companies.</div>
        <div className='flex items-center justify-center flex-wrap px-4'>
            <div className='relative mx-2 sm:mx-8 lg:mx-[48px] h-11'>
                <Image src={WorksWith1} alt='works-with-1' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-2 sm:mx-8 lg:mx-[48px] h-20'>
                <Image src={WorksWith2} alt='works-with-2' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-2 sm:mx-8 lg:mx-[48px] h-20'>
                <Image src={WorksWith3} alt='works-with-3' className='object-cover h-full w-auto' />
            </div>
            <div className='relative mx-2 sm:mx-8 lg:mx-[48px] h-20'>
                <Image src={WorksWith4} alt='works-with-4' className='object-cover h-full w-auto' />
            </div>
        </div>
    </div>
  )
}

export default WorksWith