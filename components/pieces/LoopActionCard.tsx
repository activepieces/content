'use client';
import PieceLogo from "./PieceLogo";
import Image from "next/image";
import { FlowTemplate, TriggerType } from "@activepieces/shared";
import Link from "next/link";

let template: FlowTemplate = {
    "id": "ANGedXCk9bb6eIHOpmo3T",
    "name": "Untitled",
    "description": "",
    "tags": [],
    "pieces": [],
    created: (new Date()).toISOString(),
    imageUrl: null,
    updated: (new Date()).toISOString(),
    userId: "WtvhvT5ddNc0Aqv5HZglC",
    "blogUrl": "",
    "template": {
        "displayName": "Untitled",
        "trigger": {
            "name": "trigger",
            "valid": false,
            "displayName": "Select Trigger",
            "nextAction": {
                "name": "step_2",
                "type": "LOOP_ON_ITEMS",
                "valid": false,
                "settings": {
                    "items": "",
                    "inputUiInfo": {}
                },
                "displayName": "Loop on Items"
            },
            "type": TriggerType.EMPTY,
            "settings": {
                "inputUiInfo": {}
            }
        },
        "valid": false
    }
}



const LoopsActionsCard = () => {

    return (
        <div className="flex flex-col  bg-card rounded-lg " id="loop">
            <div className="flex flex-row items-center p-5 border-b border-solid border-white border-opacity-20">
                <PieceLogo pieceLogoUrl="https://cloud.activepieces.com/assets/img/custom/piece/loop.svg" size={40} imgClasses="w-[40px] h-[40px] object-contain" />
                <div className="flex flex-col ml-4 justify-center">
                    <div className="text-white text-lg font-bold">Loop</div>
                </div>


            </div>

            <Link href={`http://cloud.activepieces.com/import-flow-uri-encoded?flow=${encodeURIComponent(JSON.stringify(template))}`} target="_blank" rel="noopener noreferer" className="p-5  bg-card rounded-lg text-white text-lg font-bold justify-end text-center  items-center flex gap-[5px] ">
                Try it   <Image alt='arrow' src="/arrow_white.svg" width={23} height={11} className="w-[23px] h-[11px] "></Image>
            </Link>
        </div>
    );
};
export default LoopsActionsCard;
