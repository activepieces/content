'use client';
import Lottie from 'lottie-react'
import animatedEye from './animated_eye.json'
import Image from 'next/image'


export const VisibilitySection = () => {
    return <>
        <section className='bg-white'>
            {/* <div className='flex  px-4 container mx-auto lg:px-0'>
                <div className='border-t border-solid border-black w-full'></div>
            </div> */}
            <div className='container mx-auto   lg:py-[150px] py-[100px] px-4 lg:px-0'>
                <h1 className='text-black text-center text-h4-lg leading-[36px] lg:text-h2-lg'>
                    <div className='flex justify-center '>Get &nbsp;<span className='text-[#0CCF99]'>visibility</span>   <div className='relative  w-[55px] lg:w-[82px]'>
                        <Lottie animationData={animatedEye} loop={true} className='absolute w-[140.43px] h-[128.15px] lg:w-[230.32px] lg:h-[200.5px] -top-[43.5px] lg:-top-[67px] -left-[33px] lg:-left-[56px] ' height={80.5} width={109} />
                    </div></div>
                    <div className='flex justify-center  '>
                        <div className='w-[358px] lg:w-[auto] '>
                            into your automation runs
                        </div>

                    </div>
                </h1>
                <div className='text-h5-sm mt-5 lg:mt-10 font-normal text-center lg:text-h6-lg flex items-center justify-center ' >
                    <div className='max-w-[714px]'>
                        Track your automation runs step by step. Catch issues and fix them quickly with our super simple logging.
                    </div>

                </div>
                <div className='flex items-center justify-center mt-10 lg:mt-20'>
                    <video autoPlay muted loop width={1280} height={728} className='rounded-lg w-full border border-solid border-black'>
                        <source src="/runs_video.webm" />
                        <source src="/compressed_runs_video.mp4" />
                    </video>

                </div>
            </div>
        </section>
    </>
}
