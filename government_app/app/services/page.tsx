import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl text-center text-blue-800 mb-8 font-semibold">Our Services</h1>
      <hr className="border border-blue-800 mb-8 w-[150px] mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-56 object-cover object-center"
            src="/images/1.jpg"
            alt="News_API"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">News_API</h2>
            <p className="text-gray-700 text-sm">Get free news from News_API for free</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View More
            </button>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-56 object-cover object-center"
            src="/images/2.jpg"
            alt="Live_News_Coverage"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              Live News Coverage
            </h2>
            <p className="text-gray-700 text-sm">Get live news coverage from all over the world</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View More
            </button>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-56 object-cover object-center"
            src="/images/3.jpg"
            alt="24/7 Support"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2">
              24/7 Support
            </h2>
            <p className="text-gray-700 text-sm">Get 24/7 support for your queries</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
