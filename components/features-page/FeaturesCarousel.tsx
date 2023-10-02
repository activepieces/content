'use client';
import { Arrow } from "../arrow"
import { useRef, useState } from "react";
import Image from "next/image"
import { ApLink } from "../MyLink";

type FeatureVideo = {
    mp4: string;
    webm: string;
    bg: string;
    positionClass?: string;
    mobileImage: string
};

const featuresVideos: FeatureVideo[] = [
    {
        mp4: "/features/compressed_mp4/AP-NoCode-Feature_AdobeExpress.mp4",
        webm: "/features/AP-NoCode-Feature_AdobeExpress.webm",
        bg: "bg-[#FFEBC3]",
        mobileImage: "/builder.png"
    },
    {
        mp4: "/features/compressed_mp4/AP-LoopsBranches_AdobeExpress.mp4",
        webm: "/features/AP-LoopsBranches_AdobeExpress.webm",
        bg: "bg-[#E1F9B0]",
        positionClass: "!-left-[470px]",
        mobileImage: "/branch-loop.png"
    },
    {
        mp4: "/features/compressed_mp4/AP-HTTP_AdobeExpress.mp4",
        webm: "/features/AP-HTTP_AdobeExpress.webm",
        bg: "bg-[#C2EAF6]",
        positionClass: "!-left-[470px]",
        mobileImage: "/http.png"
    },
    {
        mp4: "/features/compressed_mp4/AP-CODE_AdobeExpress.mp4",
        webm: "/features/AP-CODE_AdobeExpress.webm",
        bg: "bg-[#F1DDF8]",
        mobileImage: "/code-editor.png",


    }
]
type Feat = {
    label: string;
    description: string;
    svgIcon: JSX.Element;
};

const featuresList: Feat[] = [
    {
        label: "No-code builder",
        description: "Build automations without writing code with our intuitive builder.",
        svgIcon: <svg className="h-[26.25px] w-[19.15px] lg:h-[26px] lg:w-[36px]" viewBox="0 0 26 36" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5358 12.7304C25.472 5.72401 19.7902 0.0742188 12.7679 0.0742188C5.74555 0.0742188 0.0638395 5.72401 0 12.7304V22.3063C0 29.3606 5.71363 35.0742 12.7679 35.0742C19.8222 35.0742 25.5358 29.3606 25.5358 22.3063V12.7304ZM22.3438 12.7304H14.3639V3.40983C18.8486 4.15995 22.28 8.03819 22.3438 12.7304ZM11.1719 3.40983V12.7304H3.19197C3.25581 8.03819 6.68719 4.15995 11.1719 3.40983ZM22.3438 22.3063C22.3438 27.589 18.0506 31.8822 12.7679 31.8822C7.48518 31.8822 3.19197 27.589 3.19197 22.3063V15.9224H22.3438V22.3063Z" />
        </svg>,

    },
    {
        label: "Conditions and loops",
        description: "Build your custom logic with our branch and loop pieces.",
        svgIcon: <svg className="h-[26.25px] w-[19.15px] lg:h-[26px] lg:w-[36px]" viewBox="0 0 35 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0597 27.2018C18.1932 27.2018 21.0418 25.9295 23.1118 23.8595L25.8085 26.5562C23.0548 29.2908 19.2566 31 15.0597 31C7.31145 31 0.930549 25.2078 -5.81079e-07 17.7065L3.83614 17.7065C4.7477 23.0808 9.41943 27.2018 15.0597 27.2018ZM15.0597 0.61476C23.4536 0.61476 30.2523 7.41346 30.2523 15.8074C30.2523 15.9213 30.2333 16.0353 30.2333 16.1492L32.3033 14.0792L35 16.7569L28.3532 23.4037L21.7065 16.7569L24.3842 14.0792L26.4352 16.1302C26.4352 16.0163 26.4542 15.9023 26.4542 15.8074C26.4542 9.52143 21.3456 4.41291 15.0597 4.41292C9.41942 4.41292 4.74769 8.53391 3.83614 13.9083L-7.47102e-07 13.9083C0.930549 6.40695 7.31145 0.614761 15.0597 0.61476Z" />
        </svg>,

    },
    {
        label: "Send HTTP requests",
        description: "Send requests to any endpoint with the generic HTTP piece.",
        svgIcon: <svg className="h-[26.25px] w-[19.15px] lg:h-[26px] lg:w-[36px]" viewBox="0 0 36 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.85 5.55L16.3667 10.9167L3.83333 9.25L3.85 5.55ZM16.35 20.0833L3.83333 25.45V21.75L16.35 20.0833ZM0.516667 0.5L0.5 12.1667L25.5 15.5L0.5 18.8333L0.516667 30.5L35.5 15.5L0.516667 0.5Z" />
        </svg>,


    },
    {
        label: "Write code when you want",
        description: "Write JavaScript code when you're in the mood for a custom step.",
        svgIcon: <svg className="h-[26.25px] w-[19.15px] lg:h-[26px] lg:w-[36px]" viewBox="0 0 28 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5875 14.2953L4.55 8.25781L10.5875 2.22031L8.75 0.382812L0.875 8.25781L8.75 16.1328L10.5875 14.2953ZM17.4125 14.2953L23.45 8.25781L17.4125 2.22031L19.25 0.382812L27.125 8.25781L19.25 16.1328L17.4125 14.2953Z" />
        </svg>,



    }
]
const CarouselItemTemplate = (props: { active: boolean, index: number, setActiveIndex: (idx: number) => void, video: FeatureVideo, feat: Feat }) => {
    const descriptionDiv = useRef<HTMLDivElement | null>(null);
    return <div className=" pb-[2.5rem]">
        <div className={(props.active ? "text-primary fill-primary" : "text-black fill-black") + " select-none transition-colors flex items-center text-h5-sm lg:text-h5-lg font-semibold px-[1.875rem] pt-[1.875rem] lg:pt-[2.5rem] "}>
            <div onClick={() => props.setActiveIndex(props.index)} className="cursor-pointer">
                {props.feat.svgIcon}
            </div>
            <div className="w-[2.1875rem] cursor-pointer h-full" onClick={() => props.setActiveIndex(props.index)} >

            </div>
            <div onClick={() => props.setActiveIndex(props.index)} className="cursor-pointer">
                {props.feat.label}
            </div>

        </div>
        <div ref={descriptionDiv} style={{ height: props.active ? descriptionDiv.current?.scrollHeight + "px" : '0px' }} className=" pl-[5.125rem] lg:pl-[6.3125rem] overflow-hidden transition-all">
            <div className="text-h6-sm lg:text-h6-lg  !font-normal my-5 lg:!font-light lg::my-[2.1875rem] max-w-[33.75rem]">
                {props.feat.description}
            </div>
            <ApLink href="https://cloud.activepieces.com/sign-up" rel="noopener noreferer" target="_blank" className="flex items-center gap-4 text-h6-sm lg:text-h6-lg" >
                Start free <Arrow width={20.67} height={10.34} ></Arrow>
            </ApLink>

        </div>
        <div className={props.video.bg + " lg:max-h-0 lg:hidden flex items-center justify-center px-4 w-[358px] " + (props.active ? "h-[358px]  mt-6 " : 'h-0 overflow-hidden')}>
            <Image alt={props.feat.label} src={props.video.mobileImage} height={300} width={300} className="h-[300px] w-[300px] object-contain"></Image>
        </div>
    </div>
}

