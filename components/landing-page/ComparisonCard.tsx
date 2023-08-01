
import Image from 'next/image'


export const ComparisonCard = ({ discussionPoints, icon, bgClass, tagline, appName }: { discussionPoints: string[], icon: string, appName: string, bgClass: string, tagline: string }) => {
    return <>
        <div className={bgClass + " p-[35px] grow lg:p-[55px]  border border-solid border-black rounded-md  "}>
            <div className="text-h1-sm lg:text-h1-sm mb-[40px] lg:mb-[50px]">
                {tagline}
            </div>
            <div className="flex flex-col gap-5">
                {
                    discussionPoints.map((point, index) => {
                        return <div className="gap-5 flex lg:text-h4-lg text-h4-sm items-center">
                            <div className="bg-white rounded-lg border border-solid border-outline flex items-center justify-center p-[12px]">
                                <Image alt={appName} src={icon} width={40} height={40} className="h-[26.67px] w-[26.67px] lg:h-[40px] lg:w-[40px]"></Image>

                            </div>
                            {point}
                        </div>
                    })
                }
            </div>
        </div>
    </>
}