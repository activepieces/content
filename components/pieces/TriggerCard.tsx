import React from "react";
import PieceLogo from "./PieceLogo";
import Image from "next/image";
import CollapsibleProperties from "./CollapsibleProperties";
import { TriggerBase, TriggerStrategy } from "../../utils/piece-helper";

interface TriggerCardProps {
  logoUrl: string;
  trigger: TriggerBase;
}

const TriggerCard = ({ trigger, logoUrl }: TriggerCardProps) => {
  return (
    <div className="flex flex-col p-8 bg-card rounded-lg p-4">
      <div className="flex flex-row ">
        <PieceLogo pieceLogoUrl={logoUrl} size={40} />
        <div className="flex flex-col ml-4 justify-center">
          <div className="text-white text-lg">{trigger.displayName}</div>
          {trigger.type === TriggerStrategy.WEBHOOK && (
            <div className="flex items-center mt-1">
              <Image
                src="../bolt.svg"
                className="inline"
                alt="Instant"
                width={15}
                height={15}
              ></Image>
              <div className="text-white text-sm ml-1 inline">Instant</div>
            </div>
          )}
          {trigger.type === TriggerStrategy.POLLING && (
            <div className="flex items-center mt-1">
              <Image
                src="../clock.svg"
                className="inline"
                alt="Scheduled"
                width={15}
                height={15}
              ></Image>
              <div className="text-white text-sm ml-1 inline">Scheduled</div>
            </div>
          )}
        </div>
      </div>
      <div className="text-base text-white mt-4">{trigger.description}</div>
      {Object.entries(trigger.props).length > 0? (<CollapsibleProperties key={trigger.name} props={trigger.props} />) : null}
    </div>
  );
};
export default TriggerCard;
