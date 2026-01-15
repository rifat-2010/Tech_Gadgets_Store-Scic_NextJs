"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
//   AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCheck,
  AiFillStar,
} from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsShare } from "react-icons/bs";

export default function ProductDetailsPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const selectedProduct = data.find((p) => p.id === id);
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            <BiArrowBack /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase" && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb & Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
          >
            <BiArrowBack className="text-lg" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Product Image */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-96 h-125 group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Stock Badge */}
              <div className="absolute top-6 right-6">
                {product.stock > 0 ? (
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                    <AiOutlineCheck className="text-lg" />
                    In Stock
                  </div>
                ) : (
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-between">
            {/* Product Header */}
            <div>
              {/* Brand */}
              <p className="text-sm uppercase font-bold text-blue-600 mb-2 tracking-widest">
                {product.brand}
              </p>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating Section */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={`text-lg ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-gray-900">
                    {product.rating}
                    <span className="text-gray-600 font-normal ml-1">
                      ({product.reviewsCount} reviews)
                    </span>
                  </p>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold text-sm">
                    -17%
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Free shipping on orders over $500
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100 hover:border-blue-300 transition"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                        <AiOutlineCheck className="text-white text-sm" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div>
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-700 font-semibold">Quantity:</span>

                <span className="text-sm text-gray-500">
                  ({product.stock} available)
                </span>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl mb-1">✓</p>
                  <p className="text-xs text-gray-600">Free Returns</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-1">🔒</p>
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl mb-1">📦</p>
                  <p className="text-xs text-gray-600">Fast Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
