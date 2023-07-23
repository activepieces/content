import Image from "next/image";
import Link from "next/link";
import { FlowTemplate } from '@activepieces/shared'
export interface CenterOfWorldCard {
    template: FlowTemplate,
    piecesIcons: string[],
    bannerUrl: string
}

const CenterOfWorldCard = (props: CenterOfWorldCard) => {

    return (
        <>
            <div className="border border-solid border-[#000000] rounded-[6px] overflow-hidden lg:min-w-[358px] min-w-[250px]" >
                <div className={`w-full bg-cover bg-norepeat  h-[140px]`} style={{ backgroundImage: `url('${props.bannerUrl}')` }}></div>
                <div className="p-[25px] lg:pb-[65px] lg:p-[35px] bg-white flex flex-col gap-[30px]">



                    <div className="text-h6-sm lg:text-h6-lg text-black  leading:[21.6px] lg:leading-[31.9px] !font-bold  " >
                        {
                            props.template.description
                        }
                    </div>
                    <div className="flex gap-[10px] lg:gap-[15px]">
                        {
                            props.piecesIcons.map((icon, idx) => (
                                <div className="flex items-center p-[6.667px] lg:p-[10px] border border-solid border-outline rounded-lg" key={idx}>
                                    <Image alt={icon} src={icon} width={20} height={20} className="h-[26.67px] object-contain w-[26.67px] lg:h-[40px] lg:w-[40px]"></Image>
                                </div>
                            ))
                        }
                    </div>


                </div>
                <Link target="_blank" rel="noopener noreferrer" className="bg-black text-white  justify-between text-h4-sm lg:text-h4-lg  text-center py-[15px] lg:py-[10px] px-[35px] items-center flex " href={"https://cloud.activepieces.com/templates/" + props.template.id}>
                    Try it   <Image alt='arrow' src="/arrow_white.svg" width={33} height={16} className="w-[20.67px] h-[10.34px] md:w-[33px] md:h-[16px] "></Image>
                </Link>
            </div >


        </>
    );
};
export default CenterOfWorldCard;
