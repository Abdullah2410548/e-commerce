"use client";

import { useState } from "react";
import Image from "next/image";

const ShopPage = () => {
  const products = [
    { id: 1, name: "Shirt", price: 20, category: "Clothing", image: "/shirt.jpg" },
    { id: 2, name: "T-shirt", price: 15, category: "Clothing", image: "/tshirt.webp" },
    { id: 3, name: "Jeans", price: 30, category: "Clothing", image: "/jeans.webp" },
    { id: 4, name: "Shoes", price: 50, category: "Footwear", image: "/shoes.jpg" },
    { id: 5, name: "Jacket", price: 60, category: "Clothing", image: "/jacket2.jpg" },
    { id: 6, name: "Watch", price: 80, category: "Accessories", image: "/watch.jpg" },
    { id: 7, name: "Sunglasses", price: 25, category: "Accessories", image: "/sunglas.jpg" },
    { id: 8, name: "Hat", price: 15, category: "Clothing", image: "/hat.jpg" },
    { id: 9, name: "Backpack", price: 40, category: "Accessories", image: "/backpak.webp" },
    { id: 10, name: "Sneakers", price: 55, category: "Footwear", image: "/snekers.jpg" },
    { id: 11, name: "Sandals", price: 20, category: "Footwear", image: "/sandals2.jpg" },
    { id: 12, name: "Gloves", price: 10, category: "Accessories", image: "/gloves.jpg" },
  ];

  const categories = ["All", "Clothing", "Footwear", "Accessories"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Shop</h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <label htmlFor="categories" className="mr-2 font-medium">
              Category:
            </label>
            <select
              id="categories"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-md border focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-md border focus:outline-none"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-500">${product.price}</p>
                  <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;

