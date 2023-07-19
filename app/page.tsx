import Image from 'next/image'
import ImageSlider from "../components/imageSlider";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Activepieces - Home',
  icons: "/favicon.ico",
}

export default function Home() {

  return (
    <>
      <main>
        <section className='bg-black text-white text-[50px] font-bold leading-[60px] lg:text-[80px] px-4 md:px-0'>
          <div className='container mx-auto  py-8 lg:py-16 flex gap-0 flex-wrap lg:flex-nowrap mb-[40px] lg:mb-[80px]'>

            <div className=' flex gap-[20px] lg:gap-[25px] items-center flex-wrap'>
              Automate your <div className='flex items-center gap-[20px] lg:gap-[25px]'>
                <Image alt='marketing' src="/marketing.svg" width={68} height={85} className='h-[45px] w-[35px] lg:h-[85px] lg:w-[68px] '></Image>  marketing
              </div>
              <div className='flex items-center gap-[20px] lg:gap-[25px]'>
                <Image alt='sales' src="/sales.svg" width={68} height={85} className='h-[45px] w-[35px] lg:h-[85px] lg:w-[68px]  '></Image> sales
              </div>
              <div className='flex items-center'>
                <div className='hidden lg:block'
                >and
                </div>
                <div className='lg:hidden'
                >&
                </div>
              </div>   <div className='flex gap-[20px] lg:gap-[25px] items-center'><Image alt='operations' src="/operations.svg" width={68} height={85} className='h-[45px] w-[35px] lg:h-[85px] lg:w-[68px] '></Image> opertaions </div>

              without code
            </div>

            <div className='flex flex-col justify-end grow mt-[40px] lg:grow-0 lg:mt-[0px]'>
              <Link href="https://cloud.activepieces.com/sign-up" target='_blank' rel='noopner' className='text-center  text-h4-sm lg:text-h4-lg text-black bg-white py-[15px] px-[35px] whitespace-nowrap'>
                Get Started
              </Link>
            </div>
          </div>
          <div className='text-center container mx-auto mb-[80px]'>
            <Image src="/builder-screenshot.png" alt="Builder Screenshot" width={1280} height={728} className='rounded-lg w-full'></Image>
          </div>
          <div className='flex justify-center items-center flex-col text-white gap-[50px]'>
            <div className='w-[162px] text-center lg:w-fit text-h4-sm lg:text-h4-lg  !font-normal'>
              Everyone else is signing up too
            </div>
            <ImageSlider />
            <div>

            </div>
          </div>

        </section>
      </main>

    </>

  )
}