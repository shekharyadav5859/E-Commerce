import axios from "axios";
import React, { useEffect, useState } from "react";

function Check() {
  const [products, setProducts] = useState([]);

  const api = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );

      setProducts(res.data);
    console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

  



      {/* ================= PRODUCTS ================= */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-indigo-600 font-semibold">
              Our Collection
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              Popular Products
            </h2>
          </div>

          <button className="hidden md:block border px-5 py-2 rounded-lg hover:bg-gray-200">
            View All
          </button>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="h-64 bg-gray-100 overflow-hidden relative">

                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Wishlist */}
                <button className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-red-50">
                  ♡
                </button>

              </div>


              {/* Product Details */}
              <div className="p-5">

                {/* Category */}
                <p className="text-sm text-gray-500">
                  {product.category?.name}
                </p>

                {/* Title */}
                <h3 className="font-semibold text-lg mt-1 line-clamp-1">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-yellow-400">
                    ★★★★★
                  </span>

                  <span className="text-xs text-gray-500">
                    (4.8)
                  </span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-4">

                  <p className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </p>

                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Add +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>


 

    </div>
  );
}

export default Check;