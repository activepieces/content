'use client';
import { useState } from "react";
import PieceLogo from "./PieceLogo";
import Image from "next/image";
import CollapsibleProperties from "./CollapsibleProperties";
import { ActionBase, TriggerBase, TriggerStrategy } from "../../utils/piece-helper";
import { ActionType, FlowTemplate, TriggerType } from "@activepieces/shared";
import Link from "next/link";

let template: FlowTemplate = {
  "id": "YiwKlvgwmhYIIVKT0EMqx",
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
      "valid": false,
      "displayName": "Select Trigger",
      "nextAction": {
        "name": "step_1",
        "type": "PIECE",
        "valid": false,
        "settings": {
          "input": {},
          "pieceName": "@activepieces/piece-apitable",
          "inputUiInfo": {},
          "pieceVersion": "~0.0.4"
        },
        "displayName": "APITable"
      },
      "type": TriggerType.EMPTY,
      "settings": {
        "inputUiInfo": {}
      }
    },
    "valid": false
  }
}
interface TriggerCardProps {
  logoUrl: string;
  triggerOrAction: ActionBase | TriggerBase;
  pieceName: string,
  pieceVersion: string
}
const isTrigger = (triggerOrAction: ActionBase | TriggerBase): boolean => {
  return (triggerOrAction as TriggerBase).type !== undefined;
};

const TriggerOrActionCard = ({ triggerOrAction, logoUrl, pieceName, pieceVersion }: TriggerCardProps) => {
  const [showProperties, setShowProperties] = useState(false);
  template.name = triggerOrAction.displayName;
  template.template.displayName = triggerOrAction.displayName;
  template.pieces.push(pieceName)
  if (isTrigger(triggerOrAction)) {
    template.template.trigger.displayName = triggerOrAction.displayName;
    template.template.trigger.type = TriggerType.PIECE;
    template.template.trigger.valid = Object.keys(triggerOrAction.props).filter((key) => triggerOrAction.props[key].required).length === 0;
    template.template.trigger.settings = {
      "input": {},
      "pieceName": pieceName,
      "triggerName": triggerOrAction.name,
      "inputUiInfo": {},
      "pieceVersion": "~" + pieceVersion
    }
    delete template.template.trigger.nextAction;
  }
  else {
    template.template.trigger.nextAction = {
      "name": "step_1",
      ActionType: ActionType.PIECE,
      "valid": Object.keys(triggerOrAction.props).filter((key) => triggerOrAction.props[key].required).length === 0,
      settings: {
        "input": {},
        "pieceName": pieceName,
        "actionName": triggerOrAction.name,
        "inputUiInfo": {},
        "pieceVersion": "~" + pieceVersion
      },
      displayName: triggerOrAction.displayName
    }
  }
  return (
    <div className="flex flex-col  bg-card rounded-lg ">
      <div className={(Object.entries(triggerOrAction.props).length > 0 ? "cursor-pointer" : "") + " flex flex-row items-center p-5 border-b border-solid border-white border-opacity-20"} onClick={() => setShowProperties(!showProperties)}>
        <PieceLogo pieceLogoUrl={logoUrl} size={40} imgClasses="w-[40px] h-[40px] object-contain" />
        <div className="flex flex-col ml-4 justify-center">
          <div className="text-white text-lg font-bold">{triggerOrAction.displayName}</div>
          {isTrigger(triggerOrAction) ? (triggerOrAction as TriggerBase).type === TriggerStrategy.WEBHOOK && (
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
          ) : null}
          {isTrigger(triggerOrAction) ? (triggerOrAction as TriggerBase).type === TriggerStrategy.POLLING && (
            <div className="flex items-center mt-1">
              <Image
                src="../clock.svg"
                className="inline"
                alt="Scheduled"
                width={15}
                height={15}
              ></Image>
              <div className="text-[#D7D7D7] font-normal text-sm ml-1 inline">Scheduled</div>
            </div>
          ) : null}
        </div>
        {
          Object.entries(triggerOrAction.props).length > 0 ? <>
            <div className="grow"></div>
            <svg className={(showProperties ? "rotate-0 " : "rotate-180 ") + "transition-all"} width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0.597656L0.75 9.34766L2.80625 11.4039L9.5 4.72474L16.1938 11.4039L18.25 9.34766L9.5 0.597656Z" fill="white" />
            </svg>
          </> : null
        }


      </div>
      {Object.entries(triggerOrAction.props).length > 0 ? (<CollapsibleProperties expand={showProperties} key={triggerOrAction.name} props={triggerOrAction.props} />) : null}

      <Link href={`http://cloud.activepieces.com/import-flow-uri-encoded?flow=${encodeURIComponent(JSON.stringify(template))}`} target="_blank" rel="noopener noreferer" className="p-5  bg-card rounded-lg text-white text-lg font-bold justify-end text-center  items-center flex gap-[5px] ">
        Try it   <Image alt='arrow' src="/arrow_white.svg" width={23} height={11} className="w-[23px] h-[11px] "></Image>
      </Link>
    </div>
  );
};
export default TriggerOrActionCard;
