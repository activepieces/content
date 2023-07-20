'use client'

import { FlowTemplate } from '@activepieces/shared';
import Image from 'next/image'
import AiCard from './AiCard';
import { MutableRefObject, useEffect, useRef, useState } from 'react';


const arr = [1, 2, 3, 4, 5, 6, 7];
const scrollBy = 358;
const AiSection = (props: { template: FlowTemplate, piecesIcons: string[] }) => {

    const sectionDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const sliderDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    useEffect(() => {
        const handleResize = () => { setMarginLeft(sectionDiv.current ? getComputedStyle(sectionDiv.current).marginLeft : '0px'); }
        handleResize();
        window.addEventListener("resize", handleResize, false);

    });
    const [marginLeft, setMarginLeft] = useState('0px');

    return (<>
        <section className="bg-[#FAEAFF] py-[100px] lg:py-[160px] ">
            <div ref={sectionDiv} className='container mx-auto px-4 md:px-0'>
                <h2 className='mb-[80px] lg:mb-[100px]'>
                    <div className='hidden md:block text-black text-[50px] font-bold leading-[80px] lg:text-[80px] flex flex-col '>
                        <div>
                            <span className='text-primary relative'>
                                4 awesome <Image alt='drops' src='/drops.svg' height={39.165} width={61.223} className='absolute top-0 -left-[9px]'></Image>
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
                    <div className='text-black text-h6-sm lg:text-h6-lg mt-[20px] lg:mt-[40px] max-w-[958px] mb-[40px] lg:mb-[80px]'>
                        Grow your team of AIs to scale up your blog content, offer customer service and auto post to your social accounts.
                    </div>
                    <div className='hidden lg:flex gap-[60px] grow justify-end'>
                        <Image alt='arrow' src="/arrow.svg" width={33} height={16} className='rotate-180 cursor-pointer'
                            onClick={() => sliderDiv.current?.scrollBy({
                                behavior: 'smooth',
                                left: -scrollBy,
                            })}></Image>
                        <Image alt='arrow'
                            onClick={() => sliderDiv.current?.scrollBy({
                                behavior: 'smooth',
                                left: scrollBy,
                            })} className='cursor-pointer' src="/arrow.svg" width={33} height={16}></Image>
                    </div>
                </div>


            </div>
            <div style={
                {
                    marginLeft: marginLeft
                }
            } className='flex gap-[15px] overflow-scroll px-4 lg:px-0 ai-cards-slider' ref={sliderDiv}>
                {
                    arr.map((_, i) => <AiCard key={_} template={props.template} piecesIcons={props.piecesIcons}></AiCard>)
                }

            </div>

        </section >
    </>);
}
export default AiSection;