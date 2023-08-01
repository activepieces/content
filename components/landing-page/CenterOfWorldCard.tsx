import Image from "next/image";
import Link from "next/link";

export type ActionApp = {
    appName: string;
    icon: string;
    displayName: string;
    actionName: string;
};

export type TriggerApp = {
    appName: string;
    displayName: string;
    iconUrl: string;
    triggerName: string;
    bannerUrl: string,
    templateText: string
};

export interface CenterOfWorldCard {
    triggerApp: TriggerApp,
    actionApp: ActionApp,
}

const CenterOfWorldCard = (props: CenterOfWorldCard) => {

    return (
        <>
            <Link href={"https://cloud.activepieces.com/templates/"} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-3 transition-transform border border-solid  rounded-md overflow-hidden lg:min-w-[358px] min-w-[250px]" >
                <div className={`w-full bg-contain bg-norepeat h-[97px]  lg:h-[140px]`} style={{ backgroundImage: `url('${props.triggerApp.bannerUrl}')` }}></div>
                <div className="p-[25px] lg:pb-[65px] lg:p-[35px] bg-white flex flex-col gap-[30px] min-h-[189px] lg:min-h-[290px]">
                    <div className="text-h6-sm lg:text-h6-lg text-black  leading:[21.6px] lg:leading-[31.9px] !font-bold  " >
                        {
                            props.triggerApp.templateText
                        }
                    </div>
                    <div className="flex gap-[10px] lg:gap-[15px]">
                        <div className="flex items-center p-[6.667px] lg:p-[10px] border border-solid border-outline rounded-lg" >
                            <Image alt={props.triggerApp.displayName} src={props.triggerApp.iconUrl} width={20} height={20} className="h-[26.67px] object-contain w-[26.67px] lg:h-[40px] lg:w-[40px]"></Image>
                        </div>
                        <div className="flex items-center p-[6.667px] lg:p-[10px] border border-solid border-outline rounded-lg" >
                            <Image alt={props.actionApp.displayName} src={props.actionApp.icon} width={20} height={20} className="h-[26.67px] object-contain w-[26.67px] lg:h-[40px] lg:w-[40px]"></Image>
                        </div>

                    </div>


                </div>
                <div className="bg-black text-white  justify-between text-h4-sm lg:text-h4-lg  text-center py-[15px] lg:py-[10px] px-[35px] items-center flex ">
                    Try it   <Image alt='arrow' src="/arrow_white.svg" width={33} height={16} className="w-[20.67px] h-[10.34px] md:w-[33px] md:h-[16px] "></Image>
                </div>
            </Link >


        </>
    );
};
export default CenterOfWorldCard;
