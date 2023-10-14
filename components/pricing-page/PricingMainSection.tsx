import PricingCard from "../../components/PricingCard";
import Link from "next/link";
import ImageSlider from "../../components/landing-page/imageSlider";
import { AnimatedCurtains } from "../animated-curtains/AnimatedCurtains";
import Image from "next/image";
const businessPlans = [{ "tasks": 5000, "price": "115" }, { "tasks": 10000, "price": "125" }, { "tasks": 25000, "price": "155" }, { "tasks": 50000, "price": "200" }, { "tasks": 100000, "price": "275" }, { "tasks": 200000, "price": "400" }, { "tasks": 500000, "price": "600" }]
const proPlans = [{ "tasks": 5000, "price": "15" }, { "tasks": 10000, "price": "25" }, { "tasks": 25000, "price": "55" }, { "tasks": 50000, "price": "100" }, { "tasks": 100000, "price": "175" }, { "tasks": 200000, "price": "300" }, { "tasks": 500000, "price": "500" }];
const hobbyistFeats = ["Unlimited users", "Instant triggers", "15 mins update time", "3 connected accounts", "Community support"]
const proFeats = ["1 user", "Instant triggers", "5 mins update time", "10 connected accounts", "Community support"]
const businessFeats = ["5 users", "Instant triggers", "1 min update time", "∞ connected accounts", "Email support"]
const enterpriseFeatsFirstCol = ["Users and permissions", "Single sign on", "Audit log"]
const enterpriseFeatsSecondCol = ["On premise", "Custom log retention", "Dedicated support"]

export const PricingMainSection = () => {
    return (
        <>
            <main>
                <section className="container mx-auto py-20 px-4 md:px-0">
                    <h1 className="text-white text-white text-[50px] text-center md:font-bold leading-[60px] lg:text-[80px] mb-[40px]">
                        Kiss manual work good bye
                    </h1>
                    <h2 className="text-center text-[16px] lg:text-[22px] text-white mb-[80px]">
                        Enjoy our pricing model where tasks get cheaper as you grow!
                    </h2>
                    <div className="flex flex-wrap lg:flex-nowrap gap-[30px] justify-center lg:justify-between">
                        <PricingCard bgClass="bg-[#98F5F5]" categoryName="Hobbyist" features={hobbyistFeats} free={true} plans={[{ price: '0', tasks: 100 }]}></PricingCard>
                        <PricingCard bgClass="bg-[#A0FFAA]" categoryName="Pro" features={proFeats} free={false} plans={proPlans}></PricingCard>
                        <PricingCard bgClass="bg-[#FFF0BB]" categoryName="Business" features={businessFeats} free={false} plans={businessPlans}></PricingCard>
                    </div>
                </section>
            </main>
            <section className="container mx-auto bg-black px-[30px] lg:px-0">
                <div className="border border-solid border-white rounded overflow-hidden">
                    <AnimatedCurtains id="pricing-animate-automation"></AnimatedCurtains>
                    <div className="flex flex-col gap-[80px] px-[50px] py-[80px]">
                        <div className="flex justify-between items-center flex-wrap gap-[35px] ">
                            <h2 className="text-white  text-h2-sm lg:text-h2-lg">
                                Looking for more? <br></br>
                                Check out our Enterprise offering
                            </h2>
                            <Link href={"mailto:sales@activepieces.com"} target="_blank" rel="noopener noreferer" className="bg-white text-black flex items-center justify-center  text-h4-sm lg:text-h4-lg w-full lg:w-[auto] px-[35px] py-[29px] h-[80px]">
                                Contact us
                            </Link>
                        </div>
                        <div className="flex gap-[25px] lg:gap-[80px] flex-wrap ">
                            <div className="flex flex-col  gap-[25px]">
                                {
                                    enterpriseFeatsFirstCol.map((feat, idx) => (
                                        <div className="flex items-center gap-[15px] text-white !leading-[37.5px]  !font-normal text-h4-sm lg:text-h4-lg font-normal " key={idx}>
                                            <Image src="/enterprise_feat.svg" alt="feat" width={22} height={22} ></Image>
                                            {feat}
                                        </div>
                                    ))

                                }
                            </div>
                            <div className="flex flex-col  gap-[25px]">
                                {
                                    enterpriseFeatsSecondCol.map((feat, idx) => (
                                        <div className="flex items-center gap-[15px] text-white  !leading-[37.5px] !font-normal text-h4-sm lg:text-h4-lg font-normal " key={idx}>
                                            <Image src="/enterprise_feat.svg" alt="feat" width={22} height={22} ></Image>
                                            {feat}
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex justify-center items-center flex-col text-white mt-[150px] mb-20'>
                    <div className='w-[162px] text-center lg:w-fit text-h4-sm lg:text-h4-lg  mb-[50px] !font-normal'>
                        Everyone else is hopping on
                    </div>
                    <ImageSlider />

                </div>
            </section>
        </>
    )
}
