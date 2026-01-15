"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

import Link from "next/link";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        // Get first 8 products as featured
        setFeaturedProducts(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
       {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">
              Featured Products
            </span>
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Discover the next generation of innovation. Explore our handpicked premium 
            collection of high-performance tech gadgets designed for your lifestyle.
          </p>
        </div>

        {/* Featured Products Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Brand */}
                <p className="text-xs text-blue-400 uppercase font-semibold">
                  {product.brand}
                </p>

                {/* Product Name */}
                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition duration-200">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <AiOutlineStar
                        key={i}
                        className={`text-xs ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.stock} in stock
                    </p>
                  </div>
                  {product.stock > 20 && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Link  
                href={`/products/${product.id}`}
                 className="theme-btn-two">
                  View Details <BiRightArrowAlt />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
