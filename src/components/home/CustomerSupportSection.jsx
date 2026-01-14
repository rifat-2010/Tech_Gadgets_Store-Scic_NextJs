"use client";

import Link from "next/link";
import React from "react";

const CustomerSupportSection = () => {
  return (
    <section className="relative pt-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Support Team Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              <img
                src="https://landing.shopilaunch.com/etech/assets/images/kh.png"
                alt="Customer Support Team - 24/7 Professional Support"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center">
            {/* Icon */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                <span className="text-2xl">🎧</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 font-semibold mb-2">
              24/7 customer service supported
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              by Professional
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              All requests will be processed manually by our developer or our
              supports staff during 24 hours (Monday - Friday, 08.00 - 18.00
              GMT+7). We will try to reply as fast we can. Will be touch.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="theme-btn">
                ASK A QUESTION
              </Link>
              <Link href="/blog" className="common-btn-two">
                DOCUMENTATION
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
    </section>
  );
};

export default CustomerSupportSection;
