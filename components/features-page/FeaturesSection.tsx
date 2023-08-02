'use client';
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { FeatureCardProps } from "../pricing-page/FeatureCard";
import { FeaturesList } from "../pricing-page/FeatureList"
const features: FeatureCardProps[] = [
    {
        featImage: "/features/feat_1.svg",
        featText: "Use webhook or schedule triggers"
    },
    {
        featImage: "/features/feat_2.svg",
        featText: "Invite your team to your project"
    },
    {
        featImage: "/features/feat_3.svg",
        featText: "Keep your flows organized in folders"
    },
    {
        featImage: "/features/feat_4.svg",
        featText: "Manage your app connections in one place"
    },
    {
        featImage: "/features/feat_5.svg",
        featText: "Edit flows without affecting your runs"
    },
    {
        featImage: "/features/feat_6.svg",
        featText: "Create your own pieces and import them"
    }
]
export const FeaturesSection = () => {
    const [marginLeft, setMarginLeft] = useState('0px');
    const sectionDiv: MutableRefObject<null | HTMLDivElement> = useRef(null);
    useEffect(() => {
        const handleResize = () => { setMarginLeft(sectionDiv.current ? getComputedStyle(sectionDiv.current).marginLeft : '0px'); }
        handleResize();
        window.addEventListener("resize", handleResize, false);
    }, [marginLeft]);
    return <section className="bg-[#F0ECFC] py-[135px] px-4 lg:px-0 overflow-hidden">
        <div style={{ marginLeft: marginLeft }} className="text-[50px] hidden lg:flex lg:text-[80px] whitespace-nowrap ">
            <div className="font-bold">And sooooooooooooo</div><div className="lg:font-normal">ooooooooo</div><div className="font-light">oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</div>
        </div>
        <div style={{ marginLeft: marginLeft }} className="text-[50px] lg:hidden flex lg:text-[80px] whitespace-nowrap ">
            <div className="font-bold">And sooo</div>
            <div className="font-normal">oooo</div>
            <div className="font-light">oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</div>
        </div>
        <div className="container mx-auto  font-bold text-[50px] flex lg:text-[80px]">many more features</div>
        <div ref={sectionDiv} className="container  mx-auto mt-10 lg:mt-20  ">
            <FeaturesList features={features} expandList={true}></FeaturesList>
        </div>
    </section>
}