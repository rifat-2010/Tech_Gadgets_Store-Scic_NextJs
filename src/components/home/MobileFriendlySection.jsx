"use client"


import React from 'react';

const MobileFriendlySection = () => {
    return (
        <div>
            
      {/* Mobile Friendly Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-800">User-friendly</span>
                <br />
                <span className="text-teal-600">mobile</span>
                <span className="text-gray-800"> & </span>
                <span className="text-cyan-300">other</span>
                <br />
                <span className="text-cyan-300">devices</span>
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Quick and easy to use the most important thing for selling
                products on mobile!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                  Learn More
                </button>
              </div>

              {/* Features List */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    Fast & Responsive Design
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    Seamless Shopping Experience
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">
                    Optimized for All Devices
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Image */}
            <div className="flex justify-center items-center relative h-96 lg:h-full">
              <div className="relative w-full max-w-sm flex justify-center">
                {/* Decorative Background Blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl blur-3xl opacity-40 -z-10"></div>

                {/* Phone Image */}
                <img
                  src="https://landing.engotheme.com/shopify/emita/assets/images/phone.png"
                  alt="Mobile Phone - User Friendly Interface"
                  className="w-full max-w-xs h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </section>
        </div>
    );
};

export default MobileFriendlySection;