
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navber() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [textsearch, settextsearch] = useState("");
  const [categorie, setcategorie] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  // ================= SEARCH =================
  const headlSearch = () => {
    if (!textsearch.trim()) return;

    navigate("/search", {
      state: {
        searchText: textsearch,
      },
    });

    console.log(textsearch);

    settextsearch("");
  };

  // ================= CATEGORY API =================
  const api = async () => {
    try {
      const getData = await axios.get(
        "https://dummyjson.com/products/category-list"
      );

      setcategorie(getData.data);
      console.log(getData.data);
    } catch (error) {
      console.log("Category API Error:", error);
    }
  };

  // ================= USE EFFECT =================
  useEffect(() => {
    api();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ================================================= */}
      {/* ===================== NAVBAR ==================== */}
      {/* ================================================= */}

      <nav
        className={`w-full fixed top-0 z-50 px-4 md:px-6 py-3
        transition-all duration-300
        ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >

        {/* ================= MOBILE NAVBAR ================= */}
     

        <div className="md:hidden">

          {/* ================= TOP ROW ================= */}
          <div
            className={`
              flex items-center justify-between
              overflow-hidden
              transition-all duration-300
              ${
                scrolled
                  ? "h-0 opacity-0"
                  : "h-10 opacity-100"
              }
            `}
          >
            {/* Logo */}
            <Link to="/"
            onClick={() => { window.scrollTo({ top: 0, behavior: "smooth", }); }}
            >
              <div className="text-2xl font-bold text-blue-600">
                 S-Kart
              </div>
            </Link>

            {/* Icons */}
            <div className="flex items-center gap-4 text-xl">

              {/* Wishlist */}
              {/* <button className="hover:scale-110 transition">
                ❤️
              </button> */}

              {/* Cart */}
              <Link to="/Cart">
                <button className="hover:scale-110 transition">
                  🛒
                </button>
              </Link>

              {/* Profile */}
              <Link to="/Profile/Check/User">
                <button className="hover:scale-110 transition">
                  👤
                </button>
              </Link>

            </div>
          </div>

          {/* */}
          <div
            className={`
              flex items-center
              border rounded-lg
              px-3 py-2
              bg-white
              transition-all duration-300
              ${
                scrolled
                  ? "mt-0"
                  : "mt-3"
              }
            `}
          >

            {/* Scroll  Logo */}
            <Link to="/"
            onClick={() => { window.scrollTo({ top: 0, behavior: "smooth", }); }}
            >
              <div
                className={`
                  font-bold text-blue-600
                  whitespace-nowrap
                  overflow-hidden
                  transition-all duration-300
                  ${
                    scrolled
                      ? "w-auto opacity-100 mr-3"
                      : "w-0 opacity-0 mr-0"
                  }
                `}
              >
                 S-Kart
              </div>
            </Link>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Products..."
              className="outline-none w-full bg-transparent text-sm"
              value={textsearch}
              onChange={(e) =>
                settextsearch(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  headlSearch();
                }
              }}
            />

            {/* Search Icon */}
            <span
              onClick={headlSearch}
              className="cursor-pointer ml-2 text-lg"
            >
              🔍
            </span>

          </div>
        </div>

       

        <div className="hidden md:flex max-w-7xl mx-auto items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link to="/"
          onClick={() => { window.scrollTo({ top: 0, behavior: "smooth", }); }}
          >
            <div className="text-2xl font-bold text-blue-600">
             S-Kart
            </div>
          </Link>

          {/* ================= LINKS ================= */}
          <div className="flex items-center gap-8">

            {/* Home */}
            <Link
              to="/"
               onClick={() => { window.scrollTo({ top: 0, behavior: "smooth", }); }}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            {/* Categories */}
            <button
              onClick={() =>
                setCategoryOpen(!categoryOpen)
              }
              className="text-gray-700 hover:text-blue-600"
            >
              Categories
            </button>

            {/* Shop */}
            <Link to="/Shop/top/button">
              <button className="text-gray-700 hover:text-blue-600">
                Shop
              </button>
            </Link>

          </div>

          {/* ================= SEARCH ================= */}
          <div className="flex items-center border rounded-lg px-3 py-2 w-64">

            <input
              type="text"
              placeholder="Search products..."
              className="outline-none w-full"
              value={textsearch}
              onChange={(e) =>
                settextsearch(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  headlSearch();
                }
              }}
            />

            <span
              onClick={headlSearch}
              className="cursor-pointer ml-2"
            >
              🔍
            </span>

          </div>

          {/* ================= RIGHT ICONS ================= */}
          <div className="flex items-center gap-5">

            {/* Wishlist */}
            {/* <button className="text-gray-700 hover:text-red-500 text-xl">
              ❤️
            </button> */}

            {/* Cart */}
            <Link to="/add/card">
              <button className="text-gray-700 hover:text-blue-600 text-xl">
                🛒
              </button>
            </Link>

            {/* Profile */}
            <Link to="/Profile/Check/User">
              <button className="text-gray-700 hover:text-blue-600 text-xl">
                👤
              </button>
            </Link>

          </div>
        </div>
      </nav>

  
      

      {categoryOpen && (
        <div
          className="
            fixed
            top-20
            left-1/2
            -translate-x-1/2
            w-[90%]
            max-w-4xl
            bg-white
            shadow-2xl
            rounded-xl
            p-6
            z-40
          "
        >

          {/* Heading */}
          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold">
              Categories
            </h2>

            <button
              onClick={() => setCategoryOpen(false)}
              className="text-xl text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {categorie.map((value, index) => (
              <button
                key={index}
                className="
                  p-4
                  bg-gray-100
                  rounded-lg
                  hover:bg-blue-100
                  transition
                  capitalize
                "
              >
                {value}
              </button>
            ))}

          </div>

        </div>
      )}
    </>
  );
}

export default Navber;


