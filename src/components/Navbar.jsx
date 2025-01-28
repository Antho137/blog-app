import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="w-screen bg-gradient-to-r from-slate-600 to-slate-400 bg-opacity-100 text-white">
        <div className="flex justify-center items-center gap-5">
          <Link
            className="text-2xl md:text-3xl md:py-5 mx-5 font-medium"
            href="/"
          >
            The Blog
          </Link>
          <div>
            <ul className="flex justify-center items-center">
              <li className="py-4 px-2">
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="py-4 px-2">
                <Link href="/Createblog" className="">
                  New blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
