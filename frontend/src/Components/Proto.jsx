import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Proto() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getnewNews = (newsList) => {
    return newsList.slice(24, 28);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/news/getnews"
        );
        const News = getnewNews(response.data);
        setNews(News);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="p-4 mr-20 max-w-6xl mx-auto">
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 md:mt-5 md:ml-0 ml-15 bg-zinc-900 rounded-xl shadow-lg">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-700 h-[40vh] rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-40 object-cover p-2 rounded-xl"
              />
            )}

            {/* Text Content */}
            <div className="p-4 flex flex-col gap-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-white hover:underline"
              >
                {item.headline.length > 60
                  ? item.headline.slice(0, 80) + "..."
                  : item.headline}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proto;
