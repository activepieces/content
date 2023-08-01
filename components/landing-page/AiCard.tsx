import Image from "next/image";
import Link from "next/link";
import { FlowTemplate } from '@activepieces/shared'
export interface AiCardProps {
    template: FlowTemplate,
    piecesIcons: string[]
}

const AiCard = (props: AiCardProps) => {

    return (
        <>
            <Link href={"https://cloud.activepieces.com/templates/" + props.template.id} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-3 transition-transform border border-solid border-[#000000] rounded-md overflow-hidden lg:min-w-[358px] min-w-[250px]" >
                <div className="p-[25px] lg:pb-[65px] lg:p-[35px] bg-white flex flex-col gap-[30px]">
                    <div className="flex gap-[10px] lg:gap-[15px]">
                        {
                            props.piecesIcons.map((icon, idx) => (
                                <div className="flex items-center p-[6.667px] lg:p-[10px] border border-solid border-outline rounded-lg" key={idx}>
                                    <Image alt={icon} src={icon} width={20} height={20} className="h-[26.67px] object-contain w-[26.67px] lg:h-[40px] lg:w-[40px]"></Image>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-h6-sm lg:text-h6-lg text-black  leading:[21.6px] lg:leading-[31.9px] !font-bold  " >
                        {
                            props.template.description
                        }
                    </div>

                </div>
                <div className="bg-black text-white text-h4-sm lg:text-h4-lg  text-center py-[15px] lg:py-[10px]  flex justify-center" >
                    View automation
                </div>
            </Link>


        </>
    );
};
export default AiCard;
