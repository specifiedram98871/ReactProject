'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Source {
  id: string;
  name: string;
}

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [country, setCountry] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const API_KEY = process.env.NEXT_PUBLIC_APP_NEWS_API_KEY;

  const fetchNews = (country: string) => {
    axios
      .get<{ articles: Article[] }>(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  };

  useEffect(() => {
    if (country ) {
      fetchNews(country);
    }
  }, []);

  const handleSearch = () => {
    fetchNews(country);
  };

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-1xl font-bold mb-4">
        "Discover Global News: Explore Stories from Every Corner of the World!"
      </h1>
      <div className="flex mb-4 justify-around gap-3  md:w-full">
        <input
          className="border rounded-md p-2 w-full"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Search for news by keyword associated with the country"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      {news.length ===0 && <p className="text-gray-600 h-[10vw]">No news found</p>}
      <div className="grid grid-cols-3 gap-4">
        {news.slice(0, showMore ? news.length : 6).map((item, index) => (
          <div key={index} className="border rounded-md p-4">
            {item.urlToImage == null ? null : (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="h-32 w-full object-cover mb-4"
              />
            )}
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {news.length ===0 ? "No news found" : showMore ? "Show Less" : "Show More"}
          
        </button>
      </div>
    </div>
  );
};

export default News;
