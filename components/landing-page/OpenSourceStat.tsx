import Image from "next/image";
import Link from "next/link";
export interface OpenSourceStatProps {
    logoUrl: string,
    ctaText: string,
    statText: string,
    logoAlt: string,
    ctaUrl: string,
}

const OpenSourceStat = (stat: OpenSourceStatProps) => {
    return (
        <>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div className='flex gap-[15px] items-center basis-full md:basis-0  gap-[25px] grow text-h4-sm md:text-h4-lg'>
                    <Image alt={stat.logoAlt} src={stat.logoUrl} width={50} height={50}></Image>
                    {stat.statText}
                </div>
                <Link href={stat.ctaUrl} target="_blank" rel="noopener noreferer">
                    <div className="flex gap-[5px] md:px-[5px] mt-[24px] lg:mt-[0px] font-bold lg:font-medium text-h6-sm md:text-h6-lg">
                        {stat.ctaText} <Image alt='arrow' src="/arrow.svg" width={33} height={16}></Image>
                    </div>
                </Link>


            </div>
        </>
    );
};
export default OpenSourceStat;
