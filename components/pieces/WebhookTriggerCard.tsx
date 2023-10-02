'use client';
import PieceLogo from "./PieceLogo";
import Image from "next/image";
import { FlowTemplate, TriggerType } from "@activepieces/shared";
import { ApLink } from "../MyLink";

let template: FlowTemplate = {
    "id": "44kXPGoLr6m9iy2awmt54",
    "name": "Untitled",
    "description": "",
    "tags": [],
    "pieces": [],
    "pinnedOrder": null,
    "blogUrl": "",
    "template": {
        "displayName": "Untitled",
        "trigger": {
            "name": "trigger",
            "valid": true,
            "displayName": "Webhook Trigger",

            "type": TriggerType.WEBHOOK,
            "settings": {
                "inputUiInfo": {}
            }
        },
        "valid": true
    }
}



const WebhookTriggerCard = () => {

    return (
        <div className="flex flex-col  bg-card rounded-lg " id="webhook">
            <div className="flex flex-row items-center p-5 border-b border-solid border-white border-opacity-20">
                <PieceLogo pieceLogoUrl="https://cloud.activepieces.com/assets/img/custom/piece/webhook.svg" size={40} imgClasses="w-[40px] h-[40px] object-contain" />
                <div className="flex flex-col ml-4 justify-center">
                    <div className="text-white text-lg font-bold">Webhook</div>

                    <div className="flex items-center mt-1">
                        <Image
                            src="../bolt.svg"
                            className="inline"
                            alt="Instant"
                            width={15}
                            height={15}
                        ></Image>
                        <div className="text-[#D7D7D7] text-sm ml-1 font-normal inline">Instant</div>
                    </div>

                </div>


            </div>

            <ApLink href={`http://cloud.activepieces.com/import-flow-uri-encoded?flow=${encodeURIComponent(JSON.stringify(template))}`} target="_blank" rel="noopener noreferer" className="p-5  bg-card rounded-lg text-white text-lg font-bold justify-end text-center  items-center flex gap-[5px] ">
                Try it   <Image alt='arrow' src="/arrow_white.svg" width={23} height={11} className="w-[23px] h-[11px] "></Image>
            </ApLink>
        </div>
    );
};
export default WebhookTriggerCard;
