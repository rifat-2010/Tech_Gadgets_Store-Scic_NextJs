"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-gray-600 text-lg">
            Browse our complete collection of gadgets and electronics
          </p>
          <p className="text-gray-500 mt-2">Found {products.length} products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
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
              <div className="p-4">
                {/* Brand */}
                <p className="text-xs text-gray-500 uppercase font-semibold mb-2">
                  {product.brand}
                </p>

                {/* Product Name */}
                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
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
                  <span className="text-xs text-gray-600">
                    {product.rating} ({product.reviewsCount} reviews)
                  </span>
                </div>

                {/* Price and Stock */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </p>
                    <p className="text-xs text-gray-500">
                      Stock: {product.stock}
                    </p>
                  </div>
                  {product.stock > 0 ? (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Link
                  href={`/products/${product.id}`}
                  disabled={product.stock === 0}
                  className="theme-btn-two"
                >
                  View Details <BiRightArrowAlt />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
