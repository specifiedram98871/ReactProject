// components/Header.js
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-800 py-4">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <Link href="/">
              <span className="text-sky-600 cursor-pointer">&lt;</span>
            </Link>
            <Link href="/">
              <span className="text-sky-200 cursor-pointer">Government _News</span>
            </Link>
            <Link href="/">
              <span className="text-sky-600 cursor-pointer"> /&gt;</span>
            </Link>
          </div>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/home" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
