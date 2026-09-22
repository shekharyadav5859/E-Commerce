import { Link } from "react-router-dom";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import { useEffect, useState } from "react";

function Hero() {
  const [curr, setcurr] = useState(0);

  const img = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const interval = setInterval(() => {
      setcurr((prev) => (prev + 1) % img.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="  w-[95%] mx-auto mt-28
    h-[500px]
     md:bg-cover
    bg-center bg-no-repeat
    relative"
      style={{
        backgroundImage: `url(${img[curr]})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center min-h-[500px]">
        
        {/* Left Content */}
        <div className="text-white max-w-xl">
          <p className="text-lg font-medium mb-3">
            Welcome to S-Kart
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-5">
            Discover Amazing Products
          </h1>

          <p className="text-lg mb-8 text-blue-100">
            Shop the latest products at the best prices.
            Get exciting deals and offers every day.
          </p>

          <Link to="/Shop/top/button">
            <button className="bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Now
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;