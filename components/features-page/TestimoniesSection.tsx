'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
const testimonies = [
    {
        name: '- Jan Bebendorf, Head of Cloud-Branch',
        testimony: `“We love the amount of freedom Activepieces brings while still keeping it user-friendly and being able to contribute our custom needs”`,
        image: '/testimonies/Jan-bebendorf.jpg'
    },
    {
        name: '- Osama Zakarneh, System Administrator',
        testimony: `“Coming from Zapier, Activepieces provided a freedom-first smart way to build complex flows in minutes!”`,
        image: '/contributors/ozak93.jpg'
    },
    {
        name: '- Abed Mously, CEO',
        testimony: `“Activepieces let us push all customer activities to our Slack and stay on top of our customer success.”`,
        image: '/testimonies/Abed-Mously.jpg'
    }
]
let currentTestimony = testimonies[0];
let interval: NodeJS.Timer;
const carrouselAnimation = (cd: Function) => {

    clearInterval(interval);
    interval = setInterval((() => {
        console.log('carrouselAnimation');
        let nextIndex = testimonies.indexOf(currentTestimony) + 1;
        if (nextIndex > 2) {
            nextIndex = 0;
        }
        currentTestimony = testimonies[nextIndex];
        cd(nextIndex);
    }), 7000)
}

export const TestimoniesSection = () => {
    const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);
    useEffect(() => { carrouselAnimation(setCurrentTestimonyIndex) }, [])
    return <div className="flex flex-col gap-10 lg:max-w-[636px] h-[353px]">
        <div className="flex items-center justify-center gap-4" >
            {
                testimonies.map((testimony, idx) => (
                    <div onClick={() => {
                        currentTestimony = testimony;
                        setCurrentTestimonyIndex(idx);
                        carrouselAnimation(setCurrentTestimonyIndex);
                    }} key={idx} className={`p-[0.15rem] cursor-pointer rounded-full border-[3px] border-solid  relative ${testimony.name === currentTestimony.name ? 'border-[#0CCF99]' : 'border-[#CFCFCF]'}`}>
                        <Image width={72} height={72} alt={testimony.name} src={testimony.image} className="rounded-full"></Image>
                        <div className={`rounded-lg border-[3px] border-solid w-[20px] absolute -bottom-[15px] left-[28px]   ${testimony.name === currentTestimony.name ? 'border-[#0CCF99]' : 'border-[#000000]'} transition-colors`}></div>
                    </div>
                ))
            }

        </div>
        <div className='text-center text-white text-h3-sm   lg:text-h3-lg !font-normal px-2 lg:p-0'>
            {currentTestimony.testimony}
        </div>
        <div className='text-center text-white text-h5-sm lg:text-h6-lg font-normal'>
            {currentTestimony.name}
        </div>
    </div>
}