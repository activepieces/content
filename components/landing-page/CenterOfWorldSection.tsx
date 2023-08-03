'use client'

import Image from 'next/image'
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { MenuItem, ControlledMenu, useClick } from '@szhsin/react-menu';
import CenterOfWorldCard from './CenterOfWorldCard';
import { Arrow } from '../arrow';
import { DetailedPiece } from '../../utils/piece-helper';
import { appsUsedAlways, appsUserChanges, generateTemplateFromDependencies } from '../flowTemplateGenerator';





const menuItemClassName = ({ hover }: { hover: boolean }) =>
    hover ? 'apps-menuitem transition-all' : 'apps-menuitem ';

const scrollBy = 358;
const CenterOfWorldSection = (props: {
    pieces: DetailedPiece[]
}) => {

    const sectionDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const sliderDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const menuButtonRef: MutableRefObject<null | HTMLDivElement> = useRef(null);
    const [isAppMenuOpen, setisAppMenuOpen] = useState(false);
    const [selectedApp, setSelectedApp] = useState(appsUserChanges[0]);
    const anchorProps = useClick(isAppMenuOpen, setisAppMenuOpen);

    useEffect(() => {
        const handleResize = () => { setMarginLeft(sectionDiv.current ? getComputedStyle(sectionDiv.current).marginLeft : '0px'); }
        handleResize();
        window.addEventListener("resize", handleResize, false);
    }, []);
    const [marginLeft, setMarginLeft] = useState('0px');

    return (<>
        <section className="bg-[#E7FFA4] py-[100px] lg:py-[160px] border-t border-solid border-black ">
            <div ref={sectionDiv} className='container mx-auto px-4 lg:px-0'>
                <div className='flex text-h2-sm lg:text-h2-lg flex-wrap gap-[20px] lg:gap-[10px] items-center '>
                    <div className='basis-full lg:basis-auto' >
                        <Image src="/three.svg" alt='one' width={39} height={41} className='w-[30px] h-[24px] lg:w-[43px] lg:h-[34px]'></Image>
                    </div>

                    <div className='flex  relative items-center flex-wrap'>
                        <div>
                            Centralize notifications<span className='hidden md:inline'>&nbsp;</span></div>
                        <div>in your</div>
                        <div className='select-none ml-[10px] lg:ml-[25px] cursor-pointer  relative   items-center select-none flex gap-[8.5px]' {...anchorProps} ref={menuButtonRef} style={
                            { color: isAppMenuOpen ? "#6E41E2" : "#111111" }
                        }>

                            <Image alt={selectedApp.displayName} src={selectedApp.icon} width={20} height={20} className="h-[26.67px] w-[26.67px] lg:h-[44px] lg:w-[44px]"></Image>
                            {selectedApp.displayName}
                            <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_982_1746)">
                                    <path d="M26.5627 0.280884L17.0002 9.82255L7.43774 0.280884L4.50024 3.21838L17.0002 15.7184L29.5002 3.21838L26.5627 0.280884Z" fill={isAppMenuOpen ? "#6E41E2" : "#111111"} />
                                </g>
                                <defs>
                                    <filter id="filter0_d_982_1746" x="0.500244" y="0.280884" width="33" height="23.4375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_982_1746" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_982_1746" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                            <Image alt="underline" src="/menu_underline.svg" width={202} height={193} className='absolute w-full -bottom-[6px] left-[10px]'></Image>
                        </div>
                        <ControlledMenu
                            state={isAppMenuOpen ? 'open' : 'closed'}
                            anchorRef={menuButtonRef}
                            onClose={() => setisAppMenuOpen(false)} menuClassName="apps-menu">
                            {
                                appsUserChanges.filter(app => app.appName !== selectedApp.appName).map((app, idx) =>
                                    <MenuItem className={menuItemClassName} key={idx} onClick={() => setSelectedApp(app)}>
                                        <div className='item-container text-h4-sm lg:text-h4-lg cursor-pointer flex gap-2  items-center'>
                                            <div className=" bg-white flex items-center p-[5px] lg:p-[10px] border border-solid border-outline rounded-lg ">
                                                <Image alt={selectedApp.displayName} src={app.icon} width={20} height={20} className="h-[20px] w-[20px] lg:h-[40px] lg:w-[40px]"></Image>
                                            </div>  {app.displayName}
                                        </div>
                                        <div className='border-b border-solid border-white  border-opacity-20 mx-[15px] '></div>
                                    </MenuItem>
                                )
                            }


                        </ControlledMenu>

                    </div>


                </div>
                <div className='flex'>
                    <h2 className='text-black text-h6-sm lg:text-h6-lg mt-[20px] lg:mt-[40px] max-w-[958px] '>
                        Align your team by spreading the news where they hang out, send notifications from everywhere to your Slack workspace.
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
            } className='flex gap-[15px] pt-[40px] lg:pt-[80px] overflow-scroll px-4 lg:px-0 ai-cards-slider items-center' ref={sliderDiv}>
                {
                    appsUsedAlways.map((_, i) => <CenterOfWorldCard template={generateTemplateFromDependencies(_.templateText, props.pieces,
                        { pieceName: _.appName, triggerName: _.triggerName },
                        { actionName: selectedApp.actionName, pieceName: selectedApp.appName }).template} actionApp={selectedApp} triggerApp={_} key={i} ></CenterOfWorldCard>)
                }

            </div>

        </section >
    </>);
}
export default CenterOfWorldSection;