import Image from "next/image";
import { ApLink } from "../MyLink";

export interface ContributorProps {
    imageUrl: string,
    githubAccount: string,
    tagColor: string,
    githubUrl: string,
    imageClasses: string
}

const Contributor = (stat: ContributorProps) => {
    return (
        <>
            <div>
                <div className=" flex flex-col w-[115px] items-center   lg:w-[180px]">
                    <Image alt={stat.githubAccount} src={stat.imageUrl} width={230} height={230} className={stat.imageClasses + " rounded-full border border-solid border-black"}></Image>
                    <ApLink href={stat.githubUrl} rel="noopener noreferer" target="_blank" className="text-white font-bold text-[16px] lg:text-[22px] rounded-full px-[15px] lg:px-[24px]   whitespace-nowrap -mt-[15px] text-center py-[8px]" style={{ backgroundColor: stat.tagColor }}>
                        @{stat.githubAccount}
                    </ApLink>


                </div>
            </div>


        </>
    );
};
export default Contributor;
