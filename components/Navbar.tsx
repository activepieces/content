'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import GithubWidget from "./GithubWidget";

const Navbar = () => {
  const routesList= useRef<null | HTMLDivElement>(null);
  const buttonSvg= useRef<null | SVGSVGElement>(null);
  const showNavbarOnMobile = ()=>{
  routesList.current?.classList.toggle('top-[70px]');
  buttonSvg.current?.classList.toggle('!stroke-green');
};
  return (
    <nav  className="bg-black sticky z-50 top-0 shadow-navbar h-[75px] lg:h-[initial]  ">
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2 z-20">
        <div className="absolute top-0 left-0 bg-black lg:static w-full lg:w-[initial] flex gap-4 items-center p-4 lg:p-0 z-50">
        <Link href="/">
          <Image
            src="https://cdn.activepieces.com/brand/full-logo-white.svg"
            alt="Activepieces Logo"
            width={215}
            height={35}
            className="w-[152px] h-[25px] lg:w-[215px] lg:h-[35px]"
          />
        </Link>
    <button data-collapse-toggle="navbar-default" type="button" onClick={showNavbarOnMobile} className="lg:hidden order-3 inline-flex items-center p-2 w-10 justify-center
     h-10  text-sm text-gray-500 rounded-lg" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg ref={buttonSvg} className="w-5 h-5 stroke-grey " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
         </button>
        <div className="grow order-2 lg:hidden"></div>
        <div className="order-1 ">
        <GithubWidget></GithubWidget>
        </div>
       
          
       
        </div>
     

    <div ref={routesList} className=" shadow-navbar lg:shadow-none duration-[400ms]  z-10 w-full absolute -top-[225px] transition-all  left-0 bg-black lg:static lg:block lg:w-auto" id="navbar-default">
      <ul className="text-base flex flex-col gap-6 pl-6 lg:pl-0 lg:gap-0 p-4 lg:p-0 lg:flex-row lg:space-x-8 lg:mt-0">
        <li className="flex order-4 lg:order-none   justify-start lg:justify-center items-center">
       
        <Link href="/pieces" className="block gap-2 order-3 lg:order-none  text-white hover:text-green flex  justify-start lg:justify-center items-center transition-colors">
          <Image
          alt="Pieces" 
          src="/pieces.png"
          className="w-[20px] h-[20px] hidden lg:block"
          height={20}
          width={20}>
          </Image>
            Pieces</Link>
        </li>
        <li className="flex order-5 lg:order-none   justify-start lg:justify-center items-center">
       
        <Link href="/pricing" className="block gap-2 text-white hover:text-green flex  justify-start lg:justify-center items-center transition-colors">
          <Image
          alt="Pricing" 
          src="/pricing.png"
          className="w-[20px] h-[20px] hidden lg:block"
          height={20}
          width={20}>

          </Image>
            Pricing</Link>
        </li>
        <li className="flex items-center order-6 lg:order-none ">
        
        <Link href="https://www.activepieces.com/docs/getting-started/introduction" className="block gap-2 text-white hover:text-green flex  justify-start lg:justify-center items-center transition-colors">
          <Image
          alt="Docs" 
          src="/docs.png"
          className="w-[20px] h-[20px] hidden lg:block"
          height={20}
          width={20}>
          </Image>
          Docs</Link>
        </li>
        <li className="flex items-center order-7 lg:order-none ">
       
          <Link href="https://discord.com/invite/2jUXBKDdP8" className="block gap-2 text-white hover:text-green flex  justify-start lg:justify-center items-center transition-colors">
          <Image
          alt="Discord" 
          src="/contact.png"
          className="w-[20px] h-[20px] hidden lg:block"
          height={20}
          width={20}>
          </Image>
          Discord</Link>
        </li>
        <li className="flex items-center order-2 lg:order-none">
       
       <Link href="https://cloud.activepieces.com/sign-in" className="block gap-2 text-white  flex bg-[black] lg:hover:bg-[#433d51] justify-start lg:justify-center items-center transition-colors lg:px-3 lg:py-3 rounded-lg  ">
       Login</Link>
     </li>
        <li className="flex items-center lg:!ml-2  order-1 lg:order-none">
       
          <Link href="https://cloud.activepieces.com/sign-up" className="block gap-2 text-white  flex bg-[black] lg:hover:bg-[#433d51] justify-start lg:justify-center items-center transition-colors lg:px-6 lg:py-3 rounded-lg lg:border lg:border-white ">
            <span className="hidden lg:block">
            Start free
            </span>
            <span className="block lg:hidden">
            Get started
            </span>
         </Link>
        </li>
 
      </ul>
    </div>
  </div>
    </nav>
  );
};

export default Navbar;
