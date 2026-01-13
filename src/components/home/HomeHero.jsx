"use client";

import React from "react";

const HomeHero = () => {
 

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://kit.createbigsupply.com/electrixo/wp-content/uploads/sites/39/2025/03/BG-Hero-3.png)",
          backgroundBlendMode: "darken",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Banner Section */}
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center">
                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Tech Gadgets Store
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                  Discover the latest electronics with unbeatable prices,
                  seamless shopping, and fast delivery—bringing innovation right
                  to your doorstep.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg cursor-pointer">
                    <span>🛒</span> Buy Now
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg cursor-pointer cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Side - Product Image */}
              <div className="flex justify-center items-center relative h-96 lg:h-full">
                {/* VR Headset Product Image */}
                <div className="relative w-full flex justify-center">
                  <img
                    src="https://kit.createbigsupply.com/electrixo/wp-content/uploads/sites/39/2025/03/Generic-VR-Headset.H03.2k-1024x1024.png"
                    alt="VR Headset - Featured Product"
                    className="w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transform hover:scale-110 transition-transform duration-500"
                  />

                  {/* Floating Label - Left */}
                  <div className="absolute top-24 -left-4 sm:-left-10 lg:-left-16 bg-white text-gray-900 px-5 py-2 rounded-full text-sm sm:text-base font-bold shadow-2xl animate-float whitespace-nowrap">
                    Immersive Experience
                  </div>

                  {/* Floating Label - Right */}
                  <div className="absolute bottom-32 -right-4 sm:-right-10 lg:-right-16 bg-white text-gray-900 px-5 py-2 rounded-full text-sm sm:text-base font-bold shadow-2xl animate-float-delayed whitespace-nowrap">
                    Enhanced Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
};

export default HomeHero;
