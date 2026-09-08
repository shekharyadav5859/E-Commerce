import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';


export function Search(){
    //https://dummyjson.com/products/search?q=phone
     const location = useLocation();
  const searchText = location.state?.searchText;
  console.log(searchText);
    let[search , setsearch] = useState([]);
    let api = async()=>{
    let searchdata = await axios.get(`https://dummyjson.com/products/search?q=${searchText}`);

    setsearch(searchdata.data.products);
     
 

    }
    useEffect(()=>{
         if (searchText) {
    api();
  }
    },[searchText]);
  return (
   <>
 
<div className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto">

  {/* Search Heading */}
  <div className="mb-8">
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
      Search Results
    </h1>

    <p className="text-gray-500 mt-1">
      Showing results for{" "}
      <span className="font-semibold text-gray-800">
        "{searchText}"
      </span>
    </p>
  </div>

  {/* No Result */}
  {search.length === 0 ? (
    <div className="text-center py-20">
      <div className="text-5xl mb-4">🔍</div>

      <h2 className="text-xl font-semibold text-gray-700">
        No products found
      </h2>

      <p className="text-gray-500 mt-2">
        Try searching with a different keyword.
      </p>
    </div>
  ) : (

    /* Products */
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

      {search.map((product) => (

        <div
          key={product.id}
          className="
            bg-white
            border
            border-gray-200
            rounded-xl
            overflow-hidden
            hover:shadow-lg
            transition
            duration-300
            group
          "
        >

          {/* Image */}
          <div className="h-44 sm:h-52 bg-gray-100 overflow-hidden">

            <img
              src={product.thumbnail}
              alt={product.title}
              className="
                w-full
                h-full
                object-cover
                group-hover:scale-105
                transition
                duration-300
              "
            />

          </div>

          {/* Product Info */}
          <div className="p-3 sm:p-4">

            {/* Title */}
            <h2
              className="
                font-semibold
                text-gray-800
                text-sm
                sm:text-base
                line-clamp-2
                min-h-[40px]
              "
            >
              {product.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">

              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                ⭐ {product.rating}
              </span>

            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mt-3">

              <span className="text-lg sm:text-xl font-bold text-gray-900">
                ${product.price}
              </span>

              {product.discountPercentage && (
                <span className="text-xs sm:text-sm text-green-600">
                  {Math.round(product.discountPercentage)}% off
                </span>
              )}

            </div>

            {/* Stock */}
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {product.stock > 0
                ? `${product.stock} items available`
                : "Out of stock"}
            </p>

            {/* Button */}
            <Link
            to={`/serch/${product.title}/${product.id}`}
            state={{product:product}}
            >
                 <button
    className="
      w-[85%] sm:w-full
      bg-blue-600
      text-white
      py-1.5 sm:py-2
      text-xs sm:text-sm
      rounded-lg
      font-medium
      hover:bg-blue-700
      transition
    "
  >
    View Product
  </button>
            </Link>
         

          </div>

        </div>

      ))}

    </div>
  )}

</div>



   </>
  )

 


}