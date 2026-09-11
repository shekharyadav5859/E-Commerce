import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ThtinProdcutapi() {

  const [data, update] = useState([]);
  const [count, setcount] = useState(8);

  // ================= API =================

  const api = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products"
      );

      update(res.data.products);
      console.log(res.data);

    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    api();
  }, []);


  // ================= INFINITE SCROLL =================

  useEffect(() => {

    const handleScroll = () => {

      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom) {

        setcount((prev) => {

          if (prev >= data.length) {
            return prev;
          }

          return Math.min(prev + 4, data.length);
        });

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [data.length]);


  // ================= UI =================

  return (
    <>
      <div className="min-h-screen bg-gray-100">

        <main className="max-w-7xl mx-auto px-6 py-12">

          {/* Heading */}
{/* 
          <div className="mb-8">

            <p className="text-indigo-600 font-semibold">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              Popular Products
            </h2>

          </div> */}


          {/* Products Card */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {data.slice(0, count).map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
              >

                {/* Image */}

                <div className="h-64 bg-gray-100 overflow-hidden relative">
            
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                    ♡
                  </button>

                </div>


                {/* Details */}

                <div className="p-5">

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <h3 className="font-semibold text-lg mt-1 line-clamp-1">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-2">

                    <span className="text-yellow-400">
                      ★★★★★
                    </span>

                    <span className="text-xs text-gray-500">
                      (4.8)
                    </span>

                  </div>

                  <div className="flex items-center justify-between mt-4">

                    <p className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </p>
                   
                   <Link
                  to={`/main/singal/product/page/80api/${product.title}/${product.id}`}
                  state={{product:product}}                  
                  >
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Add +
                  </button>
                  
                  
                  </Link>

                  

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* Loading */}

          {count < data.length && (
            <div className="text-center py-10">

            <p className="text-gray-500">
  <span className="inline-block w-5 h-5 border-2 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></span>
</p>

            </div>
          )}


          {/* No More Products */}

          {count >= data.length && data.length > 0 && (
            <div className="text-center py-10">

              <p className="text-gray-500">
                No more products
              </p>

            </div>
          )}

        </main>

      </div>
    </>
  );
}