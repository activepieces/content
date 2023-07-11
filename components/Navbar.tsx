'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {
  const routesList= useRef<null | HTMLDivElement>(null);
  const buttonSvg= useRef<null | SVGSVGElement>(null);
  const showNavbarOnMobile = ()=>{
  routesList.current?.classList.toggle('top-[70px]');
  buttonSvg.current?.classList.toggle('!stroke-green');
};
  return (
    <nav  className="bg-black sticky z-50 top-0 shadow-navbar h-[75px] md:h-[initial]  ">
      
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-20">
        <div className="absolute top-0 left-0 bg-black md:static w-full md:w-[initial] flex justify-between items-center p-4 md:p-0 z-50">
        <Link href="/">
          <Image
            src="https://cdn.activepieces.com/brand/full-logo-white.svg"
            alt="Activepieces Logo"
            width={215}
            height={35}
            className="w-[152px] h-[25px] md:w-[215px] md:h-[35px]"
          />
        </Link>
    <button data-collapse-toggle="navbar-default" type="button" onClick={showNavbarOnMobile} className="md:hidden inline-flex items-center p-2 w-10 justify-center
     h-10  text-sm text-gray-500 rounded-lg" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg ref={buttonSvg} className="w-5 h-5 stroke-grey " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
         </button>
        </div>
     

    <div ref={routesList} className=" shadow-navbar md:shadow-none duration-[400ms]  z-10 w-full absolute -top-[225px] transition-all  left-0 bg-black md:static md:block md:w-auto" id="navbar-default">
      <ul className="text-base flex flex-col gap-6 pl-6 md:pl-0 md:gap-0 p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0">
        <li className="flex order-4 md:order-none   justify-start md:justify-center items-center">
       
        <Link href="#" className="block gap-2 order-3 md:order-none  text-white hover:text-green flex  justify-start md:justify-center items-center transition-colors">
          <Image
          alt="Pieces" 
          src="/pieces.png"
          className="w-[20px] h-[20px] hidden md:block"
          height={20}
          width={20}>
          </Image>
            Pieces</Link>
        </li>
        <li className="flex order-5 md:order-none   justify-start md:justify-center items-center">
       
        <Link href="#" className="block gap-2 text-white hover:text-green flex  justify-start md:justify-center items-center transition-colors">
          <Image
          alt="Pieces" 
          src="/pricing.png"
          className="w-[20px] h-[20px] hidden md:block"
          height={20}
          width={20}>

          </Image>
            Pricing</Link>
        </li>
        <li className="flex items-center order-6 md:order-none ">
        
        <Link href="#" className="block gap-2 text-white hover:text-green flex  justify-start md:justify-center items-center transition-colors">
          <Image
          alt="Pieces" 
          src="/docs.png"
          className="w-[20px] h-[20px] hidden md:block"
          height={20}
          width={20}>
          </Image>
          Docs</Link>
        </li>
        <li className="flex items-center order-7 md:order-none ">
       
          <Link href="#" className="block gap-2 text-white hover:text-green flex  justify-start md:justify-center items-center transition-colors">
          <Image
          alt="Pieces" 
          src="/contact.png"
          className="w-[20px] h-[20px] hidden md:block"
          height={20}
          width={20}>
          </Image>
          Discord</Link>
        </li>
        <li className="flex items-center order-2 md:order-none">
       
       <Link href="#" className="block gap-2 text-white  flex bg-[black] md:hover:bg-[#433d51] justify-start md:justify-center items-center transition-colors md:px-3 md:py-3 rounded-lg  ">
       Login</Link>
     </li>
        <li className="flex items-center md:!ml-2  order-1 md:order-none">
       
          <Link href="#" className="block gap-2 text-white  flex bg-[black] md:hover:bg-[#433d51] justify-start md:justify-center items-center transition-colors md:px-6 md:py-3 rounded-lg md:border md:border-white ">
            <span className="hidden md:block">
            Start free
            </span>
            <span className="block md:hidden">
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
