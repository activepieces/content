import { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "../../components/arrow";
import { AnimatedCurtains } from "../../components/animated-curtains/AnimatedCurtains";
import { TestimoniesSection } from "../../components/features-page/TestimoniesSection";
import ImageSlider from "../../components/landing-page/imageSlider";
import { ScreenshotsSection } from "../../components/features-page/ScreenShotsSection";
import { PiecesCarousel } from "../../components/features-page/PiecesCarousel";
import { GetPieces } from "../../utils/piece-helper";
import CombinationsMakerSection from "../../components/landing-page/CombinationsMakerSection";
import { VisibilitySection } from "../../components/features-page/VisibilitySection";
import { FeaturesSection } from "../../components/features-page/FeaturesSection";

export const metadata: Metadata = {
    title: 'Activepieces - Features',
    icons: "/favicon.ico",
}

export default async function FindAppsPage() {
    const pieces = (await GetPieces())
    return <>
        <main className="bg-[#000000] pt-[80px] border border-solid border-[#000000]">
            <section className="container mx-auto px-4 lg:px-0">
                <h1 className="text-white text-[50px] text-center tacking-[58.11px] font-bold lg:text-[80px]">
                    Meant to be <span className="text-[#EEABFF]">simple</span> yet <br className="hidden lg:block"></br> so powerful
                </h1>
                <div className="flex items-center justify-center mt-[40px] lg:mt-[80px]  ">
                    <Link href="https://cloud.activepieces.com/sign-up" target='_blank' rel='noopner' className='text-center rounded-sm hover:-translate-y-[6px] transition-transform flex items-center justify-center gap-5  text-h4-sm lg:text-h4-lg text-white bg-primary py-[15px] px-[35px] whitespace-nowrap'>
                        Get Started <Arrow className="fill-white" width={33.33} height={16.67}></Arrow>
                    </Link>
                </div>
                <div className="border  mb-[120px] lg:mb-[150px] border-solid border-white rounded overflow-hidden mt-[40px] lg:mt-[80px]">
                    <AnimatedCurtains id="indie" intervalPeriod={7000}></AnimatedCurtains>
                    <div className="py-[80px] flex items-center justify-center">
                        <TestimoniesSection></TestimoniesSection>
                    </div>
                </div>

            </section>
            <div className='flex justify-center items-center flex-col text-white mb-[70px]  lg:mb-[160px] '>
                <div className='w-[162px] text-center lg:w-fit text-h4-sm lg:text-h4-lg  mb-[50px] !font-normal'>
                    Everyone else is hopping on
                </div>
                <ImageSlider />
            </div>

            <ScreenshotsSection></ScreenshotsSection>
        </main>


        <PiecesCarousel pieces={pieces}></PiecesCarousel>
        <VisibilitySection></VisibilitySection>
        <FeaturesSection></FeaturesSection>
        <CombinationsMakerSection></CombinationsMakerSection>



    </>


}