import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export function OneCategoryPage()  {
      const { category, id } = useParams();

  const location = useLocation();
  const product = location.state?.product;

  console.log(product);

  return (
   <>
      


    <div className="min-h-screen bg-gray-50 pt-24 px-4 md:px-8 pb-12">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Home /{" "}
          <span className="capitalize">
            {category.replaceAll("-", " ")}
          </span>{" "}
          /{" "}
          <span className="text-gray-800">
            {product.title}
          </span>
        </div>

        {/* Main Product Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 md:p-10">

            {/* Product Image */}
            <div className="flex items-center justify-center">

              <div className="w-full h-[350px] md:h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain hover:scale-105 transition duration-500"
                />

              </div>

            </div>


            {/* Product Information */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {category.replaceAll("-", " ")}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">

                <div className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  ⭐ {product.rating}
                </div>

                <span className="text-gray-500">
                  Customer Reviews
                </span>

              </div>

              <div className="border-t my-6"></div>

              {/* Price */}
              <div>
                <p className="text-sm text-gray-500">
                  Price
                </p>

                <div className="flex items-center gap-3 mt-1">

                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    $
                    {Math.round(
                      product.price +
                      (product.price * product.discountPercentage) / 100
                    )}
                  </span>

                  <span className="text-green-600 font-semibold">
                    {product.discountPercentage}% OFF
                  </span>

                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mt-6">
                {product.description}
              </p>

              {/* Stock */}
              <div className="mt-5">

                {product.stock > 0 ? (
                  <span className="text-green-600 font-semibold">
                    ✓ In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Out of Stock
                  </span>
                )}

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-7">

                <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-xl transition">
                  🛒 Add to Cart
                </button>


                      <Link
                  to={`/BuyNow/Order/${product.title}/${product.id}`}
                  state={{product}}
                   className="flex-1"
                  >
                   <button className=" w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition">
                  Buy Now
                </button>
                  
                  </Link> 
{/* 
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition">
                  Buy Now
                </button> */}

              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-3 mt-7">

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500">
                    Brand
                  </p>
                  <p className="font-semibold mt-1">
                    {product.brand || "N/A"}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500">
                    SKU
                  </p>
                  <p className="font-semibold mt-1">
                    {product.sku || `SKU-${id}`}
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Bottom Features */}
          <div className="border-t grid grid-cols-2 md:grid-cols-4">

            <div className="p-5 text-center border-b md:border-b-0 md:border-r">
              <div className="text-2xl">🚚</div>
              <p className="font-semibold mt-2">
                Free Delivery
              </p>
              <p className="text-xs text-gray-500">
                On eligible orders
              </p>
            </div>

            <div className="p-5 text-center border-b md:border-b-0 md:border-r">
              <div className="text-2xl">↩️</div>
              <p className="font-semibold mt-2">
                Easy Returns
              </p>
              <p className="text-xs text-gray-500">
                Hassle-free returns
              </p>
            </div>

            <div className="p-5 text-center border-r">
              <div className="text-2xl">🔒</div>
              <p className="font-semibold mt-2">
                Secure Payment
              </p>
              <p className="text-xs text-gray-500">
                100% secure checkout
              </p>
            </div>

            <div className="p-5 text-center">
              <div className="text-2xl">⭐</div>
              <p className="font-semibold mt-2">
                Top Quality
              </p>
              <p className="text-xs text-gray-500">
                Quality guaranteed
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>



   </>
  )
}
