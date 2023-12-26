'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function PricingTable(isCloud: any) {
  let cloud = isCloud.isCloud;  
  const featuresCloud: { [key: string]: any } = [
    {
      "title": "Users",
      "features": [
        {
          "title": "Users included",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "25"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Cost per additional user",
          "tooltip": "Cost per additional user regardless of their permissions",
          "pro": {
            "value": "$5 per month"
          },
          "platform": {
            "value": "$10 per month"
          },
          "enterprise": {
            "value": "Volume discounts",
            "tooltip": "Discounted per-user pricing for 150+ users"
          }
        },
        {
          "title": "User permissions",
          "pro": {
            "value": "Basic",
            "tooltip": "Admin, editor and viewer roles"
          },
          "platform": {
            "value": "Basic",
            "tooltip": "Admin, editor and viewer roles"
          },
          "enterprise": {
            "value": "Advanced",
            "tooltip": "Create custom roles"
          }
        }
      ]
    },
    {
      "title": "Automations",
      "features": [
        {
          "title": "Tasks",
          "tooltip": "Every executed step in a flow counts as a task",
          "pro": {
            "value": "Free up to 1,000 monthly tasks, packaged pricing after",
            "tooltip": "Tasks pricing packages are:<br/> $0 - 1,000 tasks / mo<br/> $15 - 5,000 tasks / mo<br/> $25 - 10,000 tasks / mo<br/> $55 - 25,000 tasks / mo<br/> $100 - 50,000 tasks / mo<br/> $175 - 100,000 tasks / mo<br/> $300 - 200,000 tasks / mo<br/> $500 - 500,000 tasks / mo<br/> $900 - 1 million tasks / mo"
          },
          "platform": {
            "value": "50,000 monthly tasks (+$1.5 per extra 1,000)"
          },
          "enterprise": {
            "value": "Volume discounts",
            "tooltip": "Discounted per-task pricing for 1 million+ tasks"
          }
        },
        {
          "title": "Flows",
          "tooltip": "Every automation is a flow",
          "pro": {
            "value": "Unlimited"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Steps per flow",
          "tooltip": "Steps are the building blocks of the automation flow",
          "pro": {
            "value": "Unlimited"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Folders",
          "tooltip": "Flows can be organized in folders",
          "pro": {
            "value": "Unlimited"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Instant triggers",
          "tooltip": "Some triggers are instant because the service supports webhooks",
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
          "title": "Sync time",
          "tooltip": "Some triggers are not instant, they check for updated data regularly, we call this period Sync time",
          "pro": {
            "value": "5 mins"
          },
          "platform": {
            "value": "5 mins"
          },
          "enterprise": {
            "value": "1 min"
          }
        },
        {
          "title": "Open source pieces",
          "tooltip": "Usage of the pieces that are licensed as open source in our GitHub repo",
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
          "title": "Webhooks",
          "tooltip": "Use webhooks as your flow trigger",
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
          "title": "Schedules",
          "tooltip": "Run flows periodically using the Schedule trigger",
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
          "title": "Code piece",
          "tooltip": "Write Javascript code as part of your flow",
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
          "title": "Private custom pieces",
          "tooltip": "Code your own pieces without contributing them as open source",
          "pro": {
            "ticked": false
          },
          "platform": {
            "value": "2"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        }
      ]
    },
    {
      "title": "Platform",
      "features": [
        {
          "title": "Platform access",
          "tooltip": "Platform is a separate admin panel to manage the platform features",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Projects",
          "tooltip": "Number of projects you can create under your Platform",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Custom theme",
          "tooltip": "Change the color and logo of the projects under your Platform",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Remove our branding",
          "tooltip": 'Hide our "Built with Activepieces" badge',
          "pro": {
            "ticked": false
          },
          "platform": {
            "value": "$299 per month",
            "tooltip": "Additional cost to remove our branding"
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Custom domain",
          "tooltip": "Login to Activepieces using your own domain (or subdomain)",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Embed in your SaaS",
          "tooltip": "Let your users use Activepieces within your app without a separate account",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "ticked": true
          }
        },
      ]
    },
    {
      "title": "Security and support",
      "features": [
        {
          "title": "Version history",
          "tooltip": "Access to previous versions of your flow",
          "pro": {
            "value": "Draft and Published",
            "tooltip": "View the published version of the flow and edit the newer one"
          },
          "platform": {
            "value": "Draft and Published",
            "tooltip": "View the published version of the flow and edit the newer one"
          },
          "enterprise": {
            "value": "Unlimited",
            "tooltip": "View any previous version of the flow and restore it"
          }
        },
        {
          "title": "Audit log",
          "tooltip": "View logs of users activities within your projects",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "SSO SAML and LDAP",
          "tooltip": "Let your users login with your SSO provider",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Reports",
          "tooltip": "Monitor your account usage and health metrics",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "value": "Custom",
            "tooltip": "Build custom dashboards to monitor usage and health"
          }
        },
        {
          "title": "Support",
          "pro": {
            "value": "Community",
            "tooltip": "Get help from our active community forum"
          },
          "platform": {
            "value": "Email and community",
            "tooltip": "Get help from our active community forum or on email within 3 days"
          },
          "enterprise": {
            "value": "Dedicated support",
            "tooltip": "Private support on Slack with SLA agreements"
          }
        },
      ]
    }
  ];

  const featuresPrem: { [key: string]: any } = [
    {
      "title": "Users",
      "features": [
        {
          "title": "Users included",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "25"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Cost per additional user",
          "tooltip": "Cost per additional user regardless of their permissions",
          "pro": {
            "value": "$5 per month"
          },
          "platform": {
            "value": "$10 per month"
          },
          "enterprise": {
            "value": "Volume discounts",
            "tooltip": "Discounted per-user pricing for 150+ users"
          }
        },
        {
          "title": "User permissions",
          "pro": {
            "value": "Basic",
            "tooltip": "Admin, editor and viewer roles"
          },
          "platform": {
            "value": "Basic",
            "tooltip": "Admin, editor and viewer roles"
          },
          "enterprise": {
            "value": "Advanced",
            "tooltip": "Create custom roles"
          }
        }
      ]
    },
    {
      "title": "Automations",
      "features": [
        {
          "title": "Tasks",
          "tooltip": "Every executed step in a flow counts as a task",
          "pro": {
            "value": "As many tasks as your servers can handle"
          },
          "platform": {
            "value": "As many tasks as your servers can handle"
          },
          "enterprise": {
            "value": "Volume discounts",
            "tooltip": "Discounted per-task pricing for 1 million+ tasks"
          }
        },
        {
          "title": "Flows",
          "tooltip": "Every automation is a flow",
          "pro": {
            "value": "Unlimited"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Steps per flow",
          "tooltip": "Steps are the building blocks of the automation flow",
          "pro": {
            "value": "Unlimited"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Folders",
          "tooltip": "Flows can be organized in folders",
          "pro": {
            "value": "Unlimited"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Instant triggers",
          "tooltip": "Some triggers are instant because the service supports webhooks",
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
          "title": "Sync time",
          "tooltip": "Some triggers are not instant, they check for updated data regularly, we call this period Sync time",
          "pro": {
            "value": "5 mins"
          },
          "platform": {
            "value": "5 mins"
          },
          "enterprise": {
            "value": "1 min"
          }
        },
        {
          "title": "Open source pieces",
          "tooltip": "Usage of the pieces that are licensed as open source in our GitHub repo",
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
          "title": "Webhooks",
          "tooltip": "Use webhooks as your flow trigger",
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
          "title": "Schedules",
          "tooltip": "Run flows periodically using the Schedule trigger",
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
          "title": "Code piece",
          "tooltip": "Write Javascript code as part of your flow",
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
          "title": "Private custom pieces",
          "tooltip": "Code your own pieces without contributing them as open source",
          "pro": {
            "ticked": false
          },
          "platform": {
            "value": "2"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        }
      ]
    },
    {
      "title": "Platform",
      "features": [
        {
          "title": "Platform access",
          "tooltip": "Platform is a separate admin panel to manage the platform features",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Projects",
          "tooltip": "Number of projects you can create under your Platform",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "Unlimited"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Custom theme",
          "tooltip": "Change the color and logo of the projects under your Platform",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Remove our branding",
          "tooltip": 'Hide our "Built with Activepieces" badge',
          "pro": {
            "ticked": false
          },
          "platform": {
            "value": "$299 per month",
            "tooltip": "Additional cost to remove our branding"
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Custom domain",
          "tooltip": "Login to Activepieces using your own domain (or subdomain)",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Embed in your SaaS",
          "tooltip": "Let your users use Activepieces within your app without a separate account",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "ticked": true
          }
        },
      ]
    },
    {
      "title": "Security and support",
      "features": [
        {
          "title": "Version history",
          "tooltip": "Access to previous versions of your flow",
          "pro": {
            "value": "Draft and Published",
            "tooltip": "View the published version of the flow and edit the newer one"
          },
          "platform": {
            "value": "Draft and Published",
            "tooltip": "View the published version of the flow and edit the newer one"
          },
          "enterprise": {
            "value": "Unlimited",
            "tooltip": "View any previous version of the flow and restore it"
          }
        },
        {
          "title": "Audit log",
          "tooltip": "View logs of users activities within your projects",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "SSO SAML and LDAP",
          "tooltip": "Let your users login with your SSO provider",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "ticked": true
          }
        },
        {
          "title": "Reports",
          "tooltip": "Monitor your account usage and health metrics",
          "pro": {
            "ticked": false
          },
          "platform": {
            "ticked": false
          },
          "enterprise": {
            "value": "Custom",
            "tooltip": "Build custom dashboards to monitor usage and health"
          }
        },
        {
          "title": "Support",
          "pro": {
            "value": "Community",
            "tooltip": "Get help from our active community forum"
          },
          "platform": {
            "value": "Email and community",
            "tooltip": "Get help from our active community forum or on email within 3 days"
          },
          "enterprise": {
            "value": "Dedicated support",
            "tooltip": "Private support on Slack with SLA agreements"
          }
        },
      ]
    }
  ];

  return (
    <>
      <div className="w-full border border-[#000] rounded-md">
        <div className="border-b border-[#000]">
          <div className="flex flex-row">
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px] max-[1319px]:w-[320px] max-[1090px]:w-[250px] max-[1023px]:w-[25%]"><p className="text-black text-[22px] tracking-[0.44px] font-bold">Features</p></div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 gap-x-[4px] max-[1023px]:px-4 max-[1023px]:w-[25%] max-[1023px]:flex-none bg-[#98F5F5]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Pro</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  0
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">free</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 gap-x-[4px] max-[1023px]:px-4 max-[1023px]:w-[25%] max-[1023px]:flex-none bg-[#06FFB4]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Platform</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  249
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">monthly</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 flex-1 gap-x-[4px] max-[1023px]:px-4 max-[1023px]:w-[25%] max-[1023px]:flex-none bg-[#FFF0BB] rounded-tr-[5px]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Enterprise</p>
              <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px] max-w-[52px] text-center">Custom Pricing</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row min-h-[78px] border-b border-[#000]">
          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px] max-[1319px]:w-[320px] max-[1090px]:w-[250px] max-[1023px]:w-[25%]"></div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            {
              (cloud && 
              <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
                <p className="text-xl text-primary font-bold">Start free</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                  <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
                </svg>
              </Link>)
            }
            {
              (!cloud &&
              <Link href="https://www.activepieces.com/docs/getting-started/introduction" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
                <p className="text-xl text-primary font-bold">Go to docs</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                  <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
                </svg>
              </Link>)
            }
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <div className="flex flex-row items-center justify-between flex-1 cursor-pointer" data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Platform">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 flex-1">
            <div className="flex flex-row items-center justify-between flex-1 cursor-pointer" data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Enterprise">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </div>
          </div>
        </div>
        { // needs refactor in order not to repeat code
          cloud &&
          featuresCloud.map(function(feature: any, index: number){
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
                          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px] max-[1319px]:w-[320px] max-[1090px]:w-[250px] max-[1023px]:w-[25%]">
                          {
                            (!item.tooltip &&
                              <p className="text-black text-[22px] tracking-[0.44px] font-bold">{ item.title }</p>
                            )
                          }
                          {
                            (item.tooltip &&
                              <div>
                                <p data-tooltip-id={'table-section-tooltip-' + index + '-' + itemIndex} className="text-black text-[22px] tracking-[0.44px] font-bold border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.title }</p>
                                <Tooltip
                                  id={'table-section-tooltip-' + index + '-' + itemIndex}
                                  html={item.tooltip}
                                  key={'table-section-tooltip-' + index + '-' + itemIndex}
                                  place={"right"}
                                  className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                  noArrow={true}                          
                                />
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
                                  <p data-tooltip-id={'pro-tooltip-table' + index + '-' + itemIndex} className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.pro.value }</p>
                                  <Tooltip
                                    id={'pro-tooltip-table' + index + '-' + itemIndex}
                                    html={item.pro.tooltip}
                                    key={'pro-tooltip-table' + index + '-' + itemIndex}
                                    place={"right"}
                                    className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                    noArrow={true}                            
                                  />
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
                                  <p data-tooltip-id={'platform-tooltip-table' + index + '-' + itemIndex} className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.platform.value }</p>
                                  <Tooltip
                                    id={'platform-tooltip-table' + index + '-' + itemIndex}
                                    html={item.platform.tooltip}
                                    key={'platform-tooltip-table' + index + '-' + itemIndex}
                                    place={"right"}
                                    className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                    noArrow={true}                            
                                  />
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
                                  <p data-tooltip-id={'enterprise-tooltip-table' + index + '-' + itemIndex} className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.enterprise.value }</p>
                                  <Tooltip
                                    id={'enterprise-tooltip-table' + index + '-' + itemIndex}
                                    html={item.enterprise.tooltip}
                                    key={'enterprise-tooltip-table' + index + '-' + itemIndex}
                                    place={"right"}
                                    className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                    noArrow={true}                            
                                  />
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
        {
          !cloud &&
          featuresPrem.map(function(feature: any, index: number){
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
                          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px] max-[1319px]:w-[320px] max-[1090px]:w-[250px] max-[1023px]:w-[25%]">
                          {
                            (!item.tooltip &&
                              <p className="text-black text-[22px] tracking-[0.44px] font-bold">{ item.title }</p>
                            )
                          }
                          {
                            (item.tooltip &&
                              <div>
                                <p data-tooltip-id={'table-section-tooltip-' + index + '-' + itemIndex} className="text-black text-[22px] tracking-[0.44px] font-bold border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.title }</p>
                                <Tooltip
                                  id={'table-section-tooltip-' + index + '-' + itemIndex}
                                  html={item.tooltip}
                                  key={'table-section-tooltip-' + index + '-' + itemIndex}
                                  place={"right"}
                                  className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                  noArrow={true}                          
                                />
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
                                  <p data-tooltip-id={'pro-tooltip-table' + index + '-' + itemIndex} className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.pro.value }</p>
                                  <Tooltip
                                    id={'pro-tooltip-table' + index + '-' + itemIndex}
                                    html={item.pro.tooltip}
                                    key={'pro-tooltip-table' + index + '-' + itemIndex}
                                    place={"right"}
                                    className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                    noArrow={true}                            
                                  />
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
                                  <p data-tooltip-id={'platform-tooltip-table' + index + '-' + itemIndex} className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.platform.value }</p>
                                  <Tooltip
                                    id={'platform-tooltip-table' + index + '-' + itemIndex}
                                    html={item.platform.tooltip}
                                    key={'platform-tooltip-table' + index + '-' + itemIndex}
                                    place={"right"}
                                    className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                    noArrow={true}                            
                                  />
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
                                  <p data-tooltip-id={'enterprise-tooltip-table' + index + '-' + itemIndex} className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.enterprise.value }</p>
                                  <Tooltip
                                    id={'enterprise-tooltip-table' + index + '-' + itemIndex}
                                    html={item.enterprise.tooltip}
                                    key={'enterprise-tooltip-table' + index + '-' + itemIndex}
                                    place={"right"}
                                    className='!p-5 !bg-[#2D2E33] !rounded-md !px-3 !py-3 !w-[220px] !text-white !text-[16px] !racking-[0.44px] !leading-[22px] !opacity-100'
                                    noArrow={true}                            
                                  />
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
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px] max-[1319px]:w-[320px] max-[1090px]:w-[250px] max-[1023px]:w-[25%]"></div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 gap-x-[4px] max-[1023px]:px-4 max-[1023px]:w-[25%] max-[1023px]:flex-none bg-[#98F5F5]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Pro</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  0
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">free</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] flex-1 gap-x-[4px] max-[1023px]:px-4 max-[1023px]:w-[25%] max-[1023px]:flex-none bg-[#06FFB4]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Platform</p>
              <div>
                <p className="text-[#333] text-[22px] tracking-[0.44px] flex flex-row items-start font-bold leading-[28px]">
                  <span className="text-sm font-normal">$</span>
                  249
                </p>
                <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px]">monthly</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[30px] py-4 flex-1 gap-x-[4px] max-[1023px]:px-4 max-[1023px]:w-[25%] max-[1023px]:flex-none bg-[#FFF0BB]">
              <p className="text-black text-[22px] tracking-[0.44px] font-bold">Enterprise</p>
              <p className="text-[#333] text-sm leading-[17px] tracking-[0.44px] max-w-[52px] text-center">Custom Pricing</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row min-h-[78px]">
          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px] max-[1319px]:w-[320px] max-[1090px]:w-[250px] max-[1023px]:w-[25%]"></div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" className="flex flex-row items-center justify-between flex-1">
              <p className="text-xl text-primary font-bold">Start free</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </Link>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 border-r border-[#000] flex-1">
            <div className="flex flex-row items-center justify-between flex-1 cursor-pointer" data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Platform">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-center px-[30px] py-4 flex-1">
            <div className="flex flex-row items-center justify-between flex-1 cursor-pointer" data-tally-open="nrO9gL" data-tally-layout="modal" data-tally-width="700" data-tally-auto-close="3000" data-plan="Enterprise">
              <p className="text-xl text-primary font-bold">Talk to us</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="41" viewBox="0 0 28 41" fill="none">
                <path d="M20.4685 19.3048L0.569904 19.1311L0.540986 22.4448L20.4396 22.6185L20.3962 27.589L27.0648 21.0193L20.5119 14.3343L20.4685 19.3048Z" fill="#6E41E2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
