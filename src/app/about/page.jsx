import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-400" />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and trends to bring you the latest gadgets before anyone else.",
    },
    {
      icon: <AiOutlineSafety className="text-4xl text-blue-400" />,
      title: "Quality",
      description:
        "Every product is carefully selected and tested to ensure it meets our high standards of excellence.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We offer exceptional support and easy returns for peace of mind.",
    },
    {
      icon: <FaHeart className="text-4xl text-red-400" />,
      title: "Passion",
      description:
        "We love what we do, and that passion reflects in every interaction with our customers.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a vision to revolutionize gadget shopping",
    },
    {
      year: "2021",
      title: "1M+ Customers",
      description: "Reached our first million satisfied customers worldwide",
    },
    {
      year: "2022",
      title: "50+ Brands",
      description: "Partnered with over 50 leading tech brands globally",
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Became the #1 trusted gadget retailer in the region",
    },
  ];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gadgets Shop
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted destination for premium gadgets, exceptional quality,
            and unmatched customer service since 2020.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded in 2020 with a simple vision: to make premium technology
                accessible to everyone. What started as a small startup has
                grown into a trusted marketplace serving hundreds of thousands
                of customers worldwide.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                We believe that technology should empower people, not complicate
                their lives. That is why we handpick every product, verify its
                quality, and back it with our commitment to excellence.
              </p>
              <p className="text-gray-600 text-lg">
                Today, Gadgets Shop stands as a beacon of trust in the tech
                retail industry, known for quality products, competitive prices,
                and legendary customer service.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                  <p className="text-blue-100">
                    To empower customers with access to the latest, most
                    innovative gadgets and provide exceptional support every
                    step of the way.
                  </p>
                </div>
                <div className="border-t border-blue-400 pt-6">
                  <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
                  <p className="text-blue-100">
                    To be the global leader in tech retail, recognized for
                    quality, innovation, and customer-centricity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
        <section className="py-16 bg-linear-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 md:w-11/12">
            <div className="text-center mb-12 space-y-2">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Our <span className="text-blue-600">Impact</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                We are redefining the tech experience with numbers that speak for our excellence and community trust.
            </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Gadgets Sold */}
            <div className="transition-all duration-500 transform hover:scale-105">
                <p className="font-bold text-4xl md:text-5xl font-mono text-blue-600">
                50K+
                </p>
                <p className="text-gray-600 mt-2 font-medium">Gadgets Delivered</p>
                <div className="mt-4 h-1 bg-linear-to-r from-blue-600 to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>

            {/* Happy Customers */}
            <div className="transition-all duration-500 transform hover:scale-105 delay-100">
                <p className="font-bold text-4xl md:text-5xl font-mono text-indigo-600">
                30K+
                </p>
                <p className="text-gray-600 mt-2 font-medium">Tech Lovers</p>
                <div className="mt-4 h-1 bg-linear-to-r from-indigo-600 to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>

            {/* Global Brands */}
            <div className="transition-all duration-500 transform hover:scale-105 delay-200">
                <p className="font-bold text-4xl md:text-5xl font-mono text-blue-600">
                100+
                </p>
                <p className="text-gray-600 mt-2 font-medium">Premium Brands</p>
                <div className="mt-4 h-1 bg-linear-to-r from-blue-600 to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>

            {/* Support Rating */}
            <div className="transition-all duration-500 transform hover:scale-105 delay-300">
                <div className="flex items-center justify-center">
                <p className="font-bold text-4xl md:text-5xl font-mono text-indigo-600">
                    4.8
                </p>
                <span className="text-3xl ml-1">⭐</span>
                </div>
                <p className="text-gray-600 mt-2 font-medium">Service Rating</p>
                <div className="mt-4 h-1 bg-linear-to-r from-indigo-600 to-transparent w-3/4 mx-auto rounded-full"></div>
            </div>
            </div>
        </div>
        </section>

      {/* Journey/Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 border-2 border-blue-500 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-500 text-3xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Verified Products",
                description:
                  "Every item is authenticity checked and quality assured before shipment",
              },
              {
                title: "Best Prices",
                description:
                  "Competitive pricing with frequent discounts and special offers",
              },
              {
                title: "Fast Delivery",
                description:
                  "Quick shipping with real-time tracking to your doorstep",
              },
              {
                title: "Easy Returns",
                description:
                  "30-day hassle-free return policy for your peace of mind",
              },
              {
                title: "Expert Support",
                description:
                  "Knowledgeable team ready to help 24/7 via chat, email, or phone",
              },
              {
                title: "Warranty Coverage",
                description:
                  "Extended warranty options to protect your valuable gadgets",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-2xl text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg">
              Meet the people driving our vision forward
            </p>
          </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1U4TCjzEi-WM-8mq4hk5cWorEA50Ebwp4A&s"
                  alt="Elon Musk"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Elon Musk</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                Tesla & SpaceX
              </p>
            </div>

            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaf2jidBBkxos4jXJ7poAS6j8_0CCRwlMBg&s"
                  alt="Mark Zuckerberg"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Mark Zuckerberg</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                Meta Platforms
              </p>
            </div>

            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxkjLbvmkfE5T-S9ObWLSJyMnJ7PL66_5Tg&s"
                  alt="Bill Gates"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Bill Gates</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                Microsoft & Philanthropy
              </p>
            </div>

            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
              <div class="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZflzsOLFjRVbolXYnc7FAMttYN57zKDm00g&s"
                  alt="Sam Altman"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="text-xl font-bold text-gray-900">Sam Altman</h4>
              <p class="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                OpenAI
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* CTA Section with Premium Background */}
        <section className="relative py-24 md:py-36 w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')",
            }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-gray-900/90 via-gray-900/80 to-black/90"></div>
        </div>

        <div className="relative z-10 w-11/12 max-w-5xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            Ready to Upgrade Your <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
                Tech Lifestyle?
            </span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-10 leading-relaxed">
            Join our elite community and discover why thousands of tech enthusiasts trust us for premium gadgets and cutting-edge innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
                href="/products"
                className="theme-btn"
            >
                Shop Now
            </Link>
            
            <Link
                href="/blog"
                className="common-btn"
            >
                Learn More
            </Link>
            </div>

            {/* Divider Decoration */}
            <div className="mt-12 flex justify-center">
            <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full"></div>
            </div>
        </div>
        </section>
    </div>
  );
}
