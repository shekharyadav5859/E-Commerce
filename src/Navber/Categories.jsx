const categories = [
  {
    id: 1,
    name: "Fashion",
    icon: "👕",
  },
  {
    id: 2,
    name: "Electronics",
    icon: "📱",
  },
  {
    id: 3,
    name: "Laptops",
    icon: "💻",
  },
  {
    id: 4,
    name: "Shoes",
    icon: "👟",
  },
  {
    id: 5,
    name: "Home",
    icon: "🏠",
  },
  {
    id: 6,
    name: "Accessories",
    icon: "🎧",
  },
];

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Shop by Category
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">

        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white border rounded-xl p-6 text-center
                       cursor-pointer
                       hover:shadow-lg hover:-translate-y-1
                       transition duration-300"
          >
            <div className="text-5xl mb-4">
              {category.icon}
            </div>

            <h3 className="font-semibold text-gray-700">
              {category.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;