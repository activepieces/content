'use client'

import { FlowTemplate } from '@activepieces/shared';
import Image from 'next/image'
import AiCard from './AiCard';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Menu, MenuItem, MenuButton, ControlledMenu } from '@szhsin/react-menu';

const menuItemClassName = ({ hover }: { hover: boolean }) =>
    hover ? 'apps-menuitem' : 'apps-menuitem';

const scrollBy = 358;
const CenterOfWorldSection = (props: {
    props: { template: FlowTemplate, piecesIcons: string[] }[]
}) => {

    const sectionDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const sliderDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const menuButtonRef = useRef(null);
    const [isAppMenuOpen, setisAppMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => { setMarginLeft(sectionDiv.current ? getComputedStyle(sectionDiv.current).marginLeft : '0px'); }
        handleResize();
        window.addEventListener("resize", handleResize, false);

    });
    const [marginLeft, setMarginLeft] = useState('0px');

    return (<>
        <section className="bg-[#E7FFA4] py-[100px] lg:py-[160px] ">
            <div ref={sectionDiv} className='container mx-auto px-4 lg:px-0'>
                <div className='flex text-h2-sm lg:text-h2-lg flex-wrap gap-[20px] lg:gap-[10px] items-center '>
                    <div className='basis-full lg:basis-auto' >
                        <Image src="/three.svg" alt='one' width={39} height={41} className='w-[30px] h-[24px] lg:w-[43px] lg:h-[34px]'></Image>
                    </div>

                    <div >
                        Make <div></div>
                    </div>
                    <ControlledMenu menuClassName="apps-menu">
                        <MenuItem className={menuItemClassName}>
                            <div className='item-container'>
                                New File
                            </div>
                            <div className='border-b border-solid border-white  border-opacity-20 mx-[30px]'></div>
                        </MenuItem>

                        <MenuItem className={menuItemClassName} >
                            <div className='item-container'>
                                New File
                            </div>

                            <div className='border-b border-solid border-white border-opacity-20  mx-[30px]'></div></MenuItem>

                        <MenuItem className={menuItemClassName}>  <div className='item-container'>
                            New File
                        </div></MenuItem>
                    </ControlledMenu>

                </div>
                <div className='flex'>
                    <h2 className='text-black text-h6-sm lg:text-h6-lg mt-[20px] lg:mt-[40px] max-w-[958px] mb-[40px] lg:mb-[80px]'>
                        Grow your team of AIs to scale up your blog content, offer customer service and auto post to your social accounts.
                    </h2>
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
            } className='flex gap-[15px] overflow-scroll px-4 lg:px-0 ai-cards-slider items-center' ref={sliderDiv}>
                {
                    props.props.map((_, i) => <AiCard key={i} template={_.template} piecesIcons={_.piecesIcons}></AiCard>)
                }

            </div>

        </section >
    </>);
}
export default CenterOfWorldSection;