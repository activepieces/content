import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../arrow";
export interface OpenSourceStatProps {
    logo: JSX.Element,
    ctaText: string,
    statText: string,
    logoAlt: string,
    ctaUrl: string,
}

const OpenSourceStat = (stat: OpenSourceStatProps) => {
    return (
        <>
            <Link href={stat.ctaUrl} target="_blank" rel="noopener noreferer" className='flex fill-black hover:fill-primary hover:text-primary text-black transition-colors flex-wrap md:flex-nowrap items-center'>
                <div className='flex gap-[15px] items-center basis-full md:basis-0  gap-[25px] grow text-h4-sm md:text-h4-lg'>
                    {stat.logo}
                    {stat.statText}
                </div>

                <div className="flex items-center gap-[5px] md:px-[5px] mt-[24px] lg:mt-[0px] font-bold lg:font-medium text-h6-sm md:text-h6-lg">
                    {stat.ctaText} <Arrow></Arrow>

                </div>
            </Link>



        </>
    );
};
export default OpenSourceStat;
