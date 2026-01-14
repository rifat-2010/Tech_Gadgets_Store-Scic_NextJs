import React from "react";
import Link from "next/link";

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "HiFi Headphones for Every Song Genre",
      date: "February 2, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
      slug: "https://www.moon-audio.com/blogs/expert-advice/best-headphones-music-quality-testing-headphones?srsltid=AfmBOoqvwN4r698rTbjdMeHujIaStsxQ4Jmp64oACqzWEMhi8JotqTm-",
    },
    {
      id: 2,
      title: "Configure a Bluetooth Earphone's Equalizer",
      date: "February 2, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=400&fit=crop",
      slug: "https://www.soundguys.com/how-to-eq-bluetooth-headphones-62430/",
    },
    {
      id: 3,
      title: "How to Measure an Earphone Quality",
      date: "February 2, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image:
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=400&fit=crop",
      slug: "https://www.audiocheck.net/soundtests_headphones.php",
    },
  ];

const brands = [
    { name: "TECHNOX", style: "border-2 border-slate-700 px-3 py-1 font-bold tracking-tighter" },
    { name: "HyperGear", style: "font-semibold tracking-tight" },
    { name: "CORE-X", style: "italic font-black border-b-2 border-slate-700 pb-1" },
    { name: "VELOCITY", style: "italic font-extrabold tracking-[0.2em]" },
  ];

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            LATEST NEWS
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-56 bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {article.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  {article.date}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={article.slug}
                  className="theme-btn"
                >
                  READ MORE
                  <span className="group-hover/link:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Main Read More Button */}
        <div className="flex justify-center mb-20">
          <Link
            href="/blog"
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-2xl"
          >
            READ MORE
          </Link>
        </div>

        {/* Brands Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="text-gray-400 font-bold text-lg sm:text-xl hover:text-gray-600 transition-colors duration-300 cursor-pointer"
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
