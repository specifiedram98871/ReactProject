'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.NEXT_APP_NEWS_API_KEY || "your api key";

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

const Home: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [country, setCountry] = useState<string>('');
  const [showMore, setShowMore] = useState<boolean>(false);

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
    if (country) {
      fetchNews(country);
    }
  }, [country]);

  const handleSearch = () => {
    fetchNews(country);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex mb-4 justify-center md:w-full">
        <input
          className="border rounded-md p-2 mr-2"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-3 gap-4">
        {news.slice(0, showMore ? news.length : 3).map((item, index) => (
          <div key={index} className="border rounded-md p-4">
            <img
              src={item.urlToImage}
              alt={item.title}
              className="h-32 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
