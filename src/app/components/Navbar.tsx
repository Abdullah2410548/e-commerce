"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 text-xl font-bold">
            E-Commerce
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                aria-label="Search"
              >
                <svg
                  className="h-5 w-5 text-gray-500 hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a7 7 0 017 7c0 1.657-.57 3.156-1.52 4.385l4.615 4.615a1 1 0 01-1.415 1.415l-4.615-4.615A7 7 0 1111 4z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link href="/shop" className="hover:text-yellow-400">
              Shop
            </Link>
            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400">
              Home
            </Link>
            <Link href="/shop" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400">
              Shop
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-yellow-400">
              Contact
            </Link>
          </div>

          {/* Mobile Search Bar */}
          <div className="px-4 pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                aria-label="Search"
              >
                <svg
                  className="h-5 w-5 text-gray-500 hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a7 7 0 017 7c0 1.657-.57 3.156-1.52 4.385l4.615 4.615a1 1 0 01-1.415 1.415l-4.615-4.615A7 7 0 1111 4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;







