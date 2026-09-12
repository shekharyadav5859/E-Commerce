import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function OpenCategryPage() {
  const{category} = useParams();
  let[categoryProduct ,setCategorie] = useState([]);
  //https://dummyjson.com/products/category/smartphones
let api = async()=>{
let categoryData = await axios.get(`https://dummyjson.com/products/category/${category}`);
        setCategorie(categoryData.data.products);
        console.log(categoryData.data.products);

}

useEffect(()=>{
  api();
},[]);
  return (
   <>

       <div className="min-h-screen bg-gray-50 pt-24 px-4 mt-15 md:mt-[65px] md:px-8">

      {/* Category Header */}
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-6">

          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
            Category
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
                {category.replaceAll("-", " ")}
              </h1>

              <p className="text-gray-500 mt-2">
                Explore the latest products in this category
              </p>
            </div>

            {/* Product Count */}
            <div className="bg-blue-50 px-5 py-3 rounded-xl">
              <span className="text-sm text-gray-500">
                Products
              </span>
              <p className="text-xl font-bold text-blue-600">
                120+
              </p>
            </div>

          </div>
        </div>


        {/* Filter / Sort */}
        <div className="bg-white rounded-xl shadow-sm px-5 py-4 mb-6 flex flex-col sm:flex-row justify-between gap-4">

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            ☰ Filter
          </button>

          <select className="border px-4 py-2 rounded-lg outline-none">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>

        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

          {/* Product Card */}

        {categoryProduct.map((value ,index)=>{
            return(
              <>
                 <div 
                 key={index}
                 className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition">

            <div className="h-48 bg-gray-100">
              <img
                src={value.images[0]}
                alt="product"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="font-semibold text-gray-800 line-clamp-1">
             {value.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                ⭐ {value.rating}

              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-gray-900">
                ${value.price}
                </span>


                <Link
                to={`/Categories/${category}/${value.id}/${value.title}`}
            state={{ product: value }}
                >
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                  Add
                </button>
                </Link>
                
              </div>
            </div>

          </div>
              
              </>
            )

        })}

        

        </div>

      </div>
    </div>
   
   
   </>
  )
}
