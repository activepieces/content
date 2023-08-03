'use client'
import Image from 'next/image';
import { useEffect } from 'react';

let curtainindex = 0;
export const AnimatedCurtains = ({ intervalPeriod, id }: { intervalPeriod?: number, id: string }) => {
    const arrayOfCurtains = new Array(9).fill(0).map((_, i) => i + 1);
    useEffect(() => {
        const timer = setInterval(() => {
            curtainindex = (curtainindex + 1) % arrayOfCurtains.length;

            const curtain = document.getElementById('curtains' + id);
            if (!curtain) return;
            curtain.style.backgroundImage = `url('/curtains/curtains_${arrayOfCurtains[curtainindex]}.svg')`;
        }, 3000);
        return () => clearInterval(timer);
    });

    return <>
        <div id={'curtains' + id} className="bg-cover bg-[url('/curtains/curtains_1.svg')] h-[36px] w-full transition-none  ">
            {/* I did this so all images are loaded on component load */}
            {
                arrayOfCurtains.map((_, i) => <Image key={i} src={`/curtains/curtains_${_}.svg`} width={1440} height={36} alt="curtains" className='hidden'></Image>)
            }

        </div>


    </>
}