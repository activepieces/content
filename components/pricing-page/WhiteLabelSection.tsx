import Image from 'next/image'
import Link from 'next/link'
export const WhiteLabelSection = () => {
    return <>
        <section className="bg-white pb-[150px] px-4 lg:px-0 ">
            <div className='mx-auto container'>
                <div className="flex flex-col gap-[25px] items-center justify-center">
                    <Image src="/acitvepieces-logo-black.svg" alt="Activepieces" width={88.8} height={80} className="w-[55px] lg:w-[88px]"></Image>
                    <div className='text-center text-[50px] lg:text-[80px] font-bold '>
                        White-label Activepieces
                    </div>

                    <div className='w-full relative border border-solid border-black flex flex-col rounded-[12px]'>
                        <div className='flex p-[15px] justify-between text-[22px] text-black border-b border-solid border-[#D2D2D2]'>
                            <div className='hidden lg:flex items-center gap-[9px]'>
                                <Image src="/chevron_black.svg" width={7} height={11} alt='chevron' className='w-[7px] rotate-180'></Image>
                                <div >
                                    Uncategorized
                                </div>
                                <div className='text-[22px] text-[#C8C8C8]'>
                                    /
                                </div>
                                <div className='font-bold  text-opacity-90'>
                                    Flow Name
                                </div>
                                <Image src="/chevron_black.svg" width={7} height={11} alt='chevron' className='w-[7px] rotate-90 opacity-70'></Image>
                            </div>
                            <div className='lg:absolute w-full'>
                                <div className=' w-full '>
                                    <div className='text-[22px] h-[40px] items-center justify-start lg:justify-center items-center flex font-semibold gap-[10px]'>
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.43194 18.6604C5.09177 18.7835 4.73706 18.8603 4.37703 18.889C3.97458 18.9183 3.57101 18.8506 3.19922 18.6916C2.82022 18.5216 2.49243 18.2527 2.24929 17.9122L2.08798 17.6706L1.9574 17.4108C1.86628 17.2205 1.80082 17.0187 1.7628 16.8107C1.66872 16.0917 1.75684 15.3603 2.01885 14.6856C2.23685 14.0775 2.50316 13.4885 2.81515 12.9242C3.42443 11.8133 4.1685 10.7843 5.02995 9.86118C5.88312 8.92949 6.84431 8.10602 7.89254 7.40872C8.66575 6.88931 9.49686 6.46462 10.3685 6.14352C11.2698 5.81165 12.2274 5.66591 13.185 5.71486C14.0474 5.76763 14.8904 5.99649 15.6635 6.38773C16.0682 6.58461 16.4426 6.84015 16.7748 7.14633C17.1259 7.47603 17.402 7.87941 17.5839 8.32839C17.759 8.76631 17.8461 9.23534 17.8399 9.7079C17.8326 10.1467 17.7724 10.5829 17.6607 11.0069C17.4428 11.8198 17.1163 12.5986 16.6903 13.3216C16.2839 14.0237 15.816 14.6871 15.2923 15.3039C14.7724 15.911 14.2148 16.4837 13.6228 17.0185C12.444 18.0978 11.1035 18.98 9.65157 19.632C9.32468 19.777 8.99051 19.9045 8.65043 20.0139C8.47888 20.0659 8.30477 20.1153 8.13834 20.1594C7.90824 20.2117 7.67242 20.2336 7.43678 20.2244C7.19578 20.2143 6.95875 20.1588 6.73777 20.0607C6.51712 19.9702 6.34676 19.7859 6.27177 19.5567C6.14887 19.0969 6.4382 18.6292 6.76338 18.2577C6.80178 18.2136 6.84787 18.159 6.88116 18.1252L6.97589 18.0291C7.03991 17.9642 7.10392 17.8992 7.16793 17.8395C7.29595 17.7122 7.42397 17.5953 7.56224 17.4758C7.81829 17.2393 8.1025 17.0185 8.38159 16.8029C8.93827 16.3744 9.52061 15.9814 10.1253 15.626C10.9101 15.1519 11.7483 14.7751 12.6217 14.5037C13.082 14.3647 13.5577 14.2853 14.0376 14.2673C14.5566 14.2451 15.0738 14.3419 15.5509 14.5505C16.0395 14.783 16.45 15.1561 16.7312 15.6234L16.9207 15.9663C16.9794 16.093 17.0282 16.2242 17.0667 16.3586C17.1385 16.6124 17.179 16.8742 17.187 17.138C17.2036 17.6284 17.1405 18.1182 17.0001 18.5877C16.8714 19.0479 16.6855 19.4896 16.447 19.9022C16.1295 20.4218 15.8684 20.5543 15.8223 20.4816C15.7762 20.4088 15.8658 20.1205 15.9503 19.6632C16.0658 19.0645 16.0942 18.4518 16.0348 17.8447C16.0123 17.4983 15.9407 17.1571 15.8223 16.8315C15.6879 16.5458 15.496 16.2918 15.259 16.0859C15.0352 15.9082 14.7711 15.7903 14.4908 15.7429C14.151 15.6909 13.8051 15.6953 13.4667 15.7559C12.6774 15.9066 11.9146 16.1754 11.2032 16.5535C10.4543 16.9394 9.73833 17.3878 9.06267 17.894C8.71957 18.1538 8.38671 18.4136 8.07945 18.6864C8.00264 18.7565 7.92326 18.8267 7.85413 18.8968L7.71587 19.0319C7.6877 19.0579 7.69538 19.0475 7.68514 19.0605C7.6749 19.0735 7.68514 19.0995 7.71587 19.1021H7.7594L7.86693 19.0787L8.01032 19.0423C8.20235 18.9904 8.39695 18.928 8.58898 18.8579C9.37643 18.5564 10.1307 18.1725 10.8396 17.7122C12.2807 16.7606 13.5692 15.59 14.6598 14.2413C15.311 13.4367 15.8424 12.5395 16.2371 11.5784C16.6135 10.638 16.7927 9.5884 16.447 8.80122C16.2691 8.39864 15.9755 8.05998 15.6046 7.82959C15.4039 7.69946 15.1942 7.58399 14.9773 7.48406C14.8621 7.4399 14.7494 7.38794 14.6342 7.34377L14.2834 7.23206C13.3178 6.97908 12.3046 6.97908 11.3389 7.23206C10.2286 7.51539 9.17574 7.9937 8.22796 8.64534C7.25884 9.3037 6.36938 10.0754 5.57789 10.9445C4.77608 11.8089 4.08761 12.7746 3.52952 13.8178C3.26061 14.3306 3.04522 14.8704 2.88684 15.4286C2.7409 15.9715 2.70249 16.5249 2.90221 16.9276C3.02523 17.2031 3.21999 17.4393 3.46551 17.6108C3.58528 17.6841 3.71579 17.7376 3.85214 17.7693C3.99859 17.8 4.14856 17.8096 4.29766 17.7979C4.97443 17.7067 5.62119 17.4577 6.18727 17.0705C7.40349 16.3145 8.49169 15.2831 9.52867 14.2413C11.1195 12.6734 12.4973 10.8972 13.6254 8.95969C14.1711 8.00349 14.5936 6.98021 14.8826 5.91491L14.9773 5.52781L15.0465 5.12773C15.0975 4.87082 15.1283 4.61021 15.1386 4.34835C15.1728 3.87014 15.0629 3.3927 14.8237 2.97923C14.6298 2.69267 14.3549 2.47254 14.0351 2.34793C13.6809 2.21645 13.3084 2.14279 12.9315 2.1297C12.1277 2.10401 11.3245 2.19855 10.5477 2.41028C9.75252 2.61539 8.975 2.88559 8.22284 3.21824C7.47637 3.56358 6.75805 3.96839 6.07461 4.42888C5.46779 4.83676 4.90192 5.2862 4.32582 5.75903C3.79069 6.19808 3.35541 6.57738 2.98926 6.89693C2.62312 7.21648 2.31586 7.46328 2.05726 7.66332C1.70522 7.9683 1.29829 8.20121 0.858962 8.34918C0.715109 8.4042 0.566928 8.44679 0.416003 8.47648C0.23165 8.47648 0.303343 8.24526 0.590114 7.79841C1.04207 7.12999 1.55007 6.50242 2.10847 5.9227C3.21776 4.73443 4.45152 3.67252 5.78784 2.75581C6.1335 2.52459 6.48941 2.30376 6.85811 2.09853C7.23071 1.88678 7.61451 1.69597 8.00776 1.52698C8.79715 1.19297 9.61471 0.932114 10.4504 0.747597C11.3329 0.540703 12.2399 0.462843 13.144 0.51638C13.6598 0.554012 14.1655 0.680523 14.6393 0.890484C15.1887 1.13161 15.6606 1.52399 16.0015 2.02319C16.3238 2.51181 16.5169 3.07632 16.5622 3.66249C16.6044 4.1623 16.5803 4.6656 16.4906 5.1589C16.3404 6.04578 16.0904 6.91224 15.7455 7.74126C15.2393 8.93328 14.6065 10.0657 13.8584 11.1186C13.1269 12.1485 12.3252 13.1251 11.4593 14.0413C10.6028 14.951 9.6985 15.813 8.75029 16.6236C8.26169 17.0401 7.74866 17.4262 7.21402 17.7797C6.66192 18.1552 6.06696 18.4614 5.44218 18.6916L5.43194 18.6604Z" fill="#0BA970" />
                                        </svg>
                                        Your Logo
                                    </div>
                                </div>

                            </div>

                            <div className='flex items-center gap-[14px]'>
                                <div className='text-white text-[14px] bg-[#0BA970] rounded-[4px] px-[14px] py-2'>
                                    Publish
                                </div>
                                <div className='rounded-full text-white bg-[#515151] h-[37px] w-[37px] flex items-center justify-center text-sm'>
                                    Y
                                </div>
                            </div>
                        </div>
                        <div className='px-4 py-[80px] md:py-[100px] md:px-[150px]'>
                            <div className='flex items-center flex-col gap-[40px] md:gap-[60px]'>
                                <div className='text-lg md:text-[26px] font-bold max-w-[499px] text-center leading-[21.6px] md:leading-[31.2px]  tracking-wid'>
                                    Offer an outstanding automation builder to your users in your app
                                </div>
                                <div className='border border-solid p-[45px] lg:px-[90px] lg:py-[60px] bg-[#41E2A7] bg-opacity-10 border-[#41E2A7] rounded-[6px] flex gap-[20px] flex-wrap lg:gap-[80px]'>
                                    <div className='flex flex-col  gap-[20px] lg:gap-[48px]'>
                                        <div className='flex gap-4 text-[18px] md:text-[22px]' >
                                            <Image src={"/green_feature.svg"} className='w-[18.33px]' alt='green check' width={18.33} height={18.33}></Image>
                                            Match it with your branding
                                        </div>
                                        <div className='flex gap-4 text-[18px] md:text-[22px]' >
                                            <Image src={"/green_feature.svg"} className='w-[18.33px]' alt='green check' width={18.33} height={18.33}></Image>
                                            Select available pieces
                                        </div>
                                    </div>
                                    <div className='flex flex-col  gap-[20px] lg:gap-[48px]'>
                                        <div className='flex gap-4 text-[18px] md:text-[22px]' >
                                            <Image src={"/green_feature.svg"} className='w-[18.33px]' alt='green check' width={18.33} height={18.33}></Image>
                                            Authenticate your users
                                        </div>
                                        <div className='flex gap-4 text-[18px] md:text-[22px]' >
                                            <Image src={"/green_feature.svg"} className='w-[18.33px]' alt='green check' width={18.33} height={18.33}></Image>
                                            Customize templates
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[30px] justify-center lg:justify-start items-center flex-wrap justify-between'>
                                    <ul className="list-inside list-disc text-neutral-900 text-lg font-bold leading-snug tracking-wide">
                                        <li>
                                            Pricing starts at $50k per year
                                        </li>
                                        <li>
                                            Special pricing for eligible startups
                                        </li>
                                    </ul>
                                    <div className='w-[280px] hidden lg:block'>

                                    </div>
                                    <div className='flex justify-center w-full lg:w-auto lg:justify-start'>
                                        <Link href={""} target='_blank' rel='noreferer noopener'>
                                            <div className="w-[180px] h-14 px-[35px] py-5 bg-neutral-900 whitespace-nowrap rounded-[3px] justify-start items-center gap-5 inline-flex">
                                                <div className="text-white text-[22px] font-bold leading-relaxed tracking-wide">Contact us</div>
                                            </div>
                                        </Link>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    </>
}