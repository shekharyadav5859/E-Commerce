import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white border rounded-xl overflow-hidden hover:shadow-xl transition"
        >
          {/* Product Image */}
          <div className="h-56 bg-gray-100 overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            {/* Category */}
            <p className="text-sm text-gray-500 capitalize">
              {product.category}
            </p>

            {/* Title */}
            <h3 className="font-semibold text-lg mt-1 line-clamp-1">
              {product.title}
            </h3>

            {/* Rating */}
            <div className="mt-2 text-yellow-500">
              ⭐ {product.rating}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-bold">
                ${product.price}
              </span>

              <span className="text-gray-400 line-through">
                $
                {Math.round(
                  product.price /
                    (1 - product.discountPercentage / 100)
                )}
              </span>
            </div>

            {/* Add To Cart */}
            <button
              className="
                w-full
                mt-4
                bg-blue-600
                text-white
                py-2.5
                rounded-lg
                hover:bg-blue-700
                transition
              "
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;



