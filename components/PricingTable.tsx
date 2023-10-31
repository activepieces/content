'use client';
import { useState, useEffect } from "react";
import { initTooltips } from "flowbite";
import Link from "next/link";

export default function PricingTable(isCloud: any) {
  initTooltips();
  let cloud = isCloud.isCloud;  
  const features: { [key: string]: any } = [
    {
      "title": "Title 1",
      "features": [
        {
          "title": "Feature 1",
          "tooltip": "Feature 1 - Tooltip descirption",
          "pro": {
            "ticked": true
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Feature 2",
          "tooltip": "Feature 2 - Tooltip descirption",
          "pro": {
            "value": "Up to 5",
            "tooltip": "Up to 5 - Tooltip descirption"
          },
          "platform": {
            "value": "Unlimited",
            "tooltip": "Unlimited - Tooltip descirption"
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Feature 3",
          "pro": {
            "ticked": false
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "ticked": true
          }
        }
      ]
    },
    {
      "title": "Title 2",
      "features": [
        {
          "title": "Feature 1",
          "tooltip": "Feature 1 - Tooltip descirption",
          "pro": {
            "ticked": true
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Feature 2",
          "tooltip": "Feature 2 - Tooltip descirption",
          "pro": {
            "value": "Up to 5",
            "tooltip": "Up to 5 - Tooltip descirption"
          },
          "platform": {
            "value": "Unlimited",
            "tooltip": "Unlimited - Tooltip descirption"
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Feature 3",
          "pro": {
            "ticked": false
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "ticked": true
          }
        }
      ]
    }
  ];

  return (
    <>
      <div className="w-full border border-[#000] rounded-md">
        <div className="border-b border-[#000]">
          <div className="flex flex-row">
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]"><p className="text-black text-[22px] tracking-[0.44px] font-bold">Features</p></div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 bg-[#98F5F5]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Pro</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  0
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">free</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 bg-[#06FFB4]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Platform</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  249
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">monthly</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 flex-1 bg-[#FFF0BB] rounded-tr-[5px]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Enterprise</p>
              <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px] max-w-[52px] text-center">Custom Pricing</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row min-h-[78px] border-b border-[#000]">
          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]"></div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Start free</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
        </div>
        {
          features.map(function(feature: any, index: number){
            return (
              <div key={index} className="border-b border-[#000]">
                <div className="flex flex-row items-center bg-[#000] min-h-[78px] px-[30px] py-4">
                  <p className="text-white text-[22px] tracking-[0.44px] font-semibold">{ feature.title }</p>
                </div>
                {
                  feature.features.map(function(item: any, itemIndex: number)
                  {
                    return (
                      <div key={itemIndex} className="odd:bg-[#F2F2F2] even:bg-white">
                        <div className="flex flex-row min-h-[78px]">
                          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]">
                          {
                            (!item.tooltip &&
                              <p className="text-black text-[22px] tracking-[0.44px] font-bold">{ item.title }</p>
                            )
                          }
                          {
                            (item.tooltip &&
                              <div>
                                <p data-tooltip-target={'table-section-tooltip-' + itemIndex} data-tooltip-placement="right" className="text-black text-[22px] tracking-[0.44px] font-bold border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.title }</p>
                                <div data-tooltip id={'table-section-tooltip-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-64 transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                  <div className="p-5 bg-[#2D2E33] rounded-md">
                                    <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ item.tooltip }</p>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          </div>
                          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
                            {
                              (item.pro.ticked && 
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                  <path d="M8.06167 14.5497L4.23917 10.7272L2.9375 12.0197L8.06167 17.1438L19.0617 6.14382L17.7692 4.85132L8.06167 14.5497Z" fill="#373737"/>
                                </svg>  
                              )
                            }
                            {
                              (!item.pro.ticked && !item.pro.value &&
                                <p className="text-[22px] text-[#373737]">—</p>
                              )
                            }
                            {
                              (item.pro.value && !item.pro.tooltip &&
                                <p className="text-[22px] text-black tracking-[0.44px]">{ item.pro.value }</p>
                              )
                            }
                            {
                              (item.pro.value && item.pro.tooltip && 
                                <div>
                                  <p data-tooltip-target={'pro-tooltip-table' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.pro.value }</p>
                                  <div data-tooltip id={'pro-tooltip-table' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-64 transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                    <div className="p-5 bg-[#2D2E33] rounded-md">
                                      <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ item.pro.tooltip }</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          </div>
                          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
                            {
                              (item.platform.ticked && 
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                  <path d="M8.06167 14.5497L4.23917 10.7272L2.9375 12.0197L8.06167 17.1438L19.0617 6.14382L17.7692 4.85132L8.06167 14.5497Z" fill="#373737"/>
                                </svg>  
                              )
                            }
                            {
                              (!item.platform.ticked && !item.platform.value &&
                                <p className="text-[22px] text-[#373737]">—</p>
                              )
                            }
                            {
                              (item.platform.value && !item.platform.tooltip &&
                                <p className="text-[22px] text-black tracking-[0.44px]">{ item.platform.value }</p>
                              )
                            }
                            {
                              (item.platform.value && item.platform.tooltip && 
                                <div>
                                  <p data-tooltip-target={'platform-tooltip-table' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.platform.value }</p>
                                  <div data-tooltip id={'platform-tooltip-table' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-64 transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                    <div className="p-5 bg-[#2D2E33] rounded-md">
                                      <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ item.platform.tooltip }</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          </div>
                          <div className="flex flex-row items-center px-[30px] py-4 flex-1">
                            {
                              (item.enterprise.ticked && 
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                  <path d="M8.06167 14.5497L4.23917 10.7272L2.9375 12.0197L8.06167 17.1438L19.0617 6.14382L17.7692 4.85132L8.06167 14.5497Z" fill="#373737"/>
                                </svg>  
                              )
                            }
                            {
                              (!item.enterprise.ticked && !item.enterprise.value &&
                                <p className="text-[22px] text-[#373737]">—</p>
                              )
                            }
                            {
                              (item.enterprise.value && !item.enterprise.tooltip &&
                                <p className="text-[22px] text-black tracking-[0.44px]">{ item.enterprise.value }</p>
                              )
                            }
                            {
                              (item.enterprise.value && item.enterprise.tooltip && 
                                <div>
                                  <p data-tooltip-target={'enterprise-tooltip-table' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.enterprise.value }</p>
                                  <div data-tooltip id={'enterprise-tooltip-table' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-64 transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
                                    <div className="p-5 bg-[#2D2E33] rounded-md">
                                      <p className="text-white text-lg tracking-[0.44px] leading-[22px]">{ item.enterprise.tooltip }</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
        <div className="border-b border-[#000]">
          <div className="flex flex-row">
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]"></div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 bg-[#98F5F5]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Pro</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  0
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">free</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 bg-[#06FFB4]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Platform</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  249
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">monthly</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 flex-1 bg-[#FFF0BB]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Enterprise</p>
              <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px] max-w-[52px] text-center">Custom Pricing</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row min-h-[78px]">
          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]"></div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Start free</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
