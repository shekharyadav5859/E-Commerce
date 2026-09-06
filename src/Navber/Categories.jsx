import axios from "axios";
import { useEffect, useState } from "react";

function Categories({ onCategorySelect }) {

  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //  View All 
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold text-gray-800">
          Shop by Category
        </h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 font-medium hover:underline"
        >
          {showAll ? "Show Less" : "View All"}
        </button>

      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">

        {visibleCategories.map((category) => (

          <div
            key={category}
            onClick={() => onCategorySelect(category)}
            className="bg-white border rounded-xl p-6 text-center
                       cursor-pointer
                       hover:shadow-lg hover:-translate-y-1
                       transition duration-300"
          >

            {/* <div className="text-5xl mb-4">
              🛍️
            </div> */}

            <h3 className="font-semibold text-gray-700 capitalize">
              {category.replace("-", " ")}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;