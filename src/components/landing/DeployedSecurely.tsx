import React,{useState} from 'react'
import Image from 'next/image'
import Slider from "react-slick";

import StarsIcon from '@/assets/icons/stars-icon.svg'
import CheckIcon from '@/assets/icons/check-icon.svg'

interface DeployUIData {
    title: string;
    useCase: string;
    pointsLarge: string[];
    pointsSmall: string[];
    link: string;
    toShowLarge:number;
    toShowSmall:number;
    cardNumber:number;
}

const uiData:DeployUIData[] = [
    {
        title: "FinDoc Plan",
        useCase: "Docs at tips",
        pointsLarge: [
            'OnFinance AI number guarantee',
            'Annual Reports, Earnings and BRSR for 1000 Indian listed companies',
            'Custom Report Generation Formats',
            'Excel extraction of charts',
            'SEBI Research Analyst Guardrails',
            'Fast processing for 10K and 10Q',
            'Supports Slides'
        ],
        pointsSmall: [
            'OnFinance AI number guarantee',
            'Excel extraction of charts',
            'SEBI Research Analyst Guardrails'
        ],
        link: "#",
        toShowLarge:7,
        toShowSmall:3,
        cardNumber:0,
    },
    {
        title: "Compliance360",
        useCase: "Most popular",
        pointsLarge: [
            'Regulation library with amendment history',
            'Auto assign compliance tasks based on bandwith and manner of compliance',
            'Allow business teams to drag-and-drop compliance workflows',
            'AI generated audit-ready MIS and PPT',
            '1-click organization chart import',
            'Setup email forwarding for private regulator communications',
            'Agentic search over entire knowledgebase'
        ],
        pointsSmall: [
            'Regulation library with amendment history',
            'AI generated audit-ready MIS and PPT',
            'Allow business teams to drag-and-drop compliance workflows'
        ],
        link: "#",
        toShowLarge:7,
        toShowSmall:3,
        cardNumber:1,
    },
    {
        title: "CreditRM Plan",
        useCase: "Most used by Credit",
        pointsLarge: [
            'Generate credit reports for 1000+ listed and unlisted companies',
            'Get 40+ SME persona templates',
            'Custom reporting format',
            'Upto 5 document sourcing automations',
            'Custom logic for ability and willingness to pay',
            'AI commentary with reasoning',
            'Extract intermediate excel'
        ],
        pointsSmall: [
            'Get 40+ SME persona templates',
            'Custom reporting format',
            'Upto 5 document sourcing automations'
        ],
        link: "#",
        toShowLarge:7,
        toShowSmall:3,
        cardNumber:2,
    }
]

interface DeployCardProps {
    data:DeployUIData,
}

const DeployCenter:React.FC<DeployCardProps> = ({data}) => {
    return (
        <div className='flex w-[34rem] flex-col rounded-xl border-4 border-[#10A68C] overflow-hidden custom-drop-shadow'>
            <div className='flex w-full gap-2 poppins-semibold bg-[#10A68C] text-[#FFFFFF] text-2xl py-5 justify-center items-center'>
                <div>{data.useCase}</div>
                <div className='relative w-6 h-6'>
                    <Image src={StarsIcon} alt='icon' className='object-cover' fill />
                </div>
            </div>
            <div className='w-full flex justify-center items-center poppins-semibold text-[#323232] text-[40px] leading-[60px] py-8 px-10 bg-[#FFFFFF] border border-[#0000001A]'>
                {data.title}
            </div>
            <div className='bg-[#F5F5F5] p-10 flex flex-col justify-center gap-4'>
                {data.pointsLarge.map((point:string,idx:number)=>{
                    if(idx<data.toShowLarge){
                        return (
                            <div key={idx} className='flex gap-4 items-center'>
                                <div className='relative w-8 h-8 shrink-0'>
                                    <Image src={CheckIcon} alt='icon' className='object-cover' fill />
                                </div>
                                <div className='text-[#636363] text-wrap poppins-regular text-[20px]'>{point}</div>
                            </div>
                        )
                    }else{
                        return <></>;
                    }
                })}
                <a href={data.link} className='w-full mt-6 rounded-lg text-center text-[#FFFFFF] bg-[#10A68C] text-[20px] poppins-medium py-4'>Deploy Now</a>
            </div>
        </div>
    )
}

const DeploySide:React.FC<DeployCardProps> = ({data}) => {
    return (
        <div
         className='flex flex-col rounded-l-xl overflow-hidden custom-drop-shadow w-[24rem]'>
            <div className='w-full flex justify-center items-center poppins-medium text-[#323232] text-[32px] leading-[60px] py-8 px-10 bg-[rgb(255,255,255)] border border-[#0000001A]'>
                {data.title}
            </div>
            <div className='bg-[#F5F5F5] p-8 flex flex-col justify-center gap-4'>
                {data.pointsSmall.map((point:string,idx:number)=>{
                    if(idx<data.toShowSmall){
                        return (
                            <div key={idx} className='flex gap-4 items-center'>
                                <div className='relative w-8 h-8 shrink-0'>
                                    <Image src={CheckIcon} alt='icon' className='object-cover' fill />
                                </div>
                                <div className='text-[#636363] text-wrap poppins-regular text-[20px]'>{point}</div>
                            </div>
                        )
                    }else{
                        return <></>;
                    }
                })}
            </div>
        </div>
    )
}

const DeployCard:React.FC<DeployCardProps> = ({data}) => {
    return(
        <div className='card-boxes'>
            <div className='main-card hidden'>
                <DeployCenter data={data} />
            </div>
            <div className='side-card'>
                <DeploySide data={data} />
            </div>
        </div>
    )
}

const DeployedSecurely = () => {
    const settings = {
        className:'w-full',
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        centerPadding: "110px",
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className='section-inner-shadow overflow-hidden flex flex-col items-center w-full py-[91px]'>
            <div className='poppins-semibold text-[64px] custom-text-gradient text-center leading-[84px] mb-[70px]'>
            Deployed securely on your premises
            </div>
            <div className='w-full flex items-center justify-center'>
                <Slider {...settings}>
                    <DeployCard data={uiData[0]} />
                    <DeployCard data={uiData[1]} />
                    <DeployCard data={uiData[2]} />
                    <DeployCard data={uiData[0]} />
                    <DeployCard data={uiData[1]} />
                    <DeployCard data={uiData[2]} />
                </Slider>
            </div>
        </div>
    )
}

export default DeployedSecurely;