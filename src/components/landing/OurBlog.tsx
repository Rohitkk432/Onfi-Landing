import React from 'react'
import Image,{StaticImageData} from 'next/image'
import Blog1Img from "@/assets/Blog1.png"
import Blog2Img from "@/assets/Blog2.png"
import Blog3Img from "@/assets/Blog3.png"

import ArrowRightIcon from '@/assets/icons/right-arrow.svg'

interface BlogCardProps {
    title:string;
    description:string;
    link:string;
    tags:string[];
    imgSrc:StaticImageData
}

const uiData:BlogCardProps[] = [
    {
        title:'How To Start Using Banko For Your\n Startup',
        description:'Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod tempor\n incididunt ut labore et dolore magna aliqua.\n Dui accumsan sit amet nulla facilisi morbi.',
        link:'#',
        tags:['Product','Technology'],
        imgSrc:Blog1Img,
    },
    {
        title:'10 Things Nobody Told You About\n Banko',
        description:'Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod tempor\n incididunt ut labore et dolore magna aliqua.\n Dui accumsan sit amet nulla facilisi morbi.',
        link:'#',
        tags:['Product','Technology'],
        imgSrc:Blog2Img,
    },
    {
        title:'7 Ways To Improve You Saving Habits',
        description:'Lorem ipsum dolor sit amet, consectetur\n adipiscing elit, sed do eiusmod tempor\n incididunt ut labore et dolore magna aliqua.\n Dui accumsan sit amet nulla facilisi morbi.',
        link:'#',
        tags:['Product','Technology'],
        imgSrc:Blog3Img,
    }
]


const BlogCard:React.FC<BlogCardProps> = ({title,description,link,tags,imgSrc}) => {
    return (
        <a href={link} className='flex flex-col w-[380px]'>
            <div className='relative overflow-hidden rounded-2xl w-full h-[380px]'>
                <Image src={imgSrc} alt='blog-img' className='object-cover' fill />
            </div>
            <div className='poppins-semibold text-[21px] text-[#272727] text-wrap whitespace-pre-line mt-6 mb-2'>{title}</div>
            <div className='poppins-regular text-[16px] text-[#272727] text-wrap whitespace-pre-line mb-6'>{description}</div>
            <div className='flex gap-2'>
            {tags.map((tag:string,idx:number)=>
                <div key={idx} className='bg-[#10A68C8F] rounded-[4px] text-[#272727] poppins-medium text-sm px-2.5 py-1'>{tag}</div>
            )}
            </div>
        </a>
    )
}


const OurBlog = () => {
  return (
    <div className='section-inner-shadow flex flex-col items-center w-full pt-[50px] pb-[100px]'>
        <div className='poppins-semibold text-[64px] custom-text-gradient text-center leading-[84px] mb-8'>
        Our blog
        </div>
        <div className='flex gap-8 mb-8'>
            {uiData.map((item:BlogCardProps,idx:number)=>
                <BlogCard title={item.title} description={item.description} link={item.link} imgSrc={item.imgSrc} tags={item.tags} key={idx} />
            )}
        </div>
        <a href='#' className='flex items-center ml-auto mr-40'>
            <div className='text-[21px] text-[#5BB5A2] poppins-semibold'>All Articles</div>
            <div className='relative w-6 h-6'>
                <Image src={ArrowRightIcon} alt='right-arrow' className='object-cover' fill />
            </div>
        </a>
    </div>
  )
}

export default OurBlog