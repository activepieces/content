'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ActionBase, DetailedPiece, GetPiece, TriggerBase } from "../../../utils/piece-helper";

import Image from "next/image";
import TriggerCard from "../../../components/pieces/TriggerCard";
import ActionCard from "../../../components/pieces/ActionCard";

export default function PiecePage() {
  const pieceName = usePathname()?.split("/")[2];
  const [actions,setActions] =useState<ActionBase[][]>([[],[]]);
  const [triggers,SetTriggers] =useState<TriggerBase[][]>([[],[]]);
  const [piece, setPiece] = useState<DetailedPiece>();
 
  useEffect(() => {
    if (!pieceName) {
      return;
    }
    GetPiece(`@activepieces/piece-${pieceName}`).then((piece) => {
      setPiece(piece);
      const tempActions: ActionBase[][] = [[], []];
      Object.values(piece.actions).forEach((action, i) => {
        if (i % 2 === 0) {
          tempActions[0].push(action);
        } else {
          tempActions[1].push(action);
        }
      });
      const tempTriggers: TriggerBase[][] = [[], []];
      Object.values(piece.triggers).forEach((trigger, i) => {
        if (i % 2 === 0) {
          tempTriggers[0].push(trigger);
        } else {
          tempTriggers[1].push(trigger);
        }
      });
      setActions(tempActions);
      SetTriggers(tempTriggers);
    });
  }, [pieceName]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-planets-bg bg-no-repeat bg-100 bg-center-top">
      {piece && (
        <div className="flex flex-col items-center justify-center w-full pt-[80px]">   
        <div className="flex flex-col items-center justify-center gap-12">
        <div className="bg-[#FFF] p-[26.669px] items-start rounded-[32px]">
          <Image
          src={piece.logoUrl}
          alt={piece.displayName}
          height={100}
          width={100}
          ></Image>
          </div> 
      
            <section>
          <h1 className="text-5xl font-bold text-center  text-white">
            {piece.displayName}
          </h1>
    
            <p className="text-center text-lg mt-10 max-w-[700px]  text-white">
              Activepieces lets you connect {piece.displayName} with the most
              popular apps, so you can automate your work and have more time for
              what matters most - no code required.
            </p>
          </section>
               
        
          <section >
          <a className=" h-14 p-5 bg-violet-600 rounded justify-center items-center gap-3 inline-flex" href={"https://www.activepieces.com/docs/pieces/apps/"+pieceName} target="_blank" rel="noopener noreferrer" >
          <div className="text-center text-white text-2sm font-normal leading-loose tracking-wide">Go to the document</div>
          </a>
          </section>
        </div>
        <div className="w-[687px] text-center text-white text-[42px] font-bold tracking-wider my-[150px]">Revolutionize Your Processes with Triggers and Actions</div>
          <div className="text-yellow relative text-3xl font-bold text-5xl   text-center items-center justify-center">
            <Image
              src="../trigger.svg"
              alt="Triggers"
              width={25}
              height={45}
              className="mr-2 inline"
            />
            When
            <Image
            src="../triggers_text.svg"
            className="absolute right-[-100px] top-[-42px]"
            alt="Triggers"
            width={79}
            height={61}
            ></Image>
          </div>
          <div className="text-center text-zinc-300 text-2sm font-normal leading-loose mb-[80px] mt-10" >Triggers that start integration workflows by initiating specific actions.</div>
          {Object.keys(piece.triggers).length > 0 ? (
           <div className="flex gap-4 w-full max-w-[1016px] ">
           <div id="triggersFirstColumn" className="flex gap-4 flex-col  grow shrink basis-0">
           {triggers[0].map((trigger) => (
             (
               <TriggerCard
               key={trigger.name}
               trigger={trigger}
               logoUrl={piece.logoUrl}
             ></TriggerCard>
             )
           ))}
           </div>

           <div  id="triggersSecondColumn" className="flex gap-4 flex-col grow shrink basis-0">
           {triggers[1].map((trigger) => (
             (
               <TriggerCard
               key={trigger.name}
               trigger={trigger}
               logoUrl={piece.logoUrl}
             ></TriggerCard>
             )
           ))}
             </div>
         
         </div>
          ) : (
            <div className="text-white text-lg  p-4 text-center">
              There is no triggers available for {piece.displayName}
            </div>
          )}
          <div className="text-green text-3xl font-bold  text-5xl text-center flex relative items-center justify-center  mt-[150px]">
            <Image
              src="../action.svg"
              alt="Actions"
              width={45}
              height={45}
              className="mr-2 inline"
            />
            Do
            <Image
            src="../actions_text.svg"
            className="absolute right-[-100px] top-[-42px]"
            alt="Actions"
            width={79}
            height={61}
            ></Image>
          </div>
          <div className="text-center text-zinc-300 text-2sm font-normal leading-loose mb-[80px] mt-10" >Triggers that start integration workflows by initiating specific actions.</div>
          {Object.keys(piece.actions).length > 0 ? (
            <div className="flex gap-4 w-full max-w-[1016px] mb-[150px] ">
              <div id="actionsFirstColumn" className="flex gap-4 flex-col basis-0 grow shrink">
              {actions[0].map((action) => (
                (
                  <ActionCard
                  key={action.name}
                  action={action}
                  logoUrl={piece.logoUrl}
                ></ActionCard>
                )
              ))}
              </div>

              <div  id="actionsSecondColumn" className="flex gap-4 flex-col basis-0  grow shrink">
              {actions[1].map((action) => (
                (
                  <ActionCard
                  key={action.name}
                  action={action}
                  logoUrl={piece.logoUrl}
                ></ActionCard>
                )
              ))}
                </div>
            
            </div>
          ) : (
            <div className="text-white text-lg  p-4 text-center">
              There is no actions available for {piece.displayName}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
