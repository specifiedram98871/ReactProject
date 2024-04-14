import React from "react";
import "./globals.css";
import Home from "./home/page";
import ImageCarousel from "./Carousel.tsx";
import Policies from "./terms/page";

const Page = () => {
  return (
    <div className="flex flex-col m-4 lg:mt-10">
      {/* Left Section */}
      <div className="w-full flex flex-col md:flex-row justify-center ">
        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 text-white py-4 px-6">
            <h2 className="text-2xl font-semibold">Our Services</h2>
          </div>
          <div className="p-6">
            <ul className="list-disc pl-4">
              <li className="mb-4 text-gray-700">
                Comprehensive News Coverage
              </li>
              <li className="mb-4 text-gray-700">Investigative Journalism</li>
              <li className="mb-4 text-gray-700">Editorial Columns</li>
              <li className="mb-4 text-gray-700">Opinion Pieces</li>
              <li className="mb-4 text-gray-700">24/7 News Updates</li>
              {/* Add more services as needed */}
            {/* </ul> */}
          {/* </div> */}
        {/* </div> */ }

        <div className="bg-white rounded-lg shadow-md overflow-hidden:">
          <Home />
        </div>
      </div>

      {/* Right Section */}

      {/* Carousel Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Our Policies</h2>
            <Policies />
          </div> */}
          <div>
            {/* Assuming ImageCarousel is a self-contained carousel component */}
            <ImageCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