export const FeaturesCarousel = () => {
    const [activeIdx, setActiveIdx] = useState(0);



    return <section className="bg-white overflow-hidden">
        <div className='flex  px-4 container mx-auto lg:px-0'>

        </div>
        <div className="py-25 lg:py-37.5  px-4 lg:px-0 container mx-auto ">
            <h1 className="text-h4-lg lg:text-h2-lg text-center mb-[3.75rem] lg:mb-20 ">
                Build the automations <br></br>
                you always wanted
            </h1>
            <div className="flex gap-[5.3125rem] lg:min-h-[46.125rem] h-[770px]" >
                <div className="flex flex-col lg:py-[2.1875rem] lg:min-w-[28.75rem] w-full lg:w-[initial]  divide-y divide-black/30">

                    {featuresList.map((feature, idx) => (<CarouselItemTemplate index={idx} active={idx === activeIdx} setActiveIndex={setActiveIdx} key={idx} feat={feature} video={featuresVideos[idx]} ></CarouselItemTemplate>))}

                </div>
                <div className={featuresVideos[activeIdx].bg + "  h-full  w-full rounded-tl-md rounded-bl-md py-15 pl-15 overflow-hidden "}>
                    {
                        featuresVideos.map((video, idx) => {
                            return <div key={idx} className={"w-[1650px] -mr-[550px] h-full relative " + (idx === activeIdx ? "block" : "hidden")}>
                                <div className={"absolute top-0 left-0 h-full bottom-auto right-auto " + video.positionClass} >
                                    <video playsInline autoPlay muted loop width={1028} height={728} className={'rounded-tl-md rounded-bl-md  w-auto h-full  ' + (idx === activeIdx ? "block" : "hidden")}>
                                        <source src={video.webm} />
                                        <source src={video.mp4} />
                                    </video>
                                </div>

                            </div>

                        })
                    }

                </div>
            </div>

        </div>
    </section>

}