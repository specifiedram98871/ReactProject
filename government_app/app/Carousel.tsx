"use client";
import React, { useState } from "react";

const ImageCarousel = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-center text-2xl mb-4 text-gray-700 font-semibold">
        Gallery
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 text-gray-400 px-4 py-2 rounded-md text-3xl"
          onClick={prevImage}
        >
          <span>&lt;</span>
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="max-w-full md:h-[450px] w-[500px] rounded-lg shadow-lg sm:h-[300px] h-[300px]"
        />
        <button
          className="absolute right-0 text-gray-400 px-4 py-2 text-3xl "
          onClick={nextImage}
        >
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
