'use client';
import { Raleway } from "next/font/google"
import { useRef, useState } from "react";


const relaeway = Raleway({ subsets: ['latin'], weight: ['700', '400', '300', '100'], variable: '--font-inter', display: 'swap', adjustFontFallback: false },)
export const NewsLetterComponent = () => {
    const addSubscriber = (email: string) => {
        setSubmitted(true);
        fetch("https://us-central1-activepieces-b3803.cloudfunctions.net/addContact", {
            method: "POST",
            body: JSON.stringify({ email: email }),
            headers: {
                "content-type": "application/json",
            },
        }).catch((e) => console.log(e));
    };
    const email = useRef<HTMLInputElement>(null);
    const [submitted, setSubmitted] = useState(false);
    return <div className="flex bg-[#DE5532] flex-col lg:flex-row w-[358px] lg:w-full rounded-md overflow-hidden lg:h-[8rem]">
        <div className="h-[120px] lg:h-[auto] lg:w-[195px] bg-[url('/newsLetter_mobile.svg')] lg:bg-[url('/newsLetter.svg')] bg-contain bg-no-repeat">
        </div>
        <div className={relaeway.className + " grow px-6 py-6 lg:px-10 lg:py-[1rem]"}>
            <div className={(submitted ? 'hidden' : 'flex') + " flex-col lg:flex-row lg:items-center gap-10"}>
                <div className="text-center text-white lg:text-left max-w-[19.25rem]">
                    <div className="text-h5-sm lg:text-h6-lg mb-5">
                        Subscribe to the best newsletter of Activepieces.
                    </div>
                    <div className="text-h6-sm font-normal">
                        &ensp; •&nbsp;  Delivered twice a month.
                    </div>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); addSubscriber(email.current!.value) }} className="flex bg-white rounded-md items-center overflow-hidden" >
                    <div className="grow">
                        <input ref={email} required placeholder="Type your email..." type="email" className="text-h5-sm lg:text-h6-lg font-normal focus:outline-none pl-6" >
                        </input>
                    </div>
                    <button className="flex items-center justify-center bg-black w-[70px] h-[70px]">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.90213 17.1698L18.8674 9.89754C19.6549 9.55726 19.6549 8.44893 18.8674 8.10865L1.90213 0.836429C1.26046 0.554484 0.550738 1.03087 0.550738 1.72115L0.541016 6.2031C0.541016 6.68921 0.900738 7.10726 1.38685 7.1656L15.1243 9.0031L1.38685 10.8309C0.900738 10.8989 0.541016 11.317 0.541016 11.8031L0.550738 16.285C0.550738 16.9753 1.26046 17.4517 1.90213 17.1698Z" fill="white" />
                        </svg>
                    </button>
                </form>
            </div>
            <div className={(submitted ? 'flex' : 'hidden') + "  flex-col lg:flex-row lg:items-center gap-10 h-full"}>
                <div className="text-center text-white lg:text-left ">
                    <div className="text-h5-sm lg:text-h6-lg mb-5 flex flex-col  lg:flex-row gap-2.5 items-center">
                        <svg className=" w-[33px] h-[33px] lg:h-[25px] lg:w-[25px]" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.998 0.5C6.09805 0.5 0.498047 6.1 0.498047 13C0.498047 19.9 6.09805 25.5 12.998 25.5C19.898 25.5 25.498 19.9 25.498 13C25.498 6.1 19.898 0.5 12.998 0.5ZM10.498 19.25L4.24805 13L6.01055 11.2375L10.498 15.7125L19.9855 6.225L21.748 8L10.498 19.25Z" fill="white" />
                        </svg>
                        Subscribed successfully
                    </div>
                    <div className="text-h6-sm font-normal lg:pl-9">
                        Thank you for subscribing to our newsletter!
                    </div>
                </div>
            </div>
        </div>
    </div>
}