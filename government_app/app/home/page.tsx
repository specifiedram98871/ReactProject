'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define types for your news data
interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch news data from API
    axios.get<NewsItem[]>('https://api.example.com/news')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-3 gap-4">
        {news.map(item => (
          <div key={item.id} className="border rounded-md p-4">
            <img src={item.image} alt={item.title} className="h-32 w-full object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;