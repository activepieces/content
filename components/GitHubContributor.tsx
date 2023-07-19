import Image from "next/image";
import Link from "next/link";
export interface ContributorProps {
    imageUrl: string,
    githubAccount: string,
    tagColor: string,
    githubUrl: string
}

const Contributor = (stat: ContributorProps) => {
    return (
        <>
            <div>
                <div className=" flex flex-col w-[115px] items-center   lg:w-[180px]">
                    <Image alt={stat.githubAccount} src={stat.imageUrl} width={230} height={230} className="w-[115px] h-[115px] lg:h-[180px] lg:w-[180px] "></Image>
                    <Link href={stat.githubUrl} rel="noopener noreferer" target="_blank" className="text-white font-bold text-sm rounded-full px-[15px]   whitespace-nowrap -mt-[15px] text-center py-[10px]" style={{ backgroundColor: stat.tagColor }}>
                        {stat.githubAccount}
                    </Link>


                </div>
            </div>


        </>
    );
};
export default Contributor;
