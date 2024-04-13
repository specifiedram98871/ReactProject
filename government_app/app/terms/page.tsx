"use client";
import React, { useState } from "react";
import { termsAndConditionsData } from "./terms";

const Page = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Array of policies to display based on pagination
  const policiesToShow = showAll
    ? termsAndConditionsData
    : termsAndConditionsData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(termsAndConditionsData.length / itemsPerPage);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Rules and Policies</h1>

      <div className="grid gap-6">
        {policiesToShow.map((policy, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{policy.title}</h2>
            <p className="text-gray-700">{policy.description}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
          <div className="flex mt-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePagination(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
