import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav  className="bg-transparent sticky z-50 top-0 ">
      <div className="bg-black w-full flex justify-center">
      <div className="flex items-center justify-between flex-wrap p-6 bg-black container">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Image
            src="https://cdn.activepieces.com/brand/full-logo-white.svg"
            alt="Activepieces Logo"
            width={150}
            height={24}
          />
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <Link
            href="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right"
          >
            Blog
          </Link>
          <Link
            href="/pricing"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right"
          >
            Pricing
          </Link>
          <Link
            href="/pieces"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right"
          >
            Pieces
          </Link>
          <Link
            href="https://cloud.activepieces.com/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right"
          >
            Get Started
          </Link>
        </div>
      </div>
      </div>
      </div>  
    </nav>
  );
};

export default Navbar;
