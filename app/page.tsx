import Image from 'next/image'
import ImageSlider from "../components/imageSlider";
import { Metadata } from 'next';
import Link from 'next/link';
import OpenSourceStat, { OpenSourceStatProps } from '../components/OpenSourceStat';
import Contributor from '../components/GitHubContributor';

export const metadata: Metadata = {
  title: 'Activepieces - Home',
  icons: "/favicon.ico",
}
export const openSourceStas: OpenSourceStatProps[] = [

  {
    ctaText: "Go to our GitHub",
    logoAlt: "GitHub",
    logoUrl: "/github.svg",
    statText: "2.8k+ stars",
    ctaUrl: "https://github.com/activepieces/activepieces"
  },
  {
    ctaText: "Join our Discord",
    logoAlt: "Discord",
    logoUrl: "/discord.svg",
    statText: "700+ members",
    ctaUrl: "https://discord.gg/fA8hYBFkHd"
  },
  {
    ctaText: "Read our docs",
    logoAlt: "Contributors",
    logoUrl: "/contributors.svg",
    statText: "50+ contributors",
    ctaUrl: "https://www.activepieces.com/docs"
  },
]

export default function Home() {

  return (
    <>
      <main>
        <section className='bg-black text-white text-[50px] font-bold leading-[60px] lg:text-[80px] px-4 md:px-0 pb-[100px] lg:pb-[150px]'>
          <div className='container mx-auto  py-8 lg:py-16 flex gap-0 flex-wrap lg:flex-nowrap mb-[40px] lg:mb-[80px]'>

            <h1 className='lg:items-start flex gap-[20px] lg:gap-[25px] items-center flex-wrap'>
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

      <section className='bg-white text-black px-4 lg:px-0'>
        <div className='justify-center gap-[50px] lg:gap-[0px] lg:pl-5 py-[100px] flex flex-wrap lg:flex-nowrap'>
          <div>
            <h2 className='text-h1-sm lg:text-h1-lg mb-[100px] lg:w-[750px] '>
              Activepieces is open source with a rapidly growing community
            </h2>
            <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
              {
                openSourceStas.map((stat, i) => (
                  <>
                    <OpenSourceStat ctaUrl={stat.ctaUrl} ctaText={stat.ctaText} logoAlt={stat.logoAlt} logoUrl={stat.logoUrl} statText={stat.statText} key={stat.statText}></OpenSourceStat>
                    {
                      i !== openSourceStas.length - 1 ? <div className='border-b border-solid border-divider'></div> : null
                    }
                  </>))
              }
            </div>
          </div>
          <div className=" bg-[url('/map.png')] md:bg-center bg-contain lg:bg-cover relative bg-no-repeat  lg:h-[700px] w-[870px] basis-full lg:basis-[auto] flex justify-center gap-[50px] lg:gap-[100px] ">
            <div className='flex flex-col gap-[30px] lg:gap-[60px] mt-[30px] lg:mt-[60px]'>
              <Contributor githubAccount='Thibaut Patel' githubUrl='https://github.com/tpatel' imageUrl='/contributors/Thibaut-Patel.png' tagColor='#D16FFF' key={1}></Contributor>
              <Contributor githubAccount='m-tabaza' githubUrl='https://github.com/m-tabaza' imageUrl='/contributors/Tabaza.png' tagColor='#FF9F0F' key={3}></Contributor>

            </div>

            <div className='flex flex-col gap-[30px] lg:gap-[60px] mt-[0px] lg:mt-[30px]'>
              <Contributor githubAccount='Jona Boeddinghaus' githubUrl='https://github.com/jonaboe' imageUrl='/contributors/Jona-Boeddinghaus.png' tagColor='#6FA8FF' key={2}></Contributor>
              <Contributor githubAccount='aboudzein' githubUrl='https://github.com/aboudzein' imageUrl='/contributors/aboudzein.png' tagColor='#0ACA90' key={4}></Contributor>
            </div>



          </div>

        </div>

      </section>

    </>

  )
}