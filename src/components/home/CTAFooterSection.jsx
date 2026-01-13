"use client"

import React from 'react';

const CTAFooterSection = () => {
    return (
        <div>
    {/* CTA Footer Section */}
        <section
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage:
            "url(https://landing.shopilaunch.com/etech/assets/images/banner-footer.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-96 text-center">
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-6 font-semibold tracking-wide">
            You are at the right step now
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 max-w-4xl leading-tight">
            Purchase Etech & Create Beautiful Online Stores
          </h2>

          {/* CTA Button */}
          <button className="px-12 py-4 bg-white hover:bg-gray-100 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-2xl cursor-pointer">
            BUY NOW
          </button>
        </div>

        {/* Wave Design at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 overflow-hidden">
          <img
            src="https://landing.shopilaunch.com/etech/assets/images/bg_ocean.png"
            alt="Wave Design"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>
        </div>
    );
};

export default CTAFooterSection;