import Contributor from "./GitHubContributor";
import OpenSourceStat, { OpenSourceStatProps } from "./OpenSourceStat";

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
const OpenSourceSection = () => <>
    <section className='bg-white text-black px-4 lg:px-0'>
        <div className='justify-center gap-[50px] lg:gap-[0px] lg:pl-5 py-[80px] lg:py-[100px] flex flex-wrap lg:flex-nowrap'>
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
                    <Contributor githubAccount='Thibaut Patel' githubUrl='https://github.com/tpatel' imageUrl='/contributors/Thibaut-Patel.png' tagColor='#D16FFF' imageClasses='w-[138px] h-[138px] lg:h-[230px] lg:w-[230px]' key={1}></Contributor>
                    <Contributor githubAccount='m-tabaza' githubUrl='https://github.com/m-tabaza' imageUrl='/contributors/Tabaza.png' imageClasses='w-[116px] h-[116px] lg:h-[193px] lg:w-[193px]' tagColor='#FF9F0F' key={3}></Contributor>

                </div>

                <div className='flex flex-col gap-[30px] lg:gap-[60px] '>
                    <Contributor githubAccount='Jona Boeddinghaus' githubUrl='https://github.com/jonaboe' imageClasses='w-[116px] h-[116px] lg:h-[193px] lg:w-[193px]' imageUrl='/contributors/Jona-Boeddinghaus.png' tagColor='#6FA8FF' key={2}></Contributor>
                    <Contributor githubAccount='aboudzein' githubUrl='https://github.com/aboudzein' imageUrl='/contributors/aboudzein.png' tagColor='#0ACA90' imageClasses='w-[138px] h-[138px] lg:h-[230px] lg:w-[230px]' key={4}></Contributor>
                </div>



            </div>

        </div>

    </section></>

export default OpenSourceSection;