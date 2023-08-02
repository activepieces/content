'use client'
import { ControlledMenu, MenuItem, useClick } from '@szhsin/react-menu';
import Image from 'next/image';
import { MutableRefObject, useRef, useState } from 'react';
import { ComparisonCard } from './ComparisonCard';
import Link from 'next/link';

type ComparisonApp = {
    icon: string;
    appName: string;
    miss: string[];
    love: string[];
};

const apps: ComparisonApp[] = [
    {
        appName: "Zapier",
        icon: "/zapier-icon.svg",
        miss: ["Extreme limitation of features", "Insance price hikes", "Closed ecosystem"],
        love: ["All features included", "Fair pricing", "Open source"]
    },

]
export const ComparisionSection = () => {
    const menuItemClassName = ({ hover }: { hover: boolean }) =>
        hover ? 'apps-menuitem transition-all' : 'apps-menuitem ';
    const [isAppMenuOpen, setisAppMenuOpen] = useState(false);
    const anchorProps = useClick(isAppMenuOpen, setisAppMenuOpen);
    const [selectedApp, setSelectedApp] = useState(apps[0]);
    const menuButtonRef: MutableRefObject<null | HTMLDivElement> = useRef(null);
    return <>
        <section className="bg-white px-4 lg:px-0 py-[100px] lg:py-[150px]">
            <div className="mx-auto container">
                <div className="text-black text-[50px] leading-[50px] lg:leading-[60px]  font-bold   lg:text-[80px] mb-[40px] lg:mb-[80px] ">
                    <div className='flex gap-[10px] flex-wrap lg:gap-[25px] mb-[10px] lg:mb-[30px]'>
                        Switching from <div className='select-none cursor-pointer  relative items-center select-none flex gap-[8.5px]' {...anchorProps} ref={menuButtonRef} style={
                            { color: isAppMenuOpen ? "#6E41E2" : "#111111" }
                        }>

                            <Image alt={selectedApp.appName} src={selectedApp.icon} width={60} height={60} className="h-[26.67px] w-[26.67px] lg:h-[60px] lg:w-[60px]"></Image>
                            {selectedApp.appName}
                            <svg className='mt-[16px] lg-[28px]' width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <Image alt="underline" src="/menu_underline.svg" width={202} height={193} className='absolute w-full -bottom-[10px] lg:-bottom-[24px] left-[10px]'></Image>
                        </div>
                    </div>
                    <div className='leading-[55px]'>
                        like many others?
                    </div>
                </div>
                <ControlledMenu
                    state={isAppMenuOpen ? 'open' : 'closed'}
                    anchorRef={menuButtonRef}
                    onClose={() => setisAppMenuOpen(false)} menuClassName="apps-menu">
                    {
                        apps.filter(app => app.appName !== selectedApp.appName).map((app, idx) =>
                            <MenuItem className={menuItemClassName} key={idx} onClick={() => setSelectedApp(app)}>
                                <div className='item-container text-h4-sm lg:text-h4-lg cursor-pointer flex gap-2  items-center'>
                                    <div className=" bg-white flex items-center p-[5px] lg:p-[10px] border border-solid border-outline rounded-lg ">
                                        <Image alt={selectedApp.appName} src={app.icon} width={20} height={20} className="h-[20px] w-[20px] lg:h-[40px] lg:w-[40px]"></Image>
                                    </div>  {app.appName}
                                </div>
                                <div className='border-b border-solid border-white  border-opacity-20 mx-[15px] '></div>
                            </MenuItem>
                        )
                    }


                </ControlledMenu>

                <div className='flex gap-[15px] lg:gap-[30px] flex-wrap '>
                    <ComparisonCard
                        discussionPoints={selectedApp.miss}
                        icon={selectedApp.icon}
                        appName={selectedApp.appName}
                        bgClass='bg-[#AEE241] bg-opacity-10 basis-1'
                        tagline='You will miss 😂'
                        key={selectedApp.appName + "_miss"}
                    ></ComparisonCard>
                    <ComparisonCard
                        discussionPoints={selectedApp.love}
                        icon="/activepieces_logo.svg" appName="ActivePieces"
                        bgClass='bg-primary bg-opacity-10 basis-1'
                        tagline='You will love 🚀'
                        key={selectedApp.appName + "_love"}
                    ></ComparisonCard>
                </div>

                <div className='mt-[40px] lg:mt-[60px] items-center justify-between flex-wrap flex gap-5 text-h3-sm lg:text-h3-lg '>
                    Activepieces is the best alternative to {selectedApp.appName}
                    <Link href="https://cloud.activepieces.com/sign-up" target='_blank' rel='noreferer noopener' className='  rounded-sm hover:-translate-y-[6px] transition-transform items-center justify-center px-[43px] w-full lg:w-[initial]  lg:py-[10px] py-[26px] bg-black text-white lg:text-h4-lg text-h4-sm flex gap-5 '>
                        Get started  <Image src="/arrow_white.svg" alt="arrow" width={33.3} height={16.6}></Image>
                    </Link>
                </div>
            </div>

        </section>
    </>
}
