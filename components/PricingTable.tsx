'use client';
import { useState, useEffect } from "react";
import { initTooltips } from "flowbite";
import Link from "next/link";

export default function PricingTable(isCloud: any) {
  initTooltips();
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
            "value": "Basicper month",
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
            "tooltip": "Tasks pricing packages are: $0 - 1,000 tasks / mo $15 - 5,000 tasks / mo $25 - 10,000 tasks / mo $55 - 25,000 tasks / mo $100 - 50,000 tasks / mo $175 - 100,000 tasks / mo $300 - 200,000 tasks / mo $500 - 500,000 tasks / mo $900 - 1 million tasks / mo"
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
      "title": "Chatbots",
      "features": [
        {
          "title": "Chatbots",
          "tooltip": "Create a chatbot on top of GPT and train it on your data",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "1"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Data sources",
          "tooltip": "Type of data you can train the chatbot on",
          "pro": {
            "value": "PDF files"
          },
          "platform": {
            "value": "PDF files"
          },
          "enterprise": {
            "value": "Custom",
            "tooltip": "Train the chatbot on your third party data sources that have your content"
          }
        },
        {
          "title": "Data sources per chatbot",
          "tooltip": "How many data sources you can add to one chatbot",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "1"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Max file size",
          "tooltip": "Max file size for file-based data sources like PDF",
          "pro": {
            "value": "2 mb"
          },
          "platform": {
            "value": "2 mb"
          },
          "enterprise": {
            "ticked": false
          }
        },
        {
          "title": "Public chatbot link",
          "tooltip": "Share a link that doesn't require sign in to chat with your bot",
          "pro": {
            "ticked": true
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
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
            "ticked": true
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
            "value": "Basicper month",
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
      "title": "Chatbots",
      "features": [
        {
          "title": "Chatbots",
          "tooltip": "Create a chatbot on top of GPT and train it on your data",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "1"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Data sources",
          "tooltip": "Type of data you can train the chatbot on",
          "pro": {
            "value": "PDF files"
          },
          "platform": {
            "value": "PDF files"
          },
          "enterprise": {
            "value": "Custom",
            "tooltip": "Train the chatbot on your third party data sources that have your content"
          }
        },
        {
          "title": "Data sources per chatbot",
          "tooltip": "How many data sources you can add to one chatbot",
          "pro": {
            "value": "1"
          },
          "platform": {
            "value": "1"
          },
          "enterprise": {
            "value": "Unlimited"
          }
        },
        {
          "title": "Max file size",
          "tooltip": "Max file size for file-based data sources like PDF",
          "pro": {
            "value": "2 mb"
          },
          "platform": {
            "value": "2 mb"
          },
          "enterprise": {
            "ticked": false
          }
        },
        {
          "title": "Public chatbot link",
          "tooltip": "Share a link that doesn't require sign in to chat with your bot",
          "pro": {
            "ticked": true
          },
          "platform": {
            "ticked": true
          },
          "enterprise": {
            "ticked": true
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
            "ticked": true
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
                          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]">
                          {
                            (!item.tooltip &&
                              <p className="text-black text-[22px] tracking-[0.44px] font-bold">{ item.title }</p>
                            )
                          }
                          {
                            (item.tooltip &&
                              <div>
                                <p data-tooltip-target={'table-section-tooltip-' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-black text-[22px] tracking-[0.44px] font-bold border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.title }</p>
                                <div data-tooltip id={'table-section-tooltip-' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                                  <p data-tooltip-target={'pro-tooltip-table' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.pro.value }</p>
                                  <div data-tooltip id={'pro-tooltip-table' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                                  <p data-tooltip-target={'platform-tooltip-table' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.platform.value }</p>
                                  <div data-tooltip id={'platform-tooltip-table' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                                  <p data-tooltip-target={'enterprise-tooltip-table' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.enterprise.value }</p>
                                  <div data-tooltip id={'enterprise-tooltip-table' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                          <div className="flex flex-row items-center justify-between px-[30px] py-4 border-r border-[#000] w-[400px]">
                          {
                            (!item.tooltip &&
                              <p className="text-black text-[22px] tracking-[0.44px] font-bold">{ item.title }</p>
                            )
                          }
                          {
                            (item.tooltip &&
                              <div>
                                <p data-tooltip-target={'table-section-tooltip-' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-black text-[22px] tracking-[0.44px] font-bold border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.title }</p>
                                <div data-tooltip id={'table-section-tooltip-' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                                  <p data-tooltip-target={'pro-tooltip-table' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.pro.value }</p>
                                  <div data-tooltip id={'pro-tooltip-table' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                                  <p data-tooltip-target={'platform-tooltip-table' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.platform.value }</p>
                                  <div data-tooltip id={'platform-tooltip-table' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
                                  <p data-tooltip-target={'enterprise-tooltip-table' + index + '-' + itemIndex} data-tooltip-placement="right" className="text-[22px] text-black tracking-[0.44px] border-b border-[#6E6E6E] border-dashed cursor-pointer">{ item.enterprise.value }</p>
                                  <div data-tooltip id={'enterprise-tooltip-table' + index + '-' + itemIndex} role="tooltip" className="absolute z-10 invisible inline-block w-[259px] transition-opacity duration-300 rounded-lg shadow-sm opacity-0">
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
