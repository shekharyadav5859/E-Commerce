import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  // Get categories from API
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/category-list"
      );

      setCategories(response.data);
    } catch (error) {
      console.log("Category Error:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Important categories
  const importantCategories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "laptops",
    "smartphones",
    "mens-shirts",
    "mens-shoes",
    "womens-dresses",
    "womens-shoes",
    "sunglasses",
    "sports-accessories",
  ];

  // Category Icons
  const getIcon = (category) => {
    const icons = {
      beauty: "💄",
      fragrances: "🌸",
      furniture: "🛋️",
      groceries: "🛒",
      laptops: "💻",
      smartphones: "📱",
      "mens-shirts": "👕",
      "mens-shoes": "👟",
      "womens-dresses": "👗",
      "womens-shoes": "👠",
      sunglasses: "🕶️",
      "sports-accessories": "⚽",
    };

    return icons[category] || "🛍️";
  };

  return (
    <section className="bg-white border-y shadow-sm">


      <div className="max-w-7xl mx-auto px-4 py-5">

        {/* Horizontal Category List */}
        <div
          className="
            flex
            gap-8
            overflow-x-auto
            pb-3
                [&::-webkit-scrollbar]:hidden
 
          "
        >

          {categories
            .filter((category) =>
              importantCategories.includes(category)
            )
            .map((category) => (

              <button
                key={category}
                className="
                  min-w-[100px]
                  flex-shrink-0
                  flex
                  flex-col
                  items-center
                  gap-2
                  group
                "
              >

                {/* ICON BOX */}
               <Link
               to={`/Categories/${category}`}
               >
                 <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    text-4xl
                    border
                    border-gray-200
                    group-hover:bg-blue-50
                    group-hover:border-blue-400
                    group-hover:scale-105
                    transition-all
                    duration-200
                  "
                >
                  {getIcon(category)}
                </div>
               
               </Link>

             

                {/* CATEGORY NAME */}
                <span
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    capitalize
                    whitespace-nowrap
                    group-hover:text-blue-600
                  "
                >
                  {category.replaceAll("-", " ")}
                </span>

              </button>

            ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;