"use client";

import { useContext, useState } from "react";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AuthContext } from "@/app/context/AuthContext";
import { auth } from "@/firebase/firebase.config";
import { signOut } from "firebase/auth";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { user, setUser, loading } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // signOut function
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Sign Out successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gadgets Shop
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`nav-link ${isActive("/products") ? "active" : ""}`}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={`nav-link ${isActive("/about") ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
            >
              Blog
            </Link>
          </div>

          {/* Right Side - Auth Section */}
          <div className="flex items-center gap-4">
            {loading ? (
              <HashLoader color="#3B82F6" size={24} />
            ) : user ? (
              // User Profile Dropdown
              <div className="relative group hidden sm:block">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
                  <img
                    src={
                      user?.photoURL ||
                      "https://img.icons8.com/?size=100&id=Y5jFcXHxQBkf&format=png"
                    }
                    alt={user?.displayName || "User"}
                    className="w-8 h-8 rounded-full object-cover border-2 border-blue-600"
                  />
                  <span className="text-gray-700 font-medium text-sm truncate max-w-[120px]">
                    {user?.displayName || "User"}
                  </span>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <p className="font-semibold text-gray-800">
                      {user?.displayName || "No Name"}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {user?.email || "No Email"}
                    </p>
                  </div>
                  <button
                    onClick={handleSignout}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 font-medium transition duration-200"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              // Login Button
              <Link
                href="/login"
                className="hidden sm:inline-block bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition duration-200"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition duration-200"
            >
              {mobileMenuOpen ? (
                <AiOutlineClose size={24} className="text-gray-700" />
              ) : (
                <AiOutlineMenu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-3">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${
                isActive("/products") ? "active" : ""
              }`}
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${
                isActive("/about") ? "active" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${isActive("/blog") ? "active" : ""}`}
            >
              Blog
            </Link>

            {!user && (
              <Link
                href="/login"
                onClick={closeMobileMenu}
                className="block bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg transition duration-200 cursor-pointer"
              >
                Login
              </Link>
            )}

            {user && (
              <button
                onClick={() => {
                  handleSignout();
                  closeMobileMenu();
                }}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition duration-200 cursor-pointer"
              >
                Sign Out
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
