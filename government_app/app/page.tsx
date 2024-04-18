import React from "react";
import "./globals.css";
import News from "./home/page";
import ImageCarousel from "./Carousel.tsx";
import Services from "./services/page";

const Page = () => {
  return (
    <div className="flex flex-col lg:mt-10">
      {/* Left Section */}

      <div className="flex w-full md:flex-row justify-center ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden lg:px-9 md:px-4 sm:p-0">
          <News />
        </div>
        
      </div>


      {/* Carousel Section */}
      <div className=" bg-slate-50 mt-10">
        <div className="">
          <div className="p-4 w-full">
            <Services />
          </div>
        </div>
            <ImageCarousel />
      </div>
    </div>
  );
};

export default Page;
