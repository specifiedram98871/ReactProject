import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative">
        <div className="mb-4 md:mb-0">
          <p className="text-lg">&copy; 2023 ms.gov | All Rights Reserved</p>
        </div>
        <div className="md:text-center">
          <ul className="flex space-x-4">
            <li className="cursor-pointer hover:text-gray-300">Government</li>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-2 bottom-0 w-full">
        <p className="text-sm">
          News_Agency: Stay updated with the latest government initiatives,
          policies, and events all over the world.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
