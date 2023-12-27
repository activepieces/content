'use client';
import PieceLogo from "./PieceLogo";
import Image from "next/image";
import { FlowTemplate, TriggerType } from "@activepieces/shared";
import Link from "next/link";

let template: FlowTemplate = {
    "id": "OJCiwfSX6UrOeY4NCucfo",
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
                "name": "step_1",
                "type": "BRANCH",
                "valid": false,
                "settings": {
                    "conditions": [
                        [
                        ]
                    ],
                    "inputUiInfo": {}
                },
                "displayName": "Branch"
            },
            "type": TriggerType.EMPTY,
            "settings": {
                "inputUiInfo": {}
            }
        },
        "valid": false
    }
}



const BranchActionCard = (props: { condition: { firstValue: string, operator: string; secondValue?: string; caseSensitive?: boolean }[] }) => {
    const label = props.condition[0].operator
        .split('_')
        .map((word, idx) => {
            if (idx === 0) {
                const formmatedWord =
                    word[0].toUpperCase() + word.toLowerCase().slice(1);
                if (
                    word.toLocaleLowerCase() === 'does' ||
                    word.toLocaleLowerCase() === 'exists'
                ) {
                    return formmatedWord;
                }
                return '(' + formmatedWord + ')';
            }
            return word.toLowerCase();
        })
        .join(' ');
    template.template.trigger.nextAction.settings.conditions = [props.condition]

    return (
        <div className="flex flex-col  bg-card rounded-lg " id="branch">
            <div className="flex flex-row items-center p-5 border-b border-solid border-white border-opacity-20">
                <PieceLogo pieceLogoUrl="https://cloud.activepieces.com/assets/img/custom/piece/branch.svg" size={40} imgClasses="w-[40px] h-[40px] object-contain" />
                <div className="flex flex-col ml-4 justify-center">
                    <div className="text-white text-lg font-bold">{label}</div>
                </div>


            </div>

            <Link href={`http://cloud.activepieces.com/import-flow-uri-encoded?flow=${encodeURIComponent(JSON.stringify(template))}`} target="_blank" rel="noopener noreferer" className="p-5  bg-card rounded-lg text-white text-lg font-bold justify-end text-center  items-center flex gap-[5px] ">
                Try it   <Image alt='arrow' src="/arrow_white.svg" width={23} height={11} className="w-[23px] h-[11px] "></Image>
            </Link>
        </div>
    );
};
export default BranchActionCard;
