"use client"


import React from 'react';

const QualityCommitmentSection = () => {
    return (
        <div>
    {/* Quality Commitment Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Content Container */}
          <div className="flex flex-col items-center">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
                With a{" "}
                <span className="text-cyan-500 font-bold">commitment</span> to
                quality, we source top-brand gadgets, smart devices, and home
                electronics to enhance your everyday life.
              </h2>
            </div>

            {/* Products Image */}
            <div className="w-full flex justify-center mb-12">
              <div className="relative max-w-3xl w-full">
                <img
                  src="https://kit.createbigsupply.com/electrixo/wp-content/uploads/sites/39/2025/03/envato-labs-image-edit-11.png"
                  alt="Quality Home Appliances and Gadgets"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Learn More Button */}
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer">
              <span>📚</span> Learn More
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
        </div>
      </section>
        </div>
    );
};

export default QualityCommitmentSection;