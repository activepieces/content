import Link from 'next/link';
import Image from 'next/image'
import ImageSlider from "./imageSlider";
const MainSection = () =>
    <>
        <main>
            <section className='bg-black text-white text-[50px] font-bold leading-[60px] lg:text-[80px] px-4 lg:px-0 pb-[100px] lg:pb-[150px]'>
                <div className='container justify-between mx-auto py-[40px] lg:py-[80px] flex gap-0 flex-wrap lg:flex-nowrap mb-[40px] lg:mb-[80px]'>

                    <h1 className='lg:items-start flex max-w-[962.37px] gap-[20px] lg:gap-[25px] items-center flex-wrap'>
                        Automate your <div className='text-black bg-[#FFCC4D]  rotate-[2.25deg] text-black p-[5.5px]'>
                            marketing
                        </div>
                        <div className='-rotate-[4.52deg] bg-[#FFB2E0] text-black p-[5.5px]'>
                            sales
                        </div>
                        <div className='flex items-center'>
                            <div className='hidden lg:block'
                            >and
                            </div>
                            <div className='lg:hidden'
                            >&
                            </div>
                        </div>
                        <div className='bg-[#06FFB4] text-black -rotate-[1.83deg] text-black p-[5.5px]'>operations </div>

                        without code
                    </h1>

                    <div className='flex flex-col justify-end grow mt-[40px] lg:grow-0 lg:mt-[0px]'>
                        <Link href="https://cloud.activepieces.com/sign-up" target='_blank' rel='noopner' className='text-center  text-h4-sm lg:text-h4-lg text-black bg-white py-[15px] px-[35px] whitespace-nowrap'>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className='text-center container mx-auto mb-[80px]'>
                    <Image src="/builder-screenshot.png" alt="Builder Screenshot" width={1280} height={728} className='rounded-lg w-full'></Image>
                </div>
                <div className='flex justify-center items-center flex-col text-white '>
                    <div className='w-[162px] text-center lg:w-fit text-h4-sm lg:text-h4-lg  mb-[50px] !font-normal'>
                        Everyone else is signing up too
                    </div>
                    <ImageSlider />

                </div>

            </section>
        </main>
    </>

export default MainSection;