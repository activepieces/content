'use client';
import Image from "next/image";
import Lottie from "lottie-react";
import phoneAnimation from "./phone_animation.json"
export const FeaturesSection = () => {
    return (
        <>
            <section className="bg-[#F0ECFC]">
                <div className="container mx-auto py-[135px] px-4 md:px-0 min-h-[614px] ">
                    <div className="flex justify-center">
                        <div className="bg-white mx-auto rounded cursor-pointer border border-solid border-black text-black inline-flex gap-5 py-[15px] px-[35px] items-center text-h4-sm lg:text-h4-lg tracking-wid ">
                            Show all features
                            <Image src="/chevron_black.svg" alt="chevron" height={14} width={7} className="rotate-90 w-[27px] h-[18px] "></Image>
                        </div>
                    </div>

                </div>

            </section>

            <section className="bg-white min-h-[614px] px-[15px] lg:px-0">
                <div className="bg-black overflow-hidden container mx-auto rounded-[12px] lg:py-[100px] p-[30px] lg:px-[80px] flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-col gap-[25px] lg:gap-[51px]">
                        <div className="text-[34px] w-[298px] md:w-[initial] text-white lg:items-center  font-bold leading-[40.80px] flex-col-reverse md:flex-row flex  gap-[20px] tracking-wide">
                            Community edition <div className="flex"><div className="text-[16px] flex-inline whitespace-nowrap lg:text-[22px] !leading-[26.4px] font-normal tracking-wide px-[15px] py-[10px] lg:px-[25px] lg:py-[14px] text-[#06FFB4] border border-solid border-[#06FFB4] rounded-full"> We are <b>open source</b> </div></div>
                        </div>
                        <div className="text-white text-h6-sm md:text-h6-lg">
                            Activepieces is an open core software, you can self host it on your machine for free. Our cloud version is built on this core but has more features.
                        </div>
                        <div className="flex gap-[25px]  items-center">
                            <Image src="/github_white.svg" alt="github" width={50} height={50} className="w-[30px] lg:w-[50px]"></Image>
                            <div className="text-h6-sm font-bold lg:text-h3-lg text-white">
                                Visit GitHub
                            </div>

                            <Image src="/arrow_white.svg" alt="arrow" width={33.3} height={16.6}>

                            </Image>
                        </div>
                    </div>
                    <div className=" relative min-h-[336.469px] min-w-[688.32px]">
                        <Lottie animationData={phoneAnimation} loop={false} className="absolute -scale-x-[1] grow  w-[400px] h-[400px] left-[18px]  top-[65px]  md:left-[222px] md:-top-[135px]  md:h-[700px] md:w-[575px]   lg:w-[946.32px] lg:-top-[90px]  lg:left-[60px] " />
                    </div>

                </div>
            </section>
        </>
    )
}