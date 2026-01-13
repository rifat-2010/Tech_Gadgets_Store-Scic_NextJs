"use client"

import React from 'react';

const FeaturedProducts = () => {
     const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "Noise-cancelling technology for immersive audio",
      price: "$199.99",
      image: "🎧",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      description: "Ultra-responsive with precision tracking",
      price: "$79.99",
      image: "🖱️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      description: "Premium switches for perfect typing experience",
      price: "$149.99",
      image: "⌨️",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Smart Watch",
      description: "Advanced health and fitness tracking",
      price: "$299.99",
      image: "⌚",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Latest Smartphone",
      description: "Cutting-edge mobile technology",
      price: "$899.99",
      image: "📱",
      color: "from-indigo-500 to-blue-500",
    },
  ];
    return (
        <div>
            
        {/* Products Grid Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Featured Products
              </h2>
              <p className="text-gray-300 text-lg">
                Explore our premium collection of tech gadgets
              </p>
            </div>

            {/* Featured Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 cursor-pointer"
                >
                  {/* linear Background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${product.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-20">
                    {/* Icon */}
                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300 text-center">
                      {product.image}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-white mb-2 text-center">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-xs mb-4 line-clamp-2 text-center">
                      {product.description}
                    </p>

                    {/* Price and Button */}
                    <div className="flex flex-col items-center gap-3">
                      <span
                        className={`text-2xl font-bold bg-linear-to-r ${product.color} bg-clip-text text-transparent`}
                      >
                        {product.price}
                      </span>
                      <button
                        className={`w-full px-3 py-2 bg-linear-to-r ${product.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
};

export default FeaturedProducts;