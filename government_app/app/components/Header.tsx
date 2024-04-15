// components/Header.js
import React from "react";
import Link from "next/link";

const Header = () => {

  return (
    <header className="bg-blue-800 ">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center ">
          <div className="text-white font-bold text-xl flex justify-between items-center">
            <div className=" w-[90px]">

            <img src="/images/logo.png" alt="governmentimg" srcset="" />
            </div>
            <Link href="/">
              <span className="text-sky-600 cursor-pointer">&lt;</span>
            </Link>
            <Link href="/">
              <span className="text-sky-200 cursor-pointer">News_Agency</span>
            </Link>
            <Link href="/">
              <span className="text-sky-600 cursor-pointer"> /&gt;</span>
            </Link>
          </div>
          <ul className="flex space-x-5 text-white md:flex-row  flex-col font-semibold">
            <li>
              <Link href="/home" className="hover:text-gray-400">
                Get_News_API
              </Link>
            </li>
            
            <li className="cursor-pointer text-red-400">
              <Link href="/contact" className="hover:scale-[1.2]">
                Live_News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Log_In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;














// <li class="menu-active menu-wordpress">
//   <a href="#" rel="noopener">
//     <span>Web Design</span>
//   </a>
//   <ul class="submenu plugins">
//     <li>
//       <a href="https://alvarotrigo.com/blog/tag/portfolios/" rel="noopener">
//         <i></i>Portfolios
//       </a>
//     </li>
//     <li>
//       <a href="https://alvarotrigo.com/blog/tag/inspiration/" rel="noopener">
//         <i></i>Inspiration
//       </a>
//     </li>
//     <li>
//       <a
//         href="https://alvarotrigo.com/blog/web-developing/templates/"
//         rel="noopener"
//       >
//         <i></i>Templates
//       </a>
//     </li>
//     <li>
//       <a
//         href="https://alvarotrigo.com/blog/web-developing/web-design/"
//         rel="noopener"
//       >
//         <i></i>Web Design
//       </a>
//     </li>
//     <li>
//       <a
//         href="https://alvarotrigo.com/blog/tag/website-builders/"
//         rel="noopener"
//       >
//         <i></i>Website Builders
//       </a>
//     </li>
//     <li>
//       <a href="https://alvarotrigo.com/blog/tag/wordpress/" rel="noopener">
//         <i></i>WordPress
//       </a>
//     </li>
//     <li>
//       <a href="https://alvarotrigo.com/blog/tag/fonts/" rel="noopener">
//         <i></i>Fonts
//       </a>
//     </li>
//   </ul>
// </li>;