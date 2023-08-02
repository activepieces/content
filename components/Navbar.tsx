'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import GithubWidget from "./GithubWidget";

const Navbar = ({ stars }: { stars: number }) => {
  const routesList = useRef<null | HTMLElement>(null);

  const showNavbarOnMobile = () => {
    routesList.current?.classList.toggle('!top-[80px]');
  };
  return (
    <header className="bg-[#000000] sticky z-50 top-0 shadow-navbar h-[75px] lg:h-[initial]  ">

      <div className="container justify-between flex flex-wrap items-center mx-auto px-4 py-3 z-20">
        <div className="absolute top-0 left-0 bg-[#000000] lg:static w-full lg:w-[initial] flex gap-4 items-center py-5 px-4 lg:p-0 z-50">
          <Link href="/">
            <Image
              src="https://cdn.activepieces.com/brand/full-logo-white.svg"
              alt="Activepieces Logo"
              width={215}
              height={35}
              className="w-[152px] h-[25px] lg:w-[215px] lg:h-[35px]"
            />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" onClick={showNavbarOnMobile}
            className="lg:hidden
           order-3 inline-flex items-center p-2 w-10 justify-center
           h-10  text-sm text-gray-500 rounded-lg" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z" fill="white" />
            </svg>
          </button>
          <div className="grow lg:grow-0 flex justify-end">
            <GithubWidget stars={stars}></GithubWidget>
          </div>
        </div>


        <nav ref={routesList} className="shadow-navbar lg:shadow-none duration-[400ms]  z-10 w-full absolute -top-[446px] transition-all  left-0 bg-[#2D2E33] lg:bg-[#000000] lg:static lg:block lg:w-auto" id="navbar-default">
          <ul className="text-h5-sm flex flex-col gap-0 divide-y divide-[#57585C] lg:divide-y-0 lg:gap-[35px] px-4 lg:p-0 lg:flex-row lg:mt-0">
            <li className="flex justify-start relative lg:justify-center items-center">
              <Link href="/features" className="block gap-2 peer  py-5 lg:py-0  text-white  flex font-normal justify-start lg:justify-center items-center transition-colors">
                Features</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "> </div>
            </li>

            <li className="flex py-5 lg:py-0  relative justify-start lg:justify-center items-center">

              <Link href="/pieces" className="block gap-2 peer  text-white font-normal flex  justify-start lg:justify-center items-center transition-colors">
                Pieces</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "> </div>
            </li>
            <li className="flex py-5 lg:py-0  relative  justify-start lg:justify-center items-center">

              <Link href="/pricing" className="block gap-2 text-white   font-normal peer flex  justify-start lg:justify-center items-center transition-colors">
                Pricing</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "> </div>
            </li>
            <li className="flex py-5 lg:py-0  relative items-center  ">
              <Link href="/blog" className="block  gap-2 peer text-white font-normal flex  justify-start lg:justify-center items-center transition-colors">
                Blogs</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "> </div>
            </li>
            <li className="flex py-5 lg:py-0  relative items-center  ">
              <Link href="https://www.activepieces.com/docs/getting-started/introduction" className="block  gap-2 peer text-white font-normal flex  justify-start lg:justify-center items-center transition-colors">
                Docs</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "> </div>
            </li>
            <li className="flex py-5 lg:py-0 relative  items-center  ">

              <Link href="https://discord.com/invite/2jUXBKDdP8" className="block   peer gap-2 text-white font-normal flex  justify-start lg:justify-center items-center transition-colors">
                Discord</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "> </div>
            </li>
            <li className="lg:ml-[45px] py-5 lg:py-0 relative flex items-center">

              <Link href="https://cloud.activepieces.com/sign-in" className="block gap-2 peer text-white font-normal  flex   justify-start lg:justify-center items-center transition-colors   ">
                Login</Link>
              <div className="peer-hover:border-opacity-100 absolute transition-all hidden lg:block -bottom-[12px] w-full border-t border-solid border-white border-opacity-0 "></div>
            </li>
            <li className="lg:ml-[10px] py-5 lg:py-0  flex items-center">
              <Link href="https://cloud.activepieces.com/sign-up" className="block hover:-translate-y-[3px] transition-transform	 gap-2 text-black text-h4-sm flex bg-white font-bold  justify-start lg:justify-center items-center px-5 py-2 rounded-sm lg:border lg:border-white ">
                Start free
              </Link>

            </li>
          </ul>


        </nav>

      </div>
    </header>
  );
};

export default Navbar;
