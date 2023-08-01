'use client'

import { FlowTemplate } from '@activepieces/shared';
import Image from 'next/image'
import AiCard from './AiCard';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Arrow } from '../arrow';



const scrollBy = 358;
const AiSection = (props: {
    props: { template: FlowTemplate, piecesIcons: string[] }[]
}) => {
    const [marginLeft, setMarginLeft] = useState('0px');
    const sectionDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const sliderDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    useEffect(() => {
        const handleResize = () => { setMarginLeft(sectionDiv.current ? getComputedStyle(sectionDiv.current).marginLeft : '0px'); }
        handleResize();
        window.addEventListener("resize", handleResize, false);

    }, [marginLeft]);


    return (<>
        <section className="bg-[#FAEAFF] py-[100px] lg:py-[160px] ">
            <div ref={sectionDiv} className='container mx-auto px-4 lg:px-0'>
                <h2 className='mb-[80px] lg:mb-[100px]'>
                    <div className='hidden md:block text-black text-[50px] font-bold leading-[80px] lg:text-[80px] flex flex-col '>
                        <div>
                            <span className='text-primary relative'>
                                4 awesome <Image alt='drops' src='/drops.svg' height={39.165} width={61.223} className='absolute md:-top-[5px] lg:top-0 md:-left-[22px]  md:scale-50 lg:scale-100 lg:-left-[9px]'></Image>
                            </span> ways
                        </div>
                        <div >
                            to automate your business  <Image src='/twirlled_arrow.svg' height={70} width={83} className='ml-[20px] h-[41.5px] w-[35px] lg:h-[83px] lg:w-[70px] -mt-[5px] lg:-mt-[40px] inline' alt='arrow'></Image>
                        </div>
                    </div>
                    <div className='block md:hidden text-black text-[50px] font-bold leading-[53px]  '>
                        <span className='text-primary relative'>
                            4 awesome <Image alt='drops' src='/drops.svg' height={23} width={36} className='absolute -top-[3px] -left-[4px]'></Image>
                        </span> ways to automate your business
                        <Image src='/twirlled_arrow.svg' height={70} width={83} className='ml-[20px] h-[41.5px] w-[35px] lg:h-[83px] lg:w-[70px] -mt-[5px] lg:-mt-[40px] inline' alt='arrow'></Image>
                    </div>


                </h2>
                <div className='flex text-h2-sm lg:text-h2-lg flex-wrap gap-[20px] lg:gap-[10px] items-center '>
                    <div className='basis-full lg:basis-auto' >
                        <Image src="/one.svg" alt='one' width={39} height={41} className='w-[30px] h-[24px] lg:w-[43px] lg:h-[34px]'></Image>
                    </div>

                    Scale your <br className='lg:hidden'></br> business with AI
                </div>
                <div className='flex'>
                    <h2 className='text-black text-h6-sm lg:text-h6-lg mt-[20px] lg:mt-[40px] max-w-[958px]'>
                        Grow your team of AIs to scale up your blog content, offer customer service and auto post to your social accounts.
                    </h2>
                    <div className='hidden  fill-black lg:flex gap-[60px] grow justify-end'>
                        <div className='transition-colors hover:fill-primary' onClick={() => sliderDiv.current?.scrollBy({
                            behavior: 'smooth',
                            left: -scrollBy,
                        })}>
                            <Arrow width={33} height={16} className='rotate-180 cursor-pointer'
                            ></Arrow>
                        </div>

                        <div className='transition-colors hover:fill-primary'
                            onClick={() => sliderDiv.current?.scrollBy({
                                behavior: 'smooth',
                                left: scrollBy,
                            })}>
                            <Arrow
                                className='cursor-pointer' width={33} height={16}></Arrow>
                        </div>

                    </div>
                </div>


            </div>
            <div style={
                {
                    marginLeft: marginLeft
                }
            } className='flex gap-[15px] overflow-x-scroll px-4 lg:px-0 ai-cards-slider items-center pt-[40px] lg:pt-[80px]' ref={sliderDiv}>
                <Image src="/most_used.svg" width={64} height={48} alt='most used' className='w-[64px] h-[78px] -mr-[30px] z-50'>

                </Image>
                {
                    props.props.map((_, i) => <AiCard key={i} template={_.template} piecesIcons={_.piecesIcons}></AiCard>)
                }

            </div>

        </section >
    </>);
}
export default AiSection;