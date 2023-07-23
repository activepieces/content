import Link from "next/link"
import Image from "next/image"
const StartBuildingSection = () => {
    return <>
        <section className="bg-black container mx-auto w-full bg-no-repeat bg-cover bg-center  flex flex-col items-center justify-center gap-8 h-[450px]">
            <div className="flex justify-center">
                <Link href="https://cloud.activepieces.com/" target="_blank" rel="noopener noreferrer" className="flex grow gap-1 md:gap-3 items-center text-neutral-900  font-bold font-bold  
               px-[82px] py-[82px] mx-4 md:mx-0 text-center 
               text-h1-lg lg:text-[80px]
               md:px-[100px] md:py-[33.5px] 
               lg:px-[222px] lg:py-[86px] bg-[#06FFB4] rounded-[12px]">Start Building Now
                    <Image
                        src='/arrow.svg'
                        alt="Start Building Now"
                        width={70}
                        height={70}
                        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] hidden md:block"
                    >
                    </Image>
                </Link>
            </div>

            <div className="text-white text-[22px] text-center font-normal leading-loose tracking-tight">Automate your work without writing code, keep your data on your machine.</div>
        </section></>
}
export default StartBuildingSection;