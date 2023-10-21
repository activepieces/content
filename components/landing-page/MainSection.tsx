import Link from 'next/link';
import Image from 'next/image'
import ImageSlider from "./imageSlider";
const MainSection = () =>
    <>
        <main>
            <section className='bg-black text-white text-[50px] font-bold leading-[60px] lg:text-[80px] px-4 lg:px-0 pb-[100px] lg:pb-[120px]'>
                <div className='container justify-between mx-auto py-[40px] lg:py-[80px] flex gap-0 flex-wrap lg:flex-nowrap'>

                    <h1 className='lg:items-start flex max-w-[962.37px] gap-[5px] lg:gap-[25px] items-center flex-wrap'>
                        <div className='basis-full md:basis-1'>Automate</div> <div>your</div>  <div className=' relative'>
                            <div className='z-20 relative'>marketing,</div>
                            <div className='absolute -rotate-[0.35deg] -bottom-[11px] z-10'>
                                <svg className='w-[229px] lg:w-[auto]' width="361" height="9" viewBox="0 0 361 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M342.792 0.227851C345.292 0.0656972 348.25 0.0454636 350.768 0.173293C353.675 0.334766 356.302 0.552245 358.543 0.81683C360.353 1.01585 361.901 1.72942 360.347 1.88371C357.436 2.18559 354.326 2.46075 351.05 2.70643C349.02 2.86744 317.86 3.94217 307.43 4.32506C297.297 4.68066 287.006 4.95978 276.623 5.16057C255.497 5.58733 234.709 6.05839 213.717 6.47135C209.022 6.54632 204.304 6.58233 199.6 6.57909C183.493 6.61881 167.375 6.83256 151.457 7.21754C148.745 7.24645 146.089 7.34358 143.68 7.50202C139.62 7.82404 96.0636 8.56358 90.224 8.54635C76.028 8.46187 61.8516 8.48345 47.6158 8.41887C45.5614 8.41366 43.461 8.50278 41.6954 8.34403C37.8263 8.07048 33.1847 7.96421 28.5544 8.04316C22.4582 8.04769 16.3934 7.99702 10.416 7.89162C7.23888 7.78605 4.22677 7.62962 1.46508 7.42678C-1.18428 7.25596 0.43937 6.61215 1.2713 6.561C3.96258 6.34531 1.81711 6.06476 1.47565 5.82568C1.37282 5.73695 1.37401 5.64641 1.4792 5.55645C6.99114 5.19847 12.7285 4.89242 18.632 4.64146C25.1326 4.29471 31.8334 4.00597 38.6725 3.77793C38.6725 3.77793 42.1587 3.72576 47.0552 3.64477L64.9655 3.33998C78.2082 3.1085 92.0721 2.84223 94.8746 2.77591C97.8852 2.72751 100.918 2.73364 103.863 2.79407C105.241 2.80809 145.047 1.97646 146.665 1.9685C154.957 1.79107 163.372 1.76519 171.596 1.89183C173.259 1.92478 174.982 1.91593 176.65 1.86588C190.845 1.62095 205.177 1.55702 219.476 1.43853C226.787 1.37849 234.049 1.21801 241.316 1.1177C242.665 1.11343 244.012 1.11777 245.349 1.13069C247.001 1.14635 248.668 1.1462 250.334 1.13025C267.55 0.825596 284.881 0.730493 301.917 0.30197C305.835 0.202808 325.03 0.235332 329.475 0.0952769C331.888 0.0188391 340.754 0.365916 342.792 0.227851Z" fill="#FFCC4D" />
                                </svg>

                            </div>
                        </div>
                        <div className='relative'>
                            <div className='z-20 relative'> sales
                            </div>
                            <div className='absolute -rotate-[1deg] -bottom-[14px] z-10'>
                                <svg className='w-[120px] lg:w-[auto]' width="171" height="11" viewBox="0 0 171 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M104.912 7.92927C96.1846 8.0702 87.4453 8.20415 78.7367 8.38497C75.5548 8.45669 72.4076 8.67995 69.1405 8.76158L52.2983 9.0269C46.6889 9.07414 41.0674 9.11439 35.4615 9.20749C30.4798 9.29101 25.5514 9.56595 20.5829 9.77409C17.4078 9.93752 14.2606 10.1608 11.0913 10.2983C7.89884 10.3612 4.70733 10.3195 1.53987 10.1736C-0.440496 10.0676 -0.330491 9.34004 1.18181 8.40303C3.26845 7.14859 6.09349 6.21014 9.28587 5.71093C22.1996 4.70541 35.2297 4.16757 48.2609 4.10218C56.0454 4.15502 64.218 3.59508 72.1951 3.34801C80.9884 3.09847 89.7973 2.90177 98.5817 2.6911L114.829 2.30579C123.016 2.04689 131.282 2.05219 139.456 1.72749C145.774 1.54315 151.967 0.994898 158.318 0.785658C159.697 0.738696 161.082 0.665824 162.48 0.658746C167.534 0.806519 169.398 1.24132 170.276 2.12304C170.532 2.3068 170.747 2.50299 170.917 2.70856C171.284 3.34275 169.166 3.90458 165.57 4.39867C154.625 5.90776 142.932 6.50731 131.182 7.17659C122.461 7.71625 113.657 7.82822 104.861 8.09072L104.912 7.92927Z" fill="#FFB2E0" />
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div
                            >and
                            </div>

                        </div>
                        <div className='relative'><div className='z-20 relative'> operations</div>
                            <div className='absolute z-10 -rotate-[2.35deg] -bottom-[17px] z-10'>
                                <svg className='w-[238px] lg:w-[auto]' width="388" height="16" viewBox="0 0 388 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M368.512 3.88025C371.205 3.91675 374.382 3.78852 377.08 3.53448C380.193 3.22733 383.005 2.87824 385.398 2.5015C387.332 2.21188 388.961 1.42144 387.284 1.34531C384.144 1.18988 380.792 1.07105 377.263 0.990033C375.075 0.931087 341.564 1.42119 330.346 1.56211C319.449 1.71539 308.384 1.95302 297.226 2.27345C274.521 2.9073 252.177 3.47991 229.616 4.1208C224.571 4.2815 219.503 4.48228 214.452 4.72158C197.155 5.49016 179.837 6.08546 162.727 6.49966C159.812 6.6069 156.957 6.64313 154.362 6.60575C149.987 6.48786 103.181 7.9348 96.9115 8.24506C81.672 9.0418 66.4484 9.73161 51.1653 10.5105C48.9595 10.6188 46.6999 10.6351 44.8115 10.8823C40.67 11.3497 35.6909 11.6888 30.7152 11.8423C24.1689 12.1437 17.659 12.4986 11.2455 12.9038C7.83896 13.1687 4.61202 13.4761 1.6562 13.8173C-1.18054 14.1209 0.593545 14.6825 1.4893 14.6918C4.38943 14.7722 2.09898 15.1601 1.7437 15.4161C1.6375 15.5099 1.64309 15.6002 1.76031 15.6848C7.69602 15.7658 13.8713 15.7836 20.2224 15.738C27.2191 15.7582 34.4281 15.7104 41.7828 15.595C41.7828 15.595 45.5287 15.4721 50.7904 15.3073L70.0368 14.713C84.2677 14.2797 99.1674 13.85 102.18 13.7756C105.415 13.6729 108.672 13.5146 111.831 13.3064C113.31 13.2233 156.093 12.0565 157.831 11.9832C166.743 11.7444 175.78 11.348 184.605 10.8088C186.388 10.6924 188.239 10.6148 190.033 10.5811C205.287 10.1134 220.68 9.45812 236.039 8.85896C243.893 8.55206 251.699 8.34792 259.506 8.08347C260.955 8.02003 262.401 7.94814 263.836 7.86814C265.609 7.76961 267.399 7.68609 269.189 7.61843C287.689 7.05885 306.304 6.28415 324.618 5.85732C328.83 5.75975 349.439 4.76406 354.219 4.68092C356.814 4.63617 366.317 3.8446 368.512 3.88025Z" fill="#07FFB4" />
                                </svg>

                            </div>
                        </div>

                    </h1>

                    <div className='flex flex-col justify-end grow mt-[40px] lg:grow-0 lg:mt-[0px]'>
                        <Link href="https://cloud.activepieces.com/sign-up" target='_blank' rel='noopner' className='rounded-sm text-center hover:-translate-y-[6px] transition-transform text-h4-sm lg:text-h4-lg text-white bg-primary py-[15px] px-[35px] whitespace-nowrap'>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className='text-center container mx-auto mb-[80px]'>
                    <video playsInline autoPlay muted loop width={1280} height={728} className='rounded-lg w-full'>
                        <source src="/main_video.webm" />
                        <source src="/compressed_main_video.mp4" />
                    </video>
                </div>
                <div className='flex justify-center items-center flex-col text-white'>
                    <div className='w-[162px] text-center lg:w-fit text-h4-sm lg:text-h4-lg mb-[50px] !font-normal'>
                        Everyone else is hopping on
                    </div>
                    <ImageSlider />

                </div>

            </section>
        </main>
    </>

export default MainSection;