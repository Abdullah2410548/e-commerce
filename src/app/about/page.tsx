"use client";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-lg lg:text-xl max-w-2xl">
            Discover the story behind our passion for excellence and luxury.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Crafting Elegance Since Day One
            </h2>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              At E-Commerce, we believe luxury is more than a statement—it’s a
              lifestyle. From handpicked materials to exclusive designs, every
              product is a testament to craftsmanship and attention to detail.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to bring you timeless pieces that define style,
              sophistication, and individuality.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Our Mission & Values
            </h3>
            <p className="text-gray-400 text-lg mt-4">
              Excellence, innovation, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-6 rounded-full inline-block mb-4">
                <svg
                  className="h-12 w-12 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm6.364 5.364l-1.414-1.414c-.781-.781-1.944-1.022-2.922-.639l-1.721.688-4.243-4.243.688-1.721c.383-.978.142-2.141-.639-2.922L6.636 4.636a4 4 0 00-5.657 5.657L5 15h1v4l4-4h3l4.293 4.293a4 4 0 005.657-5.657l-2.586-2.586z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold">Innovation</h4>
              <p className="text-gray-400 mt-2">
                Combining tradition with the latest trends.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-6 rounded-full inline-block mb-4">
                <svg
                  className="h-12 w-12 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3M17 16v5a2 2 0 002 2h2a2 2 0 002-2v-5M17 4v4M21 16h-4M21 8h-4"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold">Sustainability</h4>
              <p className="text-gray-400 mt-2">
                Eco-friendly practices are at our core.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 p-6 rounded-full inline-block mb-4">
                <svg
                  className="h-12 w-12 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h1M10 7h1M3 10h1M10 10h1M17 10h1M3 13h1M10 13h1M17 13h1M3 16h1M10 16h1M17 16h1M3 19h1M10 19h1M17 19h1M6 3h1M6 7h1M6 10h1M6 13h1M6 16h1M6 19h1M6 22h1M13 3h1M13 7h1M13 10h1M13 13h1M13 16h1M13 19h1M13 22h1M20 3h1M20 7h1M20 10h1M20 13h1M20 16h1M20 19h1M20 22h1"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold">Excellence</h4>
              <p className="text-gray-400 mt-2">
                Setting the benchmark in luxury.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
