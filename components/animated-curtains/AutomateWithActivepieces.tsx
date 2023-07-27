'use client';
import { useEffect, useRef, useState } from "react";
import { AnimatedCurtains } from "./AnimatedCurtains"
let x = 0;
const automatedThings = [
    {
        color: "#06FFB4",
        text: "tasks"
    },
    {
        color: "FFCC4D",
        text: "leads"
    },
    {
        color: "#C8B2FF",
        text: "emails"
    },
    {
        color: "#B2FAFF",
        text: "emails"
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
        text: "slack"
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
    const [automatedThingIdx, setAutomatedThingIdx] = useState(0);
    useEffect(() => {
        setAutomatedThingIdx(automatedThingIdx)
        setTimeout(() => {
            setAutomatedThingIdx(z => (z + 1) % automatedThings.length);
        }, 3000)
    }, [automatedThingIdx]);


    return <>
        <section className="bg-black ">
            <AnimatedCurtains></AnimatedCurtains>
            <div className="flex justify-center lg:justify-start flex-wrap gap-[30px] px-4 py-[80px] lg:px-[0px] container mx-auto lg:py-[100px] ">
                <div className="text-center lg:text-left max-w-[871px] text-white text-[50px]  tracking-wider font-bold  lg:tracking-widest lg:text-[80px] w-full lg:w-auto">
                    Automate <br className="lg:hidden"></br> <span className="text-[#06FFB4]" style={{ color: automatedThings[automatedThingIdx].color }}>{automatedThings[automatedThingIdx].text}</span> <br className="lg:hidden"></br>  with <br className="lg:hidden"></br> Activepieces
                </div>
                <div style={{ backgroundColor: automatedThings[automatedThingIdx].color }} className="px-[75px] text-center whitespace-nowrap rounded  my-[20px] flex items-center justify-center py-[65px] text-black text-[50px] font-bold leading-[60px] tracking-wider ">
                    Start free
                </div>
            </div>

        </section>


    </>

}