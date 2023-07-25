'use client';
import Image from "next/image";
import { DetailedPiece } from "../../utils/piece-helper";
import { useRef, useState } from "react";
import { ControlledMenu, MenuItem, useClick } from "@szhsin/react-menu";
import { ActionType, FlowTemplate, TriggerType } from "@activepieces/shared";
const template: FlowTemplate = {
    "id": "jyEi8zZkVYIiP4nqWrH85",
    "name": "",
    "description": "",
    "tags": [],
    "pieces": [],
    "pinnedOrder": null,
    "blogUrl": "",
    "template": {
        "displayName": "Trying Activepieces!",
        "trigger": {
            "name": "trigger",
            "valid": false,
            "displayName": "",
            "nextAction": {
                "name": "step_1",
                "type": ActionType.PIECE,
                "valid": false,
                "settings": {
                    "input": {},
                    "pieceName": "",
                    "actionName": "",
                    "inputUiInfo": {},
                    "pieceVersion": ""
                },
                "displayName": ""
            },
            "type": TriggerType.PIECE,
            "settings": {
                "pieceName": "",
                "pieceVersion": "",
                "triggerName": "",
                "input": {},
                "inputUiInfo": {}
            }
        },
        "valid": false
    }
}

export interface CombinationsCreatorProps {
    triggerPieces: DetailedPiece[];
    actionPieces: DetailedPiece[];
}

