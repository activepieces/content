import Link from "next/link";
import { FeatureCard, FeatureCardProps } from "./FeatureCard"
import Image from "next/image"
const features: FeatureCardProps[] = new Array(6).fill(0).map((_, i) => {
    return {
        featText: "A software engineer's guide to A/B testing",
        featImage: "/screenshot.png"
    }
});
export const FeaturesList = (props: { expandList: boolean }) => {
    return <>
        <div>
            <div className="text-[50px] leading-[65px] lg:text-[80px] p-[40px] md:p-[80px] font-bold lg:leading-[96px] text-center">
                You get these <span className="text-primary"> awesome <br className="hidden md:block"></br> features</span> in all our plans
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-[30px] justify-center">
                {
                    features.map((feat, i) => <FeatureCard key={i} featImage={feat.featImage} featText={feat.featText}></FeatureCard>)
                }
            </div>
        </div>
        <Link href="https://cloud.activepieces.com/sign-up" rel="noopener noreferer" target="_blank" className="flex items-center justify-center p-4 mt-[100px] gap-[17px] !font-semibold lg:gap-[25px] text-h5-sm lg:text-h4-lg ">
            <Image src={"/acitvepieces-logo-black.svg"} height={27} width={30} alt="Activepieces logo" className="h-[27px] w-[30px]" >
            </Image>
            Start free
            <Image src={"/arrow.svg"} alt="arrow" width={33} height={16} className="h-[16px] w-[33px]" ></Image>
        </Link>
    </>
}