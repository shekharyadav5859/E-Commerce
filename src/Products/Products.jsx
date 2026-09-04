const products = [
  {
    id: 1,
    name: "Premium T-Shirt",
    category: "Fashion",
    price: 799,
    oldPrice: 1299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    oldPrice: 2999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 2499,
    oldPrice: 3999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Shoes",
    price: 1599,
    oldPrice: 2499,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
];

function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-xl transition">

      {/* Image */}
      <div className="h-56 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-4">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="font-semibold text-lg mt-1">
          {product.name}
        </h3>

        <div className="mt-2 text-yellow-500">
          ⭐ {product.rating}
        </div>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-xl font-bold">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
}


function Products() {
  return (
    <>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Trending Products
          </h2>

          <button className="text-blue-600">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>


      {/* Best Sellers */}
      <section className="bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Best Sellers
            </h2>

            <button className="text-blue-600">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>

      </section>


      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            New Arrivals
          </h2>

          <button className="text-blue-600">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

    </>
  );
}

export default Products;