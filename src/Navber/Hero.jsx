import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
<section className="w-[95%] mx-auto mt-28 bg-gradient-to-r from-blue-600 to-purple-600  ">
      <div className="max-w-7xl mx-auto px-6 py-20 flex items-center justify-between">

        {/* Left Content */}
        <div className="text-white max-w-xl">
          <p className="text-lg font-medium mb-3">
            Welcome to ShopKart
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-5">
            Discover Amazing Products
          </h1>

          <p className="text-lg mb-8 text-blue-100">
            Shop the latest products at the best prices.
            Get exciting deals and offers every day.
          </p>
        

        <Link
        to={'/Shop/top/button'}
        >
          <button className="bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>
        
        </Link>
        
        </div>

        {/* Right Side */}
        <div className="hidden md:block">
          <div className="text-[180px]">
            🛍️
          </div>
        </div>

      </div>
    </section>
    
    </>
  );
}

export default Hero;