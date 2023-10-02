import { FlowTemplate } from "@activepieces/shared";
import { Arrow } from "../arrow";
import Image from "next/image";
import { ApLink } from "../MyLink";
export interface TemplatesListItemProps {
    template: FlowTemplate,
    piecesIcons: string[],
    baseColorClass: string
}
const TemplatesListItem = (props: TemplatesListItemProps) => {
    return (
        <>
            <ApLink href={`https://cloud.activepieces.com/import-flow-uri-encoded?flow=${encodeURIComponent(JSON.stringify(props.template))}`} target="_blank" rel="noopener noreferer" className={`${props.baseColorClass} hover:text-primary hover:fill-primary transition-all  flex flex-wrap md:flex-nowrap gap-[25px] items-center`}>
                <div className="flex gap-[10px] lg:gap-[15px]">
                    {
                        props.piecesIcons.map((icon, idx) => (
                            <div className=" bg-white flex items-center p-[6.667px] lg:p-[10px] border border-solid border-outline rounded-lg" key={idx}>
                                <Image alt={icon} src={icon} width={20} height={20} className="h-[26.67px] w-[26.67px] lg:h-[40px] lg:w-[40px] object-contain"></Image>
                            </div>
                        ))
                    }
                </div>
                <div className="text-h4-sm lg:text-h4-lg">
                    {props.template.description}
                </div>
                <div className="flex md:grow md:justify-end">

                    <div className="flex md:px-[5px]  !font-bold grow  gap-[5px] md:w-[105px] items-center justify-end   text-h6-sm md:text-h6-lg">
                        Try it <Arrow width={33} height={16} className="w-[20.67px] h-[10.34px] md:w-[33px] md:h-[16px] "></Arrow>
                    </div>

                </div>



            </ApLink>
        </>
    );
};
export default TemplatesListItem;
