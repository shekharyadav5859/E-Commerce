import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-2xl font-bold text-white">
               S-Kart
            </h2>

            <p className="mt-4 text-gray-400">
              Your one-stop destination for amazing
              products at the best prices.
            </p>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">
                <Link
                
                to={'/'}
                >
                Home
                </Link>    

                
              </li>

              <li className="hover:text-white cursor-pointer">
                Shop
              </li>

              <li className="hover:text-white cursor-pointer">
                Categories
              </li>

              <li className="hover:text-white cursor-pointer">
                About Us
              </li>
            </ul>

          </div>


          {/* Customer Service */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-4">
              Customer Service
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer">
                Contact Us
              </li>

              <li className="hover:text-white cursor-pointer">
                Shipping
              </li>

              <li className="hover:text-white cursor-pointer">
                Returns
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
            </ul>

          </div>


          {/* Social */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

              <span className="cursor-pointer hover:text-white">
                📘
              </span>

              <span className="cursor-pointer hover:text-white">
                📸
              </span>

              <span className="cursor-pointer hover:text-white">
                🐦
              </span>

              <span className="cursor-pointer hover:text-white">
                ▶️
              </span>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2026  S-Kart. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;