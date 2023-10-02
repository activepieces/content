import { ApLink } from "../MyLink"
import { FeatureCard, FeatureCardProps } from "./FeatureCard"
import Image from "next/image"

export const FeaturesList = (props: { expandList: boolean, features: FeatureCardProps[] }) => {
    return <>
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-8 lg:gap-10 justify-center">
                {
                    props.features.map((feat, i) => <FeatureCard key={i} featImage={feat.featImage} featText={feat.featText}></FeatureCard>)
                }
            </div>
        </div>
        <ApLink href="https://cloud.activepieces.com/sign-up" rel="noopener noreferer" target="_blank" className="flex items-center justify-center p-4 mt-[100px] gap-[17px] !font-semibold lg:gap-[25px] text-h5-sm lg:text-h4-lg ">
            <Image src={"/acitvepieces-logo-black.svg"} height={27} width={30} alt="Activepieces logo" className="h-[27px] w-[30px]" >
            </Image>
            Start free
            <Image src={"/arrow.svg"} alt="arrow" width={33} height={16} className="h-[16px] w-[33px]" ></Image>
        </ApLink>
    </>
}