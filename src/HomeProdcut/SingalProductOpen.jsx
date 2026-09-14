import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { OfferBanner } from '../Navber/OfferBanner';
import { EtinaProducutApi } from './EtinaProducutApi';

export function SingalProductOpen ()  {

  const{title, id} = useParams();
  let location = useLocation();
  const product = location.state?.product;

    const [selectedImage, setSelectedImage] = useState(product.images?.[0]);
 
  return (
    <>
    <OfferBanner/>
   <div className="min-h-screen bg-gray-50 pt-15 pb-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <span>/</span>

          <span className="capitalize">
            {product.category?.name}
          </span>

          <span>/</span>

          <span className="text-gray-800 truncate">
            {product.title}
          </span>

        </div>


        {/* Main Product */}

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">


            {/* ================= IMAGE ================= */}

           <div>

  {/* ================= MAIN IMAGE ================= */}

  <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] bg-gray-50 rounded-3xl flex items-center justify-center overflow-hidden">

    {/* Wishlist */}

    <button className="absolute right-5 top-5 z-10 w-11 h-11 rounded-full bg-white shadow-md text-2xl hover:scale-110 transition">
      ♡
    </button>

    <img
      src={selectedImage}
      alt={product.title}
      className="w-full h-full object-contain p-8 hover:scale-105 transition duration-500"
    />

  </div>


  {/* ================= IMAGE GALLERY ================= */}

  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">

    {product.images?.map((image, index) => (

      <button
        key={index}
        onClick={() => setSelectedImage(image)}
        className={`
          w-20 h-20 min-w-20
          bg-gray-50
          rounded-xl
          flex items-center justify-center
          overflow-hidden
          transition
          border-2
          ${
            selectedImage === image
              ? "border-blue-600"
              : "border-gray-200 hover:border-blue-400"
          }
        `}
      >

        <img
          src={image}
          alt={`${product.title} ${index + 1}`}
          className="w-full h-full object-contain p-2"
        />

      </button>

    ))}

  </div>

</div>


            {/* ================= PRODUCT INFO ================= */}

            <div className="flex flex-col justify-center">

              {/* Category */}

              <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">
                {product.category?.name}
              </p>


              {/* Title */}

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight">
                {product.title}
              </h1>


              {/* Product ID */}

              <p className="text-sm text-gray-400 mt-3">
                Product ID: #{product.id}
              </p>


              {/* Divider */}

              <div className="border-t my-6"></div>


              {/* Price */}

              <div>

                <p className="text-sm text-gray-500">
                  Price
                </p>

                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>

              </div>


              {/* Description */}

              <p className="text-gray-600 leading-7 mt-6">
                {product.description}
              </p>


              {/* Category */}

              <div className="mt-6">

                <span className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold capitalize">
                  🏷️ {product.category?.name}
                </span>

              </div>


              {/* Buttons */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

               <Link
               to={`/AddToCard/${product.title}/${id}`}
               state={{product}}
                 className="flex-1"
               >
                <button className= "w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 rounded-xl font-bold transition">
                  🛒 Add to Cart
                </button>
               </Link>

                {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 rounded-xl font-bold transition">
                  🛒 Add to Cart
                </button> */}

                  <Link
                   
                  to={`/BuyNow/Order/${product.title}/${product.id}`}
                  state={{product}}
                  >
                   <button className=" w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition">
                  Buy Now
                </button>
                  
                  </Link> 


              </div>


              {/* Product Details */}

              <div className="grid grid-cols-2 gap-3 mt-7">

                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-xs text-gray-500">
                    Category
                  </p>

                  <p className="font-semibold mt-1 capitalize">
                    {product.category?.name}
                  </p>

                </div>


                <div className="bg-gray-50 rounded-xl p-4">

                  <p className="text-xs text-gray-500">
                    Product ID
                  </p>

                  <p className="font-semibold mt-1">
                    #{id}
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="border-t grid grid-cols-2 md:grid-cols-4">

            <div className="p-6 text-center border-b md:border-b-0 md:border-r">
              <div className="text-3xl">🚚</div>

              <p className="font-bold mt-2">
                Free Delivery
              </p>

              <p className="text-xs text-gray-500 mt-1">
                On eligible orders
              </p>
            </div>


            <div className="p-6 text-center border-b md:border-b-0 md:border-r">
              <div className="text-3xl">↩️</div>

              <p className="font-bold mt-2">
                Easy Returns
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Hassle-free returns
              </p>
            </div>


            <div className="p-6 text-center border-r">
              <div className="text-3xl">🔒</div>

              <p className="font-bold mt-2">
                Secure Payment
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Safe checkout
              </p>
            </div>


            <div className="p-6 text-center">
              <div className="text-3xl">⭐</div>

              <p className="font-bold mt-2">
                Quality Product
              </p>

              <p className="text-xs text-gray-500 mt-1">
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
