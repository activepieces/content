import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-black">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight">
            Activepieces
          </span>
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div>
        <Link
            href="/blogs/hello-world"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right"
          >
            Blogs
          </Link>
          <Link
            href="/pieces"
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
            href="/pieces"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
