
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            About <span className="text-pink-600">S-Kart</span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base sm:text-lg leading-7">
            S-Kart is a modern e-commerce platform designed to make
            online shopping simple, convenient, and enjoyable.
          </p>

        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              S-Kart is an e-commerce web application created to provide
              users with a smooth and user-friendly shopping experience.
              Users can explore products, search for items, browse
              categories, manage their cart, and place orders.
            </p>

            <p className="text-gray-600 leading-7">
              Our goal is to build a simple and responsive shopping
              platform that works smoothly across desktop, tablet,
              and mobile devices.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">

            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              What We Offer
            </h3>

            <ul className="space-y-4 text-gray-600">

              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">✓</span>
                Easy product search and browsing
              </li>

              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">✓</span>
                Product categories and filtering
              </li>

              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">✓</span>
                Shopping cart management
              </li>

              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">✓</span>
                Secure user authentication
              </li>

              <li className="flex gap-3">
                <span className="text-pink-600 font-bold">✓</span>
                Simple and responsive interface
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-white py-14">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why Choose S-Kart?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy Shopping
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Browse and discover products with a simple interface.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Responsive Design
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Enjoy a consistent shopping experience on different
                screen sizes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Product Variety
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Explore products from different categories in one place.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                User Friendly
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                Designed with a clean and straightforward user experience.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          Our Mission
        </h2>

        <p className="text-gray-600 leading-7">
          Our mission is to create a reliable and easy-to-use e-commerce
          experience where users can discover products, manage their
          shopping journey, and place orders with ease.
        </p>

      </section>

    </div>
  );
}