const CombinationsCreator = (props: CombinationsCreatorProps) => {

    const menuItemClassName = ({ hover }: { hover: boolean }) =>
        hover ? 'apps-menuitem transitions-all' : 'apps-menuitem';
    const triggerAppDropdown = useRef(null);
    const [isTriggerAppDropdownOpen, setIsTriggerAppDropdownOpen] = useState(false);
    const triggerAppdownAnchorProps = useClick(isTriggerAppDropdownOpen, setIsTriggerAppDropdownOpen);
    const [selectedTriggerApp, setSelectedTriggerApp] = useState(props.triggerPieces[0]);
    const triggerDropdown = useRef(null);
    const [isTriggerDropdownOpen, setIsTriggerDropdownOpen] = useState(false);
    const triggerDropdownAnchorProps = useClick(isTriggerDropdownOpen, setIsTriggerDropdownOpen);
    const [selectedTrigger, setSelectedTrigger] = useState(props.triggerPieces[0].triggers[Object.keys(props.triggerPieces[0].triggers)[0]]);
    const actionAppDropdown = useRef(null);
    const [isActionAppDropdownOpen, setIsActionAppDropdownOpen] = useState(false);
    const actionAppdownAnchorProps = useClick(isActionAppDropdownOpen, setIsActionAppDropdownOpen);
    const [selectedActionApp, setSelectedActionApp] = useState(props.actionPieces[0]);
    const actionDropdown = useRef(null);
    const [isActionDropdownOpen, setIsActionDropdownOpen] = useState(false);
    const actionDropdownAnchorProps = useClick(isActionDropdownOpen, setIsActionDropdownOpen);
    const [selectedAction, setSelectedAction] = useState(props.actionPieces[0].actions[Object.keys(props.actionPieces[0].actions)[0]]);

    const generateTemplate = () => {
        template.template.trigger.settings.pieceName = selectedTriggerApp.name;
        template.template.trigger.settings.pieceVersion = `~${selectedTriggerApp.version}`;
        template.template.trigger.settings.triggerName = selectedTrigger.name;
        template.template.trigger.displayName = selectedTrigger.displayName;
        template.template.trigger.valid = true;
        template.template.trigger.nextAction.settings.pieceName = selectedActionApp.name;
        template.template.trigger.nextAction.settings.pieceVersion = `~${selectedActionApp.version}`;
        template.template.trigger.nextAction.settings.actionName = selectedAction.name;
        template.template.trigger.nextAction.displayName = selectedAction.displayName;
        template.template.trigger.nextAction.valid = true;
        template.template.valid = true;
        template.template.displayName = `${selectedTrigger.displayName} + ${selectedAction.displayName}`;
        template.name = `${selectedTrigger.displayName} + ${selectedAction.displayName}`;
        console.log(Buffer.from(JSON.stringify(template)).toString("base64"));
        window.open(`https://cloud.activepieces.com/import-flow-64?flow=${Buffer.from(JSON.stringify(template)).toString("base64")}`, '_blank');
    }
    return (
        <>
            <div className='flex flex-col grow'>
                <div className='border border-solid border-white border-opacity-20 rounded-[6px] px-[34px] py-[38.75px] overflow-hidden bg-[#2D2E33]'>
                    <div className='flex gap-[18.75px] !font-bold text-white text-h6-sm lg:text-h6-lg'>
                        <Image src="/bolt_white.svg" width={12.51} height={22.5} alt='trigger'>
                        </Image>
                        When
                    </div>
                    <div className="flex flex-col md:flex-row gap-[10px] mt-[20px]">
                        <div role="menu" {...triggerAppdownAnchorProps} ref={triggerAppDropdown} about="triggerAppDropdown" className="basis-[45%] min-h-[70px] p-[15px] bg-zinc-900  border border-white border-opacity-20 justify-between items-center gap-5 inline-flex grow cursor-pointer">
                            <div className=" justify-start items-center gap-5 flex">
                                <div className="p-[6.67px] bg-white rounded-md border border-black border-opacity-10 justify-center items-center flex">
                                    <Image src={selectedTriggerApp.logoUrl} width={27} height={27} alt={selectedTriggerApp.displayName} className="object-contain"></Image>
                                </div>
                                <div className="text-white text-[22px] font-normal leading-[60px] tracking-wide">{selectedTriggerApp.displayName}</div>
                            </div>
                            <div className="w-[30px] items-center flex">
                                <Image src="/chevron.svg" alt="chevron" height={14} width={7} className="rotate-90 w-[30px] h-[20px] "></Image>
                            </div>

                        </div>

                        <div className="flex justify-center items-center">
                            <div className="border-t-2 rounded-full border-solid border-[#5D5D61] w-[16.42px]"></div>
                        </div>
                        <div about="triggerDropdown"  {...triggerDropdownAnchorProps} ref={triggerDropdown} className="basis-[45%] min-h-[70px] p-[15px] bg-zinc-900  border border-white border-opacity-20 justify-between items-center gap-5 inline-flex grow cursor-pointer">
                            <div className="justify-start items-center gap-5 flex">
                                <div className="text-white text-[22px] font-normal truncate  text-ellipsis overflow-hidden leading-[60px] tracking-wide">{selectedTrigger.displayName}</div>
                            </div>
                            <div className="w-[30px] items-center flex">
                                <Image src="/chevron.svg" alt="chevron" height={14} width={7} className="rotate-90 w-[30px] h-[20px] "></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src="/separator.svg" alt="separator" width={13} height={30}>

                    </Image>
                </div>
                <div className='border border-solid border-white border-opacity-20 rounded-[6px] px-[34px] py-[38.75px] overflow-hidden bg-[#2D2E33]'>
                    <div className='flex gap-[18.75px] !font-bold text-white text-h6-sm lg:text-h6-lg'>
                        <Image src="/action_white.svg" width={25} height={25} alt='trigger'>
                        </Image>
                        Do
                    </div>
                    <div className="flex flex-col md:flex-row gap-[10px] mt-[20px]">
                        <div role="menu" {...actionAppdownAnchorProps} ref={actionAppDropdown} about="triggerAppDropdown" className="basis-[45%] min-h-[70px] p-[15px] bg-zinc-900  border border-white border-opacity-20 justify-between items-center gap-5 inline-flex grow cursor-pointer">
                            <div className=" justify-start items-center gap-5 flex">
                                <div className="p-[6.67px] bg-white rounded-md border border-black border-opacity-10 justify-center items-center flex">
                                    <Image src={selectedActionApp.logoUrl} width={27} height={27} alt={selectedActionApp.displayName} className="object-contain"></Image>
                                </div>
                                <div className="text-white text-[22px] font-normal leading-[60px] tracking-wide">{selectedActionApp.displayName}</div>
                            </div>
                            <div className="w-[30px] items-center flex">
                                <Image src="/chevron.svg" alt="chevron" height={14} width={7} className="rotate-90 w-[30px] h-[20px] "></Image>
                            </div>

                        </div>

                        <div className="flex justify-center items-center">
                            <div className="border-t-2 rounded-full border-solid border-[#5D5D61] w-[16.42px]"></div>
                        </div>
                        <div about="triggerDropdown"  {...actionDropdownAnchorProps} ref={actionDropdown} className="basis-[45%] min-h-[70px] p-[15px] bg-zinc-900  border border-white border-opacity-20 justify-between items-center gap-5 inline-flex grow cursor-pointer">
                            <div className="justify-start items-center gap-5 flex">
                                <div className="text-white text-[22px] font-normal truncate  text-ellipsis overflow-hidden leading-[60px] tracking-wide">{selectedAction.displayName}</div>
                            </div>
                            <div className="w-[30px] items-center flex">
                                <Image src="/chevron.svg" alt="chevron" height={14} width={7} className="rotate-90 w-[30px] h-[20px] "></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="border-r-2 border-solid border-[#5D5D61] w-[2px] h-[30px]"></div>
                </div>
                <div onClick={generateTemplate} className="px-[27px] py-[13.50px] bg-white rounded justify-center cursor-pointer items-center gap-3 inline-flex">
                    <div className="text-neutral-900 text-3xl font-bold leading-[60px] tracking-wide">Create it now</div>
                </div>
            </div>





            <ControlledMenu
                state={isTriggerAppDropdownOpen ? 'open' : 'closed'}
                anchorRef={triggerAppDropdown}
                onClose={() => setIsTriggerAppDropdownOpen(false)} menuClassName="apps-menu">
                {
                    props.triggerPieces.map((app, idx) =>
                        <MenuItem className={menuItemClassName} key={idx}
                            onClick={() => {
                                setSelectedTriggerApp(app);
                                setSelectedTrigger(app.triggers[Object.keys(app.triggers)[0]])
                            }}>
                            <div className='item-container text-h4-sm lg:text-h4-lg cursor-pointer flex gap-2  items-center'>
                                <div className=" bg-white flex items-center p-[5px] lg:p-[10px] border border-solid border-outline rounded-lg ">
                                    <Image alt={app.displayName} src={app.logoUrl} width={20} height={20} className="h-[20px] w-[20px] object-contain lg:h-[40px] lg:w-[40px]"></Image>
                                </div>
                                <div className="truncate  break-keep whitespace-nowrap text-ellipsis overflow-hidden">
                                    {app.displayName}
                                </div>
                            </div>

                            {idx !== props.triggerPieces.length - 1 && <div className='border-b border-solid border-white  border-opacity-20 mx-[15px]'></div>}
                        </MenuItem>
                    )
                }
            </ControlledMenu>


            <ControlledMenu
                state={isTriggerDropdownOpen ? 'open' : 'closed'}
                anchorRef={triggerDropdown}
                onClose={() => setIsTriggerDropdownOpen(false)} menuClassName="apps-menu">
                {
                    Object.keys(selectedTriggerApp.triggers).map((key, idx) =>
                        <MenuItem className={menuItemClassName} key={idx} onClick={() => setSelectedTrigger(selectedTriggerApp.triggers[key])}>
                            <div className='item-container text-h4-sm lg:text-h4-lg cursor-pointer flex gap-2  items-center'>
                                <div className="truncate  break-keep whitespace-nowrap text-ellipsis overflow-hidden">
                                    {selectedTriggerApp.triggers[key].displayName}
                                </div>
                            </div>
                            {idx !== Object.keys(selectedTriggerApp.triggers).length - 1 && <div className='border-b border-solid border-white  border-opacity-20 mx-[15px]'></div>}

                        </MenuItem>
                    )
                }
            </ControlledMenu>






            <ControlledMenu
                state={isActionDropdownOpen ? 'open' : 'closed'}
                anchorRef={actionDropdown}
                onClose={() => setIsActionDropdownOpen(false)} menuClassName="apps-menu">
                {
                    Object.keys(selectedActionApp.actions).map((key, idx) =>
                        <MenuItem className={menuItemClassName} key={idx} onClick={() => setSelectedAction(selectedActionApp.actions[key])}>
                            <div className='item-container text-h4-sm lg:text-h4-lg cursor-pointer flex gap-2  items-center'>
                                <div className="truncate  break-keep whitespace-nowrap text-ellipsis overflow-hidden">
                                    {selectedActionApp.actions[key].displayName}
                                </div>
                            </div>
                            {idx !== Object.keys(selectedActionApp.actions).length - 1 && <div className='border-b border-solid border-white  border-opacity-20 mx-[15px]'></div>}

                        </MenuItem>
                    )
                }
            </ControlledMenu>



            <ControlledMenu
                state={isActionAppDropdownOpen ? 'open' : 'closed'}
                anchorRef={actionAppDropdown}
                onClose={() => setIsActionAppDropdownOpen(false)} menuClassName="apps-menu">
                {
                    props.actionPieces.map((app, idx) =>
                        <MenuItem className={menuItemClassName} key={idx}
                            onClick={() => {
                                setSelectedActionApp(app);
                                setSelectedAction(app.actions[Object.keys(app.actions)[0]])
                            }}>
                            <div className='item-container text-h4-sm lg:text-h4-lg cursor-pointer flex gap-2  items-center'>
                                <div className=" bg-white flex items-center p-[5px] lg:p-[10px] border border-solid border-outline rounded-lg ">
                                    <Image alt={app.displayName} src={app.logoUrl} width={20} height={20} className="h-[20px] w-[20px] object-contain lg:h-[40px] lg:w-[40px]"></Image>
                                </div>
                                <div className="truncate  break-keep whitespace-nowrap text-ellipsis overflow-hidden">
                                    {app.displayName}
                                </div>
                            </div>

                            {idx !== props.actionPieces.length - 1 && <div className='border-b border-solid border-white  border-opacity-20 mx-[15px]'></div>}
                        </MenuItem>
                    )
                }
            </ControlledMenu>



        </>
    );
};
export default CombinationsCreator;