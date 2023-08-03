'use client';
import { useEffect } from "react";
import { AnimatedCurtains } from "./AnimatedCurtains"
import Link from "next/link";
let automatedThingIdx = 0;
const automatedThings = [
    {
        color: "#06FFB4",
        text: "tasks"
    },
    {
        color: "#FFCC4D",
        text: "leads"
    },
    {
        color: "#C8B2FF",
        text: "emails"
    },
    {
        color: "#B2FAFF",
        text: "CRMs"
    },
    {
        color: "#FF9DBB",
        text: "journeys"
    },
    {
        color: "#B2FAFF",
        text: "blogs"
    },
    {
        color: "#FFCC4D",
        text: "Slack"
    },
    {
        color: "#FF9DBB",
        text: "ChatGPT"
    },
    {
        color: "#C8B2FF",
        text: "invoicing"
    }
]


export const AutomateWithActivepieces = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            automatedThingIdx = (automatedThingIdx + 1) % automatedThings.length;
            const automatedText = document.getElementById("automatedText");
            if (!automatedText) return;
            automatedText.innerHTML = automatedThings[automatedThingIdx].text;
            automatedText.style.color = automatedThings[automatedThingIdx].color;
            const startFree = document.getElementById("startFree");
            if (!startFree) return;
            startFree.style.backgroundColor = automatedThings[automatedThingIdx].color;
        }, 3000);
        return () => clearInterval(timer);
    });
    return <>
        <section className="bg-[#0B0B0B] ">
            <AnimatedCurtains id="AnimatedWithAp" intervalPeriod={3000}></AnimatedCurtains>
            <div className="flex justify-center lg:justify-between flex-wrap gap-[30px] px-4 py-[80px] lg:px-[0px] container mx-auto lg:py-[100px] ">
                <div className="text-center lg:text-left max-w-[861px] text-white text-[50px]   font-bold  tracking-wide lg:text-[80px] w-full lg:w-auto">
                    Automate <br className="lg:hidden"></br> <span id="automatedText" className="text-[#06FFB4]" >tasks</span> <br className="lg:hidden"></br>  with <br className="lg:hidden"></br> Activepieces
                </div>
                <Link href="https://cloud.activepieces.com/sign-up" target="_blank" rel="noreferer noopener" id="startFree" className="hover:-translate-y-[6px] transition-transform bg-[#06FFB4] px-[75px] text-center whitespace-nowrap rounded  my-[20px] flex items-center justify-center py-[65px] text-black text-[50px] font-bold leading-[60px] tracking-wider ">
                    Start free
                </Link>
            </div>
        </section >


    </>

}
