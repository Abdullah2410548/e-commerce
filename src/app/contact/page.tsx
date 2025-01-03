"use client";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 h-96 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg lg:text-xl max-w-2xl">
          We'd love to hear from you. Get in touch with us!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <div>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full p-3 rounded-md bg-gray-700 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full p-3 rounded-md bg-gray-700 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full p-3 rounded-md bg-gray-700 text-white focus:ring focus:ring-yellow-500 focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow-lg hover:bg-yellow-600 focus:ring focus:ring-yellow-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Have questions or want to connect with us? Reach out using the
              contact details below or the form.
            </p>
            <ul className="text-gray-400">
              <li className="mb-2">
                <strong>Email:</strong> support@yourdomain.com
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +123 456 7890
              </li>
              <li>
                <strong>Address:</strong> 123 Luxury Street, Your City, Your
                Country
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


