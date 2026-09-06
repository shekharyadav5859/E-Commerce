import { Link } from "react-router-dom";

function Navber(){
    return(
        <>
        <nav className="w-full bg-white shadow-md px-6 py-4  fixed z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          ShopKart
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
<Link
  to="/"
  className="text-gray-700 hover:text-blue-600"
>
 Home
</Link>
          

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Categories
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Shop
          </a>

        </div>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-64">
          <span className="mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none w-full"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Wishlist */}
          <button className="text-gray-700 hover:text-red-500 text-xl">
            ❤️
          </button>

          {/* Cart */}
          <button className="text-gray-700 hover:text-blue-600 text-xl">
            🛒
          </button>

          {/* Profile */}
          <button className="text-gray-700 hover:text-blue-600 text-xl">
            👤
          </button>

        </div>

      </div>

      {/* Mobile Search */}
<div className="md:hidden mt-4 px-4">
  <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
    <span className="mr-2">🔍</span>

    <input
      type="text"
      placeholder="Search products..."
      className="outline-none w-full"
    />
  </div>
</div>
    </nav>
        </>
    )
}
export default Navber;