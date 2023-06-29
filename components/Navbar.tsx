import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Activepieces</span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        </div>
        <div>
          <Link href="/pieces" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 align-right">
            Pieces
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
