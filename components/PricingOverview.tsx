'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function PricingTable(isCloud: any) {

  let cloud = isCloud.isCloud;  
  const proPlans: { [key: string]: any } = [{ "tasks": "1,000", "price": "0" }, { "tasks": "5,000", "price": "15" }, { "tasks": "10,000", "price": "25" }, { "tasks": "25,000", "price": "55" }, { "tasks": "50,000", "price": "100" }, { "tasks": "100,000", "price": "175" }, { "tasks": "200,000", "price": "300" }, { "tasks": "500,000", "price": "500" }, { "tasks": "1 million", "price": "900" }, { "tasks": "1 million+", "price": "Custom ✨" }];
  const proSpecsCloud: { [key: string]: any } = [
    {"spec": "1 user + $5/user/month", "desc": "Includes 1 user and you can add extra users for additional fees"},
    {"spec": "Community support", "desc": "Get help from our active community forum"}
  ];
  const proSpecsPrem: { [key: string]: any } = [
    {"spec": "1 user + $5/user/month", "desc": "Includes 1 user and you can add extra users for additional fees"},
    {"spec": "Community support", "desc": "Get help from our active community forum"}
  ];
  const platformSpecs: { [key: string]: any } = [
    {"spec": "25 users then $10/user/month","desc":"Includes 25 users across all your projects and you can add extra users for additional fees"},
    {"spec": "Manage projects", "desc": "Multiple projects for your customers under your platform"},
    {"spec": "2 private custom pieces", "desc": "Add your custom pieces to your projects without contributing them open source"},
    {"spec": "Custom templates", "desc": "Allow your users to build flows from your predefined templates"},
    {"spec": "Custom colors and logo", "desc": "Match your brand identity across all the projects under your platform"},
    {"spec": "Remove our branding (+$299/mo)", "desc": 'Remove the "Built with Activepieces" badge for 100% whitelabelling'},
    {"spec": "Email and community support", "desc": "Get help from our active community forum or our support team on email"}
  ];
  const enterpriseSpecsCloud: { [key: string]: any } = [
    {"spec": "Custom tasks", "desc": "Discounted pricing for bulk task usage"},
    {"spec": "Custom users", "desc": "Discounted pricing for big teams"},
    {"spec": "Embed in your SaaS", "desc": "Use our Javascript SDK to embed our automation builder in your app"},
    {"spec": "Single Sign On (SSO)", "desc": "Allow your users to login with your existing auth provider"},
    {"spec": "User permissions", "desc": "Give your users custom roles and permissions"},
    {"spec": "Audit log", "desc": "View which user did what and when they did it to maximize security"},
    {"spec": "Custom private pieces", "desc": "Keep all your custom pieces private and stay compliant"},
    {"spec": "Custom reports", "desc": "Request custom dashboards with the metrics that you care for the most"},
    {"spec": "Dedicated support", "desc": "Get direct support in a private Slack channel"}
  ];
  const enterpriseSpecsPrem: { [key: string]: any } = [
    {"spec": "Custom users", "desc": "Discounted pricing for big teams"},
    {"spec": "Embed in your SaaS", "desc": "Use our Javascript SDK to embed our automation builder in your app"},
    {"spec": "Single Sign On (SSO)", "desc": "Allow your users to login with your existing auth provider"},
    {"spec": "User permissions", "desc": "Give your users custom roles and permissions"},
    {"spec": "Audit log", "desc": "View which user did what and when they did it to maximize security"},
    {"spec": "Custom private pieces", "desc": "Keep all your custom pieces private and stay compliant"},
    {"spec": "Custom reports", "desc": "Request custom dashboards with the metrics that you care for the most"},
    {"spec": "Dedicated support", "desc": "Get direct support in a private Slack channel"}
  ];
  const [proMessage, setProMessage] = useState("free");
  const [isProCustom, setIsProCustom] = useState(false);
  const [tasks, setTasks] = useState("1,000");
  const [price, setPrice] = useState("0");
  const [proSlider, setSlider] = useState("0");
  const [proPlanBtnLabel, setProPlanBtnLabel] = useState("Start free");
  useEffect(() => {
    setTasks(proPlans[proSlider].tasks);
    setPrice(proPlans[proSlider].price);

    if(proSlider == "0"){
      setProMessage("free")
      setIsProCustom(false)
      setProPlanBtnLabel("Start free");
    } else if(proSlider == "9"){
      setProMessage("monthly")
      setProPlanBtnLabel("Talk to us");
      setIsProCustom(true)
    } else {
      setProMessage("monthly")
      setIsProCustom(false)
      setProPlanBtnLabel("Try free");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proSlider]);

  return (
    <>
      <div className="pricing-overview w-full border border-[#000] rounded-md flex flex-row max-[779px]:flex-col max-[779px]:max-w-[360px] max-[779px]:w-full max-[779px]:mx-auto max-[779px]:border-0">
        <div className="flex-1 border-r border-[#000] max-[779px]:mb-7 max-[779px]:border max-[779px]:border-[#000] max-[779px]:rounded-md flex flex-col">
          <div className="bg-[#98F5F5] px-[30px] py-[10px] border-b border-[#000] rounded-tl-[5px] max-[779px]:rounded-tr-[5px]">
            {(cloud && <p className="text-black text-[20px] font-bold leading-[35px]">Pro</p>)}
            {(!cloud && <p className="text-black text-[20px] font-bold leading-[35px]">Open Source</p>)}
          </div>
          <div className="px-[30px] py-[20px] min-h-[270px] max-[1319px]:min-h-[288px] max-[1023px]:min-h-[333px] max-[779px]:min-h-full">
            <p className="text-[18px] text-[#666] leading-[28px] tracking-[0.44px] max-[1319px]:min-h-[84px] max-[1023px]:min-h-[112px] max-[779px]:min-h-full max-w-[300px]">Automate your team&apos;s work seamlessly</p>
            <hr className="h-px border-0 border-t border-[#11111133] my-5" />
            {(cloud && 
              <div>
                {isProCustom
                  ? <p className="text-black mb-[22px] flex flex-row items-center gap-x-[10px]">
                      <span className="text-[40px] font-bold leading-[40px]">{ price }</span>
                    </p>
                  : <p className="text-black mb-[22px] flex flex-row items-center gap-x-[10px]">
                      <span className="flex flex-row items-start">
                        <span className="text-[22px]">$</span>
                        <span className="text-[40px] font-bold leading-[40px]">{ price }</span>
                      </span>
                      <span className="text-[18px] font-semibold">{ proMessage }</span>
                    </p>
                }
                <p className="text-black text-[18px] leading-[26px] tracking-[0.44px] max-w-[325px] mb-2">{tasks} tasks per month</p>
                <input onChange={(e) => setSlider(e.target.value)} value={proSlider} type="range" min={0} max={9} step={1} className="w-full h-4 bg-[#E1E1E1] rounded-lg appearance-none cursor-pointer range-lg" />
              </div>
            )}
            {(!cloud && 
                <div>
                  <p className="text-[40px] font-bold leading-[40px] mb-[24px]">Free</p>
                  <p className="text-black text-[18px] leading-[26px] tracking-[0.44px] max-w-[325px]">Bring your own servers, process as many tasks as you want</p>
                </div>
              )
            }
          </div>
          <div className="border-t border-[#11111133] px-[30px] pt-[30px] pb-[20px]">
            {(cloud && 
              proSpecsCloud.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-id={'pro-tooltip-' + index} className="text-[#666666] text-[18px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <Tooltip
                        id={'pro-tooltip-' + index}
                        html={specItem.desc}
                        key={'pro-tooltip-' + index}
                        place={"right"}
                        className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 max-w-[250px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                        noArrow={true}
                      />
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[18px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            )}
            {(!cloud && 
              proSpecsPrem.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-id={'pro-tooltip-' + index} className="text-[#666666] text-[18px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <Tooltip
                        id={'pro-tooltip-' + index}
                        html={specItem.desc}
                        key={'pro-tooltip-' + index}
                        place={"right"}
                        className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 max-w-[250px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                        noArrow={true}
                      />
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[18px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            )}
          </div>
          <span className="flex-1"></span>
          <div className="border-t border-[#11111133] px-[30px] py-[20px]">
            {(cloud && (proPlanBtnLabel == 'Start free' || proPlanBtnLabel == 'Try free') &&
              <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="hover:-translate-y-[3px] transition p-4 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[18px] font-bold tracking-[-0.11px] leading-4 w-fit">
                { proPlanBtnLabel }
              </Link>
            )}
            {(cloud && proPlanBtnLabel == 'Talk to us' &&
              <button data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Pro" className="hover:-translate-y-[3px] transition p-4 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[18px] font-bold tracking-[-0.11px] leading-4 w-fit">
                Talk to us
              </button>
            )}
            {(!cloud &&
              <Link href="https://www.activepieces.com/docs/getting-started/introduction" target="_blank" rel="noreferer noopener" className="hover:-translate-y-[3px] transition p-4 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[18px] font-bold tracking-[-0.11px] leading-4 w-fit">
                Go to docs
              </Link>
            )}
          </div>
        </div>
        <div className="flex-1 border-r border-[#000] max-[779px]:mb-7 max-[779px]:border max-[779px]:border-[#000] max-[779px]:rounded-md flex flex-col">
          <div className="bg-[#06FFB4] px-[30px] py-[10px] border-b border-[#000] max-[779px]:rounded-tr-[5px] max-[779px]:rounded-tl-[5px]">
            <p className="text-black text-[20px] font-bold leading-[35px]">Platform</p>
          </div>
          <div className="px-[30px] py-[20px] min-h-[270px] max-[1319px]:min-h-[288px] max-[1023px]:min-h-[333px] max-[779px]:min-h-full">
            <p className="text-[18px] text-[#666] leading-[28px] tracking-[0.44px] max-[1319px]:min-h-[84px] max-[1023px]:min-h-[112px] max-[779px]:min-h-full">Best for <span className="font-bold">agencies</span> who manage automations for multiple clients</p>
            <hr className="h-px border-0 border-t border-[#11111133] my-5" />
            <p className="text-black mb-[22px] flex flex-row items-center gap-x-[10px]">
              <span className="flex flex-row items-start">
                <span className="text-[22px]">$</span>
                <span className="text-[40px] font-bold leading-[40px]">249</span>
              </span>
              <span className="text-[18px] font-semibold">monthly</span>
            </p>
            {(cloud && <p className="text-black text-[18px] leading-[26px] tracking-[0.44px] max-w-[325px]">50,000 tasks per month then $1.5 per extra 1,000 tasks</p>)}
            {(!cloud && <p className="text-black text-[18px] leading-[26px] tracking-[0.44px] max-w-[325px]">Bring your own servers, process as many tasks as you want</p>)}
          </div>
          <div className="border-t border-[#11111133] px-[30px] pt-[30px] pb-[20px]">
            {
              platformSpecs.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-id={'platform-tooltip-' + index} className="text-[#666666] text-[18px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <Tooltip
                        id={'platform-tooltip-' + index}
                        html={specItem.desc}
                        key={'platform-tooltip-' + index}
                        place={"right"}
                        className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 max-w-[250px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                        noArrow={true}
                      />
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[18px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            } 
          </div>
          <span className="flex-1"></span>
          <div className="border-t border-[#11111133] px-[30px] py-[20px]">
            <button data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Platform" className="hover:-translate-y-[3px] transition p-4 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[18px] font-bold tracking-[-0.11px] leading-4 w-fit">
              Talk to us
            </button>
          </div>
        </div>
        <div className="flex-1 max-[779px]:border max-[779px]:border-[#000] max-[779px]:rounded-md flex flex-col">
          <div className="bg-[#FFF0BB] px-[30px] py-[10px] border-b border-[#000] rounded-tr-[5px] max-[779px]:rounded-tl-[5px]">
            <p className="text-black text-[20px] font-bold leading-[35px]">Custom</p>
          </div>
          <div className="px-[30px] py-[20px] min-h-[270px] max-[1319px]:min-h-[288px] max-[1023px]:min-h-[333px] max-[779px]:min-h-full">
            <p className="text-[18px] text-[#666] leading-[28px] tracking-[0.44px] max-[1319px]:min-h-[84px] max-[1023px]:min-h-[112px] max-[779px]:min-h-full">Advanced security, reporting and embedded automations</p>
            <hr className="h-px border-0 border-t border-[#11111133] my-5" />
            <p className="text-black text-[40px] font-bold tracking-[1.5px] leading-[50px] max-w-[280px]">Custom Pricing</p>
          </div>
          <div className="border-t border-[#11111133] px-[30px] pt-[30px] pb-[20px]">
            {(cloud && 
              enterpriseSpecsCloud.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-id={'enterprise-tooltip-' + index} className="text-[#666666] text-[18px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <Tooltip
                        id={'enterprise-tooltip-' + index}
                        html={specItem.desc}
                        key={'enterprise-tooltip-' + index}
                        place={"right"}
                        className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 max-w-[250px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                        noArrow={true}
                      />
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[18px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            )}
            {(!cloud && 
              enterpriseSpecsPrem.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-id={'enterprise-tooltip-' + index} className="text-[#666666] text-[18px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <Tooltip
                        id={'enterprise-tooltip-' + index}
                        html={specItem.desc}
                        key={'enterprise-tooltip-' + index}
                        place={"right"}
                        className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 max-w-[250px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                        noArrow={true}
                      />
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-2 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[18px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            )}
          </div>
          <span className="flex-1"></span>
          <div className="border-t border-[#11111133] px-[30px] py-[20px]">
            <button data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Enterprise" className="hover:-translate-y-[3px] transition p-4 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[18px] font-bold tracking-[-0.11px] leading-4 w-fit">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
