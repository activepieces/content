'use client';

import { useState, useEffect } from "react";
import GithubWidget from "./GithubWidget";
import { usePathname } from 'next/navigation'

export const GithubStickyWidget = ({ stars }: { stars: number }) => {
    const [hide, setHide] = useState(false);
    const [hideGithubWidget, setHideGithubWidget] = useState(true);
    const pathname = usePathname()

    useEffect(() => {
        if (pathname.startsWith("/blog") && !hideGithubWidget) {
            setHideGithubWidget(true);
        } else if (!pathname.startsWith("/blog") && hideGithubWidget) {
            setHideGithubWidget(false);
        }
    }, [pathname, hideGithubWidget]);

    return <>
        <div className={(hide || hideGithubWidget ? "opacity-0 pointer-events-none" : "opacity-100 ") + " -translate-y-[100px] transition-all sticky w-full flex justify-center bottom-[30px] h-0"}>
            <div
                className="bg-[#06FFB4] border border-solid border-black border-opacity-50 h-[95px] w-[350px] lg:w-[500px] rounded-xl text-h6-sm lg:text-h6-lg !font-bold  flex justify-center gap-[20px] lg:gap-[50px] items-center">
                Star us on GitHub
                <GithubWidget stars={stars} ></GithubWidget>
                <svg onClick={() => setHide(true)} className="cursor-pointer" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8749 0.635938C16.3874 0.148438 15.5999 0.148438 15.1124 0.635938L8.9999 6.73594L2.8874 0.623437C2.3999 0.135938 1.6124 0.135938 1.1249 0.623437C0.637402 1.11094 0.637402 1.89844 1.1249 2.38594L7.2374 8.49844L1.1249 14.6109C0.637402 15.0984 0.637402 15.8859 1.1249 16.3734C1.6124 16.8609 2.3999 16.8609 2.8874 16.3734L8.9999 10.2609L15.1124 16.3734C15.5999 16.8609 16.3874 16.8609 16.8749 16.3734C17.3624 15.8859 17.3624 15.0984 16.8749 14.6109L10.7624 8.49844L16.8749 2.38594C17.3499 1.91094 17.3499 1.11094 16.8749 0.635938Z" fill="#111111" />
                </svg>
            </div>
        </div>

    </>
}