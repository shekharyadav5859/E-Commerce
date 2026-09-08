

import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export function SingalProductSearch() {
  const { id } = useParams();
  const location = useLocation();

  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  // Product nahi mila
  if (!product) {
    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛍️</div>

          <h1 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            This product may no longer be available.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const oldPrice = Math.round(
    product.price +
      (product.price * (product.discountPercentage || 0)) / 100
  );

  return (
    <>
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* ================= BREADCRUMB ================= */}

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-gray-700">
            Products
          </span>

          <span>/</span>

          <span className="text-gray-900 font-medium truncate max-w-[220px]">
            {product.title}
          </span>

        </div>


        {/* ================= PRODUCT CARD ================= */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 p-5 sm:p-8 lg:p-12">


            {/* ================= LEFT IMAGE ================= */}

            <div>

              {/* Main Image */}

              <div className="relative h-[350px] sm:h-[450px] lg:h-[520px] bg-gray-50 rounded-3xl flex items-center justify-center overflow-hidden">

                {/* Discount */}

                {product.discountPercentage && (
                  <span className="absolute top-5 left-5 z-10 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    -{product.discountPercentage}%
                  </span>
                )}

                {/* Wishlist */}

                <button
                  className="absolute top-5 right-5 z-10 w-11 h-11 bg-white rounded-full shadow-md flex items-center justify-center text-xl hover:scale-110 transition"
                >
                  ♡
                </button>

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain p-8 hover:scale-110 transition duration-500"
                />

              </div>


              {/* Small Image Gallery */}

              {product.images?.length > 0 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

                  {product.images.slice(0, 5).map((image, index) => (

                    <div
                      key={index}
                      className="w-20 h-20 min-w-20 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-500 transition"
                    >

                      <img
                        src={image}
                        alt={`${product.title}-${index}`}
                        className="w-full h-full object-contain p-2"
                      />

                    </div>

                  ))}

                </div>
              )}

            </div>


            {/* ================= RIGHT INFORMATION ================= */}

            <div className="flex flex-col justify-center">


              {/* Category */}

              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                {product.category || "Product"}
              </p>


              {/* Title */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-3">
                {product.title}
              </h1>


              {/* Rating */}

              <div className="flex items-center gap-3 mt-5">

                <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm">
                  ⭐ {product.rating || "4.5"}
                </div>

                <span className="text-gray-400">
                  |
                </span>

                <span className="text-gray-600 text-sm">
                  {product.reviews?.length || 100}+ Customer Reviews
                </span>

              </div>


              {/* Divider */}

              <div className="border-t border-gray-200 my-6"></div>


              {/* PRICE */}

              <div>

                <p className="text-sm text-gray-500 mb-1">
                  Special Price
                </p>

                <div className="flex items-center gap-3 flex-wrap">

                  <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                  {product.discountPercentage && (
                    <span className="text-lg text-gray-400 line-through">
                      ${oldPrice}
                    </span>
                  )}

                  {product.discountPercentage && (
                    <span className="text-green-600 font-bold">
                      {product.discountPercentage}% OFF
                    </span>
                  )}

                </div>

                <p className="text-sm text-green-600 font-medium mt-2">
                  Inclusive of all taxes
                </p>

              </div>


              {/* DESCRIPTION */}

              <p className="text-gray-600 leading-7 mt-6">
                {product.description}
              </p>


              {/* STOCK */}

              <div className="mt-5">

                {product.stock > 0 ? (

                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                    In Stock
                    <span className="text-gray-500 font-normal">
                      ({product.stock} available)
                    </span>
                  </div>

                ) : (

                  <div className="text-red-500 font-semibold">
                    ✕ Out of Stock
                  </div>

                )}

              </div>


              {/* QUANTITY */}

              {product.stock > 0 && (

                <div className="flex items-center gap-4 mt-6">

                  <span className="font-semibold text-gray-700">
                    Quantity:
                  </span>

                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">

                    <button
                      onClick={() =>
                        setQuantity((q) => Math.max(1, q - 1))
                      }
                      className="w-10 h-10 hover:bg-gray-100 text-lg"
                    >
                      −
                    </button>

                    <span className="w-10 text-center font-semibold">
                      {quantity}
                    </span>

                    <button
                      onClick={() =>
                        setQuantity((q) =>
                          Math.min(product.stock, q + 1)
                        )
                      }
                      className="w-10 h-10 hover:bg-gray-100 text-lg"
                    >
                      +
                    </button>

                  </div>

                </div>
              )}


              {/* BUTTONS */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

                <button
                  disabled={product.stock <= 0}
                  className="py-4 rounded-xl border-2 border-yellow-400 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed text-gray-900 font-bold transition shadow-sm"
                >
                  🛒 Add to Cart
                </button>

                <button
                  disabled={product.stock <= 0}
                  className="py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold transition shadow-sm"
                >
                  Buy Now
                </button>

              </div>


              {/* PRODUCT DETAILS */}

              <div className="grid grid-cols-2 gap-3 mt-7">

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase">
                    Brand
                  </p>

                  <p className="font-semibold text-gray-800 mt-1">
                    {product.brand || "N/A"}
                  </p>
                </div>


                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase">
                    SKU
                  </p>

                  <p className="font-semibold text-gray-800 mt-1">
                    {product.sku || `SKU-${id}`}
                  </p>
                </div>


                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase">
                    Category
                  </p>

                  <p className="font-semibold text-gray-800 mt-1 capitalize">
                    {product.category || "N/A"}
                  </p>
                </div>


                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 uppercase">
                    Availability
                  </p>

                  <p className="font-semibold text-green-600 mt-1">
                    {product.stock > 0 ? "Available" : "Unavailable"}
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="border-t border-gray-200 grid grid-cols-2 md:grid-cols-4">

            <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">

              <div className="text-3xl">
                🚚
              </div>

              <h3 className="font-bold mt-3">
                Free Delivery
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                On eligible orders
              </p>

            </div>


            <div className="p-6 text-center border-b md:border-b-0 md:border-r border-gray-200">

              <div className="text-3xl">
                ↩️
              </div>

              <h3 className="font-bold mt-3">
                Easy Returns
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Hassle-free returns
              </p>

            </div>


            <div className="p-6 text-center border-r border-gray-200">

              <div className="text-3xl">
                🔒
              </div>

              <h3 className="font-bold mt-3">
                Secure Payment
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                100% secure checkout
              </p>

            </div>


            <div className="p-6 text-center">

              <div className="text-3xl">
                ⭐
              </div>

              <h3 className="font-bold mt-3">
                Top Quality
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Quality guaranteed
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
 </> 
);
 }