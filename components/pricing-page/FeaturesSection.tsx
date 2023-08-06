'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FeaturesList } from "./FeatureList";
import { FeatureCardProps } from "./FeatureCard";
const features: FeatureCardProps[] = [
    {
        featImage: "/pricing/feat_1.svg",
        featText: "Your most intuitive automation builder ever"
    },
    {
        featImage: "/pricing/feat_2.svg",
        featText: "100+ pieces to use in your automations"
    },
    {
        featImage: "/pricing/feat_3.svg",
        featText: "Countless templates to start your flows from"
    },
    {
        featImage: "/pricing/feat_4.svg",
        featText: "Loops and branches to add logic to your flows"
    },
    {
        featImage: "/pricing/feat_5.svg",
        featText: "Transparent logs to debug or celebrate your runs"
    },
    {
        featImage: "/pricing/feat_6.svg",
        featText: "Write code when you feel extremely wild"
    }
]
export const FeaturesSection = () => {
    const [expandfeatures, setExpandFeatures] = useState(false)
    return (
        <>
            <section className="bg-[#F0ECFC]">
                <div className="container mx-auto py-[135px] px-4 md:px-0 min-h-[614px] ">
                    <div className="flex justify-center">
                        <div role="button" onClick={() => { setExpandFeatures(!expandfeatures) }} className="bg-white mx-auto rounded cursor-pointer border border-solid border-black text-black inline-flex gap-5 py-[15px] px-[35px] items-center text-h4-sm lg:text-h4-lg tracking-wid ">
                            {!expandfeatures ? "Show all features" : "Show less"}
                            <Image src="/chevron_black.svg" alt="chevron" height={14} width={7} className={(expandfeatures ? "-rotate-90" : "rotate-90") + " w-[27px] h-[18px] "}></Image>
                        </div>
                    </div>

                    <div className={(expandfeatures ? "max-h-[9999px]" : "max-h-0 !duration-0 ") + " w-full duration-500 transition-all overflow-hidden"}>
                        <div>
                            <div className="text-[50px] leading-[65px] lg:text-[80px] p-[40px] md:p-[80px] font-bold lg:leading-[96px] text-center">
                                You get these <span className="text-primary"> awesome <br className="hidden md:block"></br> features</span> in all our plans
                            </div>
                        </div>
                        <FeaturesList features={features} expandList={expandfeatures}></FeaturesList>
                    </div>



                </div>

            </section>

            <section className={(expandfeatures ? "min-h-[903px] lg:min-h-[836px] " : "min-h-[500px] lg:min-h-[500px]") + " bg-white  relative py-[100px]  lg:py-[150px] "}>
                <div className={(expandfeatures ? " top-[90px]  lg:top-[150px] " : "") + " w-full transition-al px-[15px] lg:px-0  duration-[800ms]  -top-[320px]  lg:-top-[225px] absolute"}>
                    <div className="bg-black relative  overflow-hidden container   mx-auto rounded-[12px]  lg:py-[100px] p-[30px] lg:px-[80px] flex flex-wrap lg:flex-nowrap">
                        <div className="flex flex-col gap-[25px] lg:gap-[51px]">
                            <div className="text-[34px] w-[298px] md:w-[initial] text-white lg:items-center  font-bold leading-[40.80px] flex-col-reverse md:flex-row flex  gap-[20px] tracking-wide">
                                Community edition <div className="flex"><div className="text-[16px] flex-inline whitespace-nowrap lg:text-[22px] !leading-[26.4px] font-normal tracking-wide px-[15px] py-[10px] lg:px-[25px] lg:py-[14px] text-[#06FFB4] border border-solid border-[#06FFB4] rounded-full"> We are <b>open source</b> </div></div>
                            </div>
                            <div className="text-white text-h6-sm md:text-h6-lg">
                                Activepieces is an open core software, you can self host it on your machine for free. Our cloud version is built on this core but has more features.
                            </div>
                            <Link href="https://github.com/activepieces/activepieces" target="_blank" rel="noopener noreferer" className="flex gap-[25px]  items-center">
                                <Image src="/github_white.svg" alt="github" width={50} height={50} className="w-[30px] lg:w-[50px]"></Image>
                                <div className="text-h6-sm font-bold lg:text-h3-lg text-white">
                                    Visit GitHub
                                </div>

                                <Image src="/arrow_white.svg" alt="arrow" width={33.3} height={16.6}></Image>
                            </Link>
                        </div>
                        <div className=" min-h-[336.469px] min-w-[688.32px]">
                            <Image src="/dog.svg" alt="dog" width={587} height={587} className="w-full md:w-[378px] md:-bottom-[2px] lg:w-[587px]  absolute -bottom-[50px] left-0 md:left-[initial]  lg:bottom-[initial] lg:top-0 md:right-0"></Image>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}