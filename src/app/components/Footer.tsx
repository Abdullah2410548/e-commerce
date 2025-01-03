"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-xl font-bold">E-Shop</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop shop for all your needs. High-quality products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-yellow-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@eshop.com</li>
              <li className="text-gray-400">Phone: +1 (123) 456-7890</li>
              <li className="text-gray-400">Address: 123 E-Shop St, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-gray-400 text-sm">© 2025 E-Shop. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.54 6.42a8.46 8.46 0 01-2.4.65 4.21 4.21 0 001.85-2.32 8.45 8.45 0 01-2.69 1.03 4.21 4.21 0 00-7.16 3.84A12 12 0 013 5.11a4.21 4.21 0 001.3 5.63 4.16 4.16 0 01-1.91-.53v.05a4.21 4.21 0 003.37 4.13 4.19 4.19 0 01-1.9.07 4.21 4.21 0 003.93 2.93A8.43 8.43 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.69-6.26 11.69-11.69 0-.18 0-.36-.01-.54a8.34 8.34 0 002.06-2.12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.8 3.44 8.77 7.92 9.72v-6.87H8.17v-2.85h1.75v-2.16c0-1.73 1.06-2.68 2.6-2.68.74 0 1.37.06 1.56.08v1.8h-1.07c-.84 0-1 .4-1 1v1.96h2.03l-.26 2.85h-1.77v6.89c4.48-.96 7.92-4.93 7.92-9.73C22 6.48 17.52 2 12 2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 2H2v20l4-4h16V2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
