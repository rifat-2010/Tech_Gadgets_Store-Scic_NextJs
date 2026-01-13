"use client"

import React from 'react';

const ProductShowcaseSection = () => {
    return (
        <div>
     {/* Featured Product Showcase Section */}
            <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://templatekit.jegtheme.com/noiz/wp-content/uploads/sites/36/2021/02/bg-carbon@2x.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Product Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                <img
                  src="https://templatekit.jegtheme.com/noiz/wp-content/uploads/sites/36/2021/02/headphone-e1612173263315.png"
                  alt="Active Noise Canceling Headphones"
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center text-white">
              {/* Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                ACTIVE NOISE CANCELING
              </h2>

              {/* Price */}
              <div className="mb-6">
                <p className="text-lg text-gray-300 mb-2">START FROM</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">
                  $20.99
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                New Release Wireless Headphone from SoundPro Sound Technology.
                Using Bluetooth 5.0, Noice Canceling and APTX Technology to make
                a good experience when listening to music.
              </p>

              {/* Shop Button */}
              <div>
                <button className="px-10 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer">
                  SHOP HERE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProductShowcaseSection;