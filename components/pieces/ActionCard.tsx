import React from "react";
import PieceLogo from "./PieceLogo";
import { ActionBase } from "../../utils/piece-helper";
import CollapsibleProperties from "./CollapsibleProperties";

interface ActionBaseProps {
  logoUrl: string,
  action: ActionBase;
}

const ActionCard = ({ action, logoUrl }: ActionBaseProps) => {
  return (
    <div className="flex flex-col p-8 bg-card rounded-lg p-4">
      <div className="flex flex-row ">
        <PieceLogo
          pieceLogoUrl={logoUrl}
          size={40}
        />
        <div className="flex flex-col ml-4 justify-center">
          <div className="text-white text-lg">{action.displayName}</div>
        </div>
      </div>
      <div className="text-base text-white mt-4 ">{action.description}</div>
      {Object.entries(action.props).length > 0 && (<CollapsibleProperties key={action.name} props={action.props} />)}
    </div>
  );
};
export default ActionCard;
