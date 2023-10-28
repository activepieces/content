'use client';
import { useState, useEffect } from "react";
import { initTooltips } from "flowbite";
import Link from "next/link";

export default function PricingTable() {
  initTooltips();
  const proPlans: { [key: string]: any } = [{ "tasks": "1,000", "price": "0" }, { "tasks": "5,000", "price": "15" }, { "tasks": "10,000", "price": "25" }, { "tasks": "25,000", "price": "55" }, { "tasks": "50,000", "price": "100" }, { "tasks": "100,000", "price": "175" }, { "tasks": "200,000", "price": "300" }, { "tasks": "500,000", "price": "500" }, { "tasks": "1 million", "price": "900" }, { "tasks": "1 million+", "price": "Custom ✨" }];
  const proSpecs: { [key: string]: any } = [
    {"spec": "1 user then $5/user/mo", "desc": "1 user then $5/user/mo - This is tooltip description"},
    {"spec": "Community support", "desc": "Community support - This is tooltip description"}
  ];
  const platformSpecs: { [key: string]: any } = [
    {"spec": "25 users then $10/user/mo"},
    {"spec": "2 private pieces", "desc": "2 private pieces - This is tooltip description"},
    {"spec": "Multiple projects", "desc": "Multiple projects - This is tooltip description"},
    {"spec": "Custom templates", "desc": "Custom templates - This is tooltip description"},
    {"spec": "Custom colors and logo", "desc": "Custom colors and logo - This is tooltip description"},
    {"spec": "Remove our branding (+$299/mo)", "desc": "Remove our branding (+$299/mo) - This is tooltip description"},
    {"spec": "Email and community support", "desc": "Email and community support - This is tooltip description"}
  ];
  const enterpriseSpecs: { [key: string]: any } = [
    {"spec": "1 million+ monthly tasks", "desc": "1 million+ monthly tasks - This is tooltip description"},
    {"spec": "150+ users", "desc": "150+ users - This is tooltip description"},
    {"spec": "Single Sign On (SSO)", "desc": "Single Sign On (SSO) - This is tooltip description"},
    {"spec": "Permissions and audit log", "desc": "Permissions and audit log - This is tooltip description"},
    {"spec": "Unlimited private pieces", "desc": "Unlimited private pieces - This is tooltip description"},
    {"spec": "Whitelabeling", "desc": "Whitelabeling - This is tooltip description"},
    {"spec": "Custom reports", "desc": "Custom reports - This is tooltip description"},
    {"spec": "SLA", "desc": "SLA - This is tooltip description"},
    {"spec": "Dedicated Support", "desc": "Dedicated Support - This is tooltip description"}
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
      <div className="w-full border border-black rounded-md flex flex-row">
        <div className="flex-1 border-r border-black">
          <div className="bg-[#98F5F5] px-[30px] py-[22px] border-b border-black rounded-tl-[5px]">
            <p className="text-black text-[28px] font-bold leading-[35px]">Pro</p>
          </div>
          <div className="px-[30px] py-[40px] min-h-[388px]">
            <p className="text-[22px] text-[#666] leading-[28px] tracking-[0.44px]">Automate your team&apos;s work seamlessly</p>
            <hr className="h-px border-0 border-t border-[#11111133] my-10" />
              {isProCustom
              ? <p className="text-black mb-[22px] flex flex-row items-center gap-x-[10px]">
                  <span className="text-[60px] font-bold leading-[80px]">{ price }</span>
                </p>
              : <p className="text-black mb-[22px] flex flex-row items-center gap-x-[10px]">
                  <span className="flex flex-row items-start">
                    <span className="text-[42px]">$</span>
                    <span className="text-[80px] font-bold leading-[80px]">{ price }</span>
                  </span>
                  <span className="text-[22px] font-semibold">{ proMessage }</span>
                </p>
              }
            <p className="text-black text-[22px] leading-[34px] tracking-[0.44px] max-w-[325px] mb-2">{tasks} tasks per month</p>
            <input onChange={(e) => setSlider(e.target.value)} value={proSlider} type="range" min={0} max={9} step={1} className="w-full h-4 bg-[#E1E1E1] rounded-lg appearance-none cursor-pointer range-lg" />
          </div>
          <div className="border-t border-[#11111133] px-[30px] pt-[30px] pb-[20px] min-h-[500px]">
            {
              proSpecs.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-target={'pro-tooltip-' + index} data-tooltip-placement="right" className="text-[#666666] text-[22px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <div data-tooltip id={'pro-tooltip-' + index} role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="p-5 bg-[#2D2E33] rounded-md">
                          <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ specItem.desc }</p>
                        </div>
                      </div>
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[22px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            }      
          </div>
          <div className="border-t border-[#11111133] p-[30px]">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="hover:-translate-y-[6px] transition p-5 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[22px] font-bold tracking-[-0.11px] leading-4 w-fit">
              { proPlanBtnLabel }
            </Link>
          </div>
        </div>
        <div className="flex-1 border-r border-black">
          <div className="bg-[#06FFB4] px-[30px] py-[22px] border-b border-black">
            <p className="text-black text-[28px] font-bold leading-[35px]">Platform</p>
          </div>
          <div className="px-[30px] py-[40px] min-h-[388px]">
            <p className="text-[22px] text-[#666] leading-[28px] tracking-[0.44px]">Automate your <span className="font-bold">agency</span> clients work or embed Activepieces in your <span className="font-bold">SaaS</span></p>
            <hr className="h-px border-0 border-t border-[#11111133] my-10" />
            <p className="text-black mb-[22px] flex flex-row items-center gap-x-[10px]">
              <span className="flex flex-row items-start">
                <span className="text-[42px]">$</span>
                <span className="text-[80px] font-bold leading-[80px]">249</span>
              </span>
              <span className="text-[22px] font-semibold">monthly</span>
            </p>
            <p className="text-black text-[22px] leading-[34px] tracking-[0.44px] max-w-[325px]">50,000 tasks per month then $1.5 per extra 1,000 tasks</p>
          </div>
          <div className="border-t border-[#11111133] px-[30px] pt-[30px] pb-[20px] min-h-[500px]">
            {
              platformSpecs.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-target={'platform-tooltip-' + index} data-tooltip-placement="right" className="text-[#666666] text-[22px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <div data-tooltip id={'platform-tooltip-' + index} role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="p-5 bg-[#2D2E33] rounded-md">
                          <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ specItem.desc }</p>
                        </div>
                      </div>
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[22px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            } 
          </div>
          <div className="border-t border-[#11111133] p-[30px]">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="hover:-translate-y-[6px] transition p-5 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[22px] font-bold tracking-[-0.11px] leading-4 w-fit">
              Talk to us
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-[#FFF0BB] px-[30px] py-[22px] border-b border-black rounded-tr-[5px]">
            <p className="text-black text-[28px] font-bold leading-[35px]">Enterprise</p>
          </div>
          <div className="px-[30px] py-[40px] min-h-[388px]">
            <p className="text-[22px] text-[#666] leading-[28px] tracking-[0.44px]">Advanced management, security, reporting and whitelabeling</p>
            <hr className="h-px border-0 border-t border-[#11111133] my-10" />
            <p className="text-black text-[60px] font-bold tracking-[1.5px] leading-[70px]">Custom Pricing</p>
          </div>
          <div className="border-t border-[#11111133] px-[30px] pt-[30px] pb-[20px] min-h-[500px]">
            {
              enterpriseSpecs.map(function(specItem: any, index: number){
                if(specItem.desc){
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p data-tooltip-target={'enterprise-tooltip-' + index} data-tooltip-placement="right" className="text-[#666666] text-[22px] tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer pb-0.5">
                        {specItem.spec}
                      </p>
                      <div data-tooltip id={'enterprise-tooltip-' + index} role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div className="p-5 bg-[#2D2E33] rounded-md">
                          <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ specItem.desc }</p>
                        </div>
                      </div>
                    </div>  
                  );
                }else{
                  return (
                    <div key={index} className="flex flex-row items-center gap-x-[15px] mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.06167 14.5495L4.23917 10.727L2.9375 12.0195L8.06167 17.1437L19.0617 6.1437L17.7692 4.8512L8.06167 14.5495Z" fill="#666666"/>
                      </svg>
                      <p className="text-[#666666] text-[22px] tracking-[0.44px] pb-0.5">
                        {specItem.spec}
                      </p>
                    </div>  
                  );
                }
              })
            } 
          </div>
          <div className="border-t border-[#11111133] p-[30px]">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="hover:-translate-y-[6px] transition p-5 text-center rounded m-0 flex items-center justify-center bg-black text-white text-[22px] font-bold tracking-[-0.11px] leading-4 w-fit">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
