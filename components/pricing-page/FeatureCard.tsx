import Image from 'next/image'
export type FeatureCardProps = {
    featText: string;
    featImage: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
    return <>
        <div className="flex flex-col gap-[25px] md:w-[406px]">
            <Image src={props.featImage} alt={props.featText} width={406} height={220} className="w-[358px] border border-solid border-black rounded-md overflow-hidden   md:w-[406px] h-[220px]">
            </Image>
            <div className="text-black text-h5-sm px-[25px] md:text-h3-sm !font-bold">
                {props.featText}
            </div>
        </div>

    </>
}