

import { ActionBase,  GetPiece, TriggerBase } from "../../../utils/piece-helper";
import Image from "next/image";
import TriggerCard from "../../../components/pieces/TriggerCard";
import ActionCard from "../../../components/pieces/ActionCard";
import { Metadata} from "next";
import { NavigationProps } from "../../../components/navigationProps";

export async function generateMetadata(
  { params }: NavigationProps,
): Promise<Metadata> {
  // read route params
  const pieceName = params.id
  // fetch data
  const pieceData = await  GetPiece(`@activepieces/piece-${pieceName}`);
 
  return {
    title: "Activepieces - "+pieceData.displayName,
    description: pieceData.description,
    authors: {url:"www.activepieces.com", name:"Activepieces"},
  }
}

export default async  function PiecePage({ params }: NavigationProps) {
  const pieceName = params.id;
  const pieceData = await  GetPiece(`@activepieces/piece-${pieceName}`);
  const actions: ActionBase[][] = [[], []];
  Object.values(pieceData.actions).forEach((action, i) => {
    if (i % 2 === 0) {
      actions[0].push(action);
    } else {
      actions[1].push(action);
    }
  });
  const triggers: TriggerBase[][] = [[], []];
  Object.values(pieceData.triggers).forEach((trigger, i) => {
    if (i % 2 === 0) {
      triggers[0].push(trigger);
    } else {
      triggers[1].push(trigger);
    }
  });

  return (
    <>
    <article>
    <main className="flex min-h-screen flex-col items-center bg-planets-bg bg-repeat-y bg-100 bg-center-top px-4 lg:px-0">
      {pieceData && (
        <div className="flex flex-col items-center justify-center w-full pt-[80px]">   
        <div className="flex flex-col items-center justify-center gap-12">
        <div className="bg-[#FFF] p-[26.669px] items-start rounded-[32px]">
          <Image
          src={pieceData.logoUrl}
          alt={pieceData.displayName}
          height={100}
          width={100}
          ></Image>
          </div> 
      
            <section>
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center  text-white">
            {pieceData.displayName}
          </h1>
    
            <p className="text-center text-lg mt-10 max-w-[700px]  text-white">
              Activepieces lets you connect {pieceData.displayName} with the most
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
        <div className="md:w-[687px] text-center text-white   font-bold tracking-wider my-[150px]">Revolutionize Your Processes with Triggers and Actions</div>
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
          {Object.keys(pieceData.triggers).length > 0 ? (
           <div className="flex gap-4 w-full max-w-[1016px] flex-wrap ">
           <div id="triggersFirstColumn" className="flex gap-4 flex-col  grow shrink basis-full md:basis-0">
           {triggers[0].map((trigger) => (
             (
               <TriggerCard
               key={trigger.name}
               trigger={trigger}
               logoUrl={pieceData.logoUrl}
             ></TriggerCard>
             )
           ))}
           </div>

           <div  id="triggersSecondColumn" className="flex gap-4 flex-col grow shrink basis-full md:basis-0">
           {triggers[1].map((trigger) => (
             (
               <TriggerCard
               key={trigger.name}
               trigger={trigger}
               logoUrl={pieceData.logoUrl}
             ></TriggerCard>
             )
           ))}
             </div>
         
         </div>
          ) : (
            <div className="text-white text-lg  p-4 text-center">
              There are no triggers available for {pieceData.displayName}
            </div>
          )}
          <div className="text-[#3cffb4] text-3xl font-bold  text-5xl text-center flex relative items-center justify-center  mt-[150px]">
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
          {Object.keys(pieceData.actions).length > 0 ? (
            <div className="flex gap-4 w-full max-w-[1016px] mb-[150px] flex-wrap">
              <div id="actionsFirstColumn" className="flex gap-4 flex-col basis-full md:basis-0 grow shrink">
              {actions[0].map((action) => (
                (
                  <ActionCard
                  key={action.name}
                  action={action}
                  logoUrl={pieceData.logoUrl}
                ></ActionCard>
                )
              ))}
              </div>

              <div  id="actionsSecondColumn" className="flex gap-4 flex-col basis-full md:basis-0 grow shrink">
              {actions[1].map((action) => (
                (
                  <ActionCard
                  key={action.name}
                  action={action}
                  logoUrl={pieceData.logoUrl}
                ></ActionCard>
                )
              ))}
                </div>
            
            </div>
          ) : (
            <div className="text-white text-lg  p-4 text-center">
              There are no actions available for {pieceData.displayName}
            </div>
          )}
        </div>
      )}
      
    </main>
    <section className="bg-[url('/start-building-bg.svg')] w-full bg-no-repeat bg-cover bg-center  flex flex-col items-center justify-center gap-8 h-[450px]">
              <a href="https://cloud.activepieces.com/" target="_blank" rel="noopener noreferrer" className="flex gap-1 md:gap-3 items-center text-neutral-900  font-bold font-bold  
              text-3xl px-[18px] py-[18px] mx-4 md:mx-0
              md:text-5xl md:px-[100px] md:py-[33.5px] 
              lg:text-[70px] lg:px-[140.5px] lg:py-[47.5px] bg-[#06FFB4] rounded-[15px] md:rounded-[30px]">Start Building Now 
                <Image
                  src='/link_icon.svg'
                  alt="Start Building Now"
                  width={70}
                  height={70}
                  className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                  
                >
                </Image>
               </a>
               <div className="text-white text-[22px] text-center font-normal leading-loose tracking-tight">Automate your work without writing code, keep your data on your machine.</div>
      </section>
    </article>
   
  </>);
}
