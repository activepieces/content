'use client';

import { useState, useEffect} from "react";
import PricingOverview from "../../components/PricingOverview";
import PricingTable from "../../components/PricingTable";

export const PricingMainSection = () => {
    const [cloudColor, setCloudColor] = useState("white");
    const [primColor, setPrimColor] = useState("primary");
    const [toggleBgPosition, setToggleBgPosition] = useState("0");
    const [isCloud, setMode] = useState(true);
    const toggleMode = (mode: boolean) => {
        setMode(mode)
    };
    useEffect(() => {
        if (isCloud) {
            setCloudColor("white");
            setPrimColor("primary");
            setToggleBgPosition("0");
        }else {
            setCloudColor("primary");
            setPrimColor("white");
            setToggleBgPosition("full");
        }
    }, [isCloud]);

    return (
        <>
            <main className="bg-white">
                <section className="container mx-auto py-20 px-4 md:px-0">
                    <div className="mb-[80px] flex flex-row justify-between items-end">
                        <h1 className="text-black text-[80px] font-black leading-[88px] max-w-[580px]">
                            Plans that work for everyone
                        </h1>
                        <div className="p-[5px] bg-[#f1ecfc] rounded-[10px] flex flex-row items-center relative">
                            <p 
                                className={`text-${cloudColor} text-[22px] font-bold flex flex-row items-center justify-center px-[24px] py-[10px] cursor-pointer gap-x-2.5 z-[1] bg-transparent w-[280px] transition duration-500`}
                                onClick={() => toggleMode(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                className={`fill-${cloudColor} transition duration-500`}>
                                    <path d="M15 7.5C18.275 7.5 21.1 9.825 21.7375 13.0375L22.1125 14.9125L24.025 15.05C25.975 15.175 27.5 16.8125 27.5 18.75C27.5 20.8125 25.8125 22.5 23.75 22.5H7.5C4.7375 22.5 2.5 20.2625 2.5 17.5C2.5 14.9375 4.4125 12.8 6.95 12.5375L8.2875 12.4L8.9125 11.2125C10.1 8.925 12.425 7.5 15 7.5ZM15 5C11.3875 5 8.25 7.05 6.6875 10.05C2.925 10.45 0 13.6375 0 17.5C0 21.6375 3.3625 25 7.5 25H23.75C27.2 25 30 22.2 30 18.75C30 15.45 27.4375 12.775 24.1875 12.55C23.3375 8.2375 19.55 5 15 5Z"/>
                                </svg>
                                <span>Cloud <span className="font-normal">(We host)</span></span>
                            </p>
                            <p
                                className={`text-${primColor} text-[22px] font-bold flex flex-row items-center justify-center px-[24px] py-[10px] cursor-pointer gap-x-2.5 z-[1] bg-transparent w-[280px] transition duration-500`}
                                onClick={() => toggleMode(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                className={`fill-${primColor} transition duration-500`}>
                                    <path d="M25 5H5C3.6125 5 2.5 6.125 2.5 7.5V22.5C2.5 23.875 3.6125 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.3875 5 25 5ZM25 22.5H5V10H25V22.5ZM22.5 21.25H15V18.75H22.5V21.25ZM9.375 21.25L7.6125 19.4875L10.8375 16.25L7.6 13.0125L9.375 11.25L14.375 16.25L9.375 21.25Z"/>
                                </svg>
                                <span>On-Prem <span className="font-normal">(You host)</span></span>
                            </p>
                            <div className={`transform translate-x-${toggleBgPosition} bg-primary shadow-md rounded-md w-[280px] h-[50px] absolute transition duration-500`}></div>
                        </div>
                    </div>
                    <div className="mb-[150px]">
                        <PricingOverview isCloud={ isCloud } />
                    </div>
                    <div className="mb-[50px] flex flex-row justify-between items-center">
                        <p className="text-black text-[50px] font-bold leading-[60px]">
                            Compare features
                        </p>
                        <div className="p-[5px] bg-[#f1ecfc] rounded-[10px] flex flex-row items-center relative">
                            <p 
                                className={`text-${cloudColor} text-[22px] font-bold flex flex-row items-center justify-center px-[24px] py-[10px] cursor-pointer gap-x-2.5 z-[1] bg-transparent w-[280px] transition duration-500`}
                                onClick={() => toggleMode(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                className={`fill-${cloudColor} transition duration-500`}>
                                    <path d="M15 7.5C18.275 7.5 21.1 9.825 21.7375 13.0375L22.1125 14.9125L24.025 15.05C25.975 15.175 27.5 16.8125 27.5 18.75C27.5 20.8125 25.8125 22.5 23.75 22.5H7.5C4.7375 22.5 2.5 20.2625 2.5 17.5C2.5 14.9375 4.4125 12.8 6.95 12.5375L8.2875 12.4L8.9125 11.2125C10.1 8.925 12.425 7.5 15 7.5ZM15 5C11.3875 5 8.25 7.05 6.6875 10.05C2.925 10.45 0 13.6375 0 17.5C0 21.6375 3.3625 25 7.5 25H23.75C27.2 25 30 22.2 30 18.75C30 15.45 27.4375 12.775 24.1875 12.55C23.3375 8.2375 19.55 5 15 5Z"/>
                                </svg>
                                <span>Cloud <span className="font-normal">(We host)</span></span>
                            </p>
                            <p 
                                className={`text-${primColor} text-[22px] font-bold flex flex-row items-center justify-center px-[24px] py-[10px] cursor-pointer gap-x-2.5 z-[1] bg-transparent w-[280px] transition duration-500`}
                                onClick={() => toggleMode(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                className={`fill-${primColor} transition duration-500`}>
                                    <path d="M25 5H5C3.6125 5 2.5 6.125 2.5 7.5V22.5C2.5 23.875 3.6125 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.3875 5 25 5ZM25 22.5H5V10H25V22.5ZM22.5 21.25H15V18.75H22.5V21.25ZM9.375 21.25L7.6125 19.4875L10.8375 16.25L7.6 13.0125L9.375 11.25L14.375 16.25L9.375 21.25Z"/>
                                </svg>
                                <span>On-Prem <span className="font-normal">(You host)</span></span>
                            </p>
                            <div className={`transform translate-x-${toggleBgPosition} bg-primary shadow-md rounded-md w-[280px] h-[50px] absolute transition duration-500`}></div>
                        </div>
                    </div>
                    <div>
                        <PricingTable isCloud={ isCloud } />
                    </div>
                </section>
            </main>
        </>
    )
}
