import React from "react";
import Link from "next/link";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-gray-900 via-gray-800 to-black text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gadgets Shop
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for premium gadgets and electronics.
              Quality products, great prices, exceptional service.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-blue-400 transition duration-300 text-lg"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/"
                className="text-gray-400 hover:text-blue-400 transition duration-300 text-lg"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-purple-400 transition duration-300 text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-gray-400 hover:text-blue-300 transition duration-300 text-lg"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-blue-400">→</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-blue-400">→</span> Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-blue-400">→</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-blue-400">→</span> Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Support"
                  className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">→</span> Help Center
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Privacy_policy"
                  className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">→</span> Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Terms_of_service"
                  className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">→</span> Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Wikipedia:Contact_us"
                  className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-center gap-2"
                >
                  <span className="text-purple-400">→</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-start gap-3"
              >
                <AiOutlinePhone className="text-lg mt-0.5 shrink-0 text-blue-400" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@gadgetsshop.com"
                className="text-gray-400 hover:text-purple-400 transition duration-300 flex items-start gap-3"
              >
                <AiOutlineMail className="text-lg mt-0.5 shrink-0 text-purple-400" />
                <span>info@gadgetsshop.com</span>
              </a>
              <div className="text-gray-400 flex items-start gap-3">
                <AiOutlineEnvironment className="text-lg mt-0.5 shrink-0 text-pink-400" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>
            <p>
              © {currentYear}{" "}
              <span className="text-white font-semibold">Gadgets Shop</span>.
              All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://en.wikipedia.org/wiki/Refund" className="hover:text-blue-400 transition duration-300">
              Refund Policy
            </a>
            <a href="https://en.wikipedia.org/wiki/Department_of_Shipping" className="hover:text-blue-400 transition duration-300">
              Shipping Policy
            </a>
            <a href="https://en.wikipedia.org/wiki/Site_map" className="hover:text-blue-400 transition duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
