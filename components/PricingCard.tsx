'use client';
import Link from "next/link";
import Image from "next/image";
import { ControlledMenu, MenuItem, useClick } from "@szhsin/react-menu";
import { useRef, useState } from "react";

const PricingCard = (props: {
    bgClass: string,
    categoryName: string,
    plans: { price: string, tasks: number }[],
    features: string[];
    free: boolean
}) => {
    const menuItemClassName = ({ hover }: { hover: boolean }) =>
        hover ? 'pricing-menuitem transitions-all  ' : 'pricing-menuitem ';
    const pricingDropdown = useRef<HTMLDivElement | null>(null);
    const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false);
    const pricingdownAnchorProps = useClick(isPricingDropdownOpen, setIsPricingDropdownOpen);
    const [selectedPricing, setSelectedPricing] = useState(props.plans[0]);
    return (
        <>
            <div className={props.bgClass + " w-[358px]  md:w-[406.67px] p-[35px] flex flex-col gap-[40px] rounded"}>
                <div className="text-black text-[22px] font-normal leading-7 tracking-wide">{props.categoryName}</div>
                <div className="text-black text-[46px] font-bold leading-[60px] tracking-wide">
                    {props.free ? '$0 Free' : `$${selectedPricing.price}/mo`}
                </div>
                <div   {...pricingdownAnchorProps} ref={pricingDropdown} className={(props.free ? "" : "cursor-pointer ") + "h-14  p-5 bg-white rounded border border-neutral-900 justify-start items-center gap-2.5 flex  "}>
                    <div className="select-none text-neutral-900 text-[22px] font-normal leading-7 tracking-wide grow">{selectedPricing.tasks} {props.free ? 'tasks/day' : 'tasks/month'}</div>
                    {
                        !props.free ? <Image src="/chevron_black.svg" alt="chevron" height={14} width={7} className="rotate-90 w-[18px] h-[12px] "></Image> : null
                    }
                </div>

                <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noopener noreferer" className="w-[115px]  whitespace-nowrap  flex items-center justify-center h-[65px] bg-black rounded">
                    <div className="text-center text-white text-[22px] font-bold">Try free</div>
                </Link>

                <div className="flex flex-col">
                    {props.features.map((feature, idx) => (
                        <div className="flex items-center gap-[15px] text-[22px] font-normal leading-7 tracking-wide" key={idx}>
                            <Image src="/feature_check.svg" alt="feat" width={22} height={22} ></Image>
                            {feature}
                        </div>
                    ))}

                </div>
            </div>
            <ControlledMenu
                state={isPricingDropdownOpen ? 'open' : 'closed'}
                anchorRef={pricingDropdown}
                onClose={() => setIsPricingDropdownOpen(false)} menuClassName="pricing-menu">
                {props.free ? null :
                    props.plans.map((plan, idx) =>
                        <MenuItem className={menuItemClassName}
                            key={idx}
                            onClick={() => {
                                setSelectedPricing(plan);
                            }}>
                            <div className='item-container cursor-pointer flex  flex-col gap-[10px] ' style={{ width: (pricingDropdown.current?.clientWidth || 100) - 12.5 + "px" }}>
                                <div className="text-h3-sm">
                                    {props.free ? `$9 Free` : `$${plan.price}/mo`}
                                </div>
                                <div className="truncate text-[22px] font-normal leading-[30px] tracking-wide  break-keep whitespace-nowrap text-ellipsis overflow-hidden">
                                    {plan.tasks} {props.free ? 'tasks/day' : 'tasks/month'}
                                </div>
                            </div>
                        </MenuItem>
                    )
                }
            </ControlledMenu>
        </>
    );
};
export default PricingCard;
