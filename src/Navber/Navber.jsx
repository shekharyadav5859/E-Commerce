import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Navber(){
  const [categoryOpen, setCategoryOpen] = useState(false);
  const[textsearch , settextsearch] = useState("");
    let[categorie , setcategorie] =useState('');
//search
console.log(textsearch);
   const navigate = useNavigate();
   const headlSearch =()=>{
    if(!textsearch.trim()) return

    navigate("/search", {
      state: {
        searchText: textsearch
      }
    });
    console.log(textsearch)

  settextsearch("");
  };
   
  

    let api = async()=>{
    const getData = await axios.get(`https://dummyjson.com/products/category-list`);
    setcategorie(getData.data);
    console.log(getData.data);
    }

    useEffect(()=>{
api();
    },[])
    

    return(
        <>
        <nav className="w-full bg-white shadow-md px-6 py-4  fixed  top-0 z-50  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
         Meesho
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
<Link
  to="/"
  className="text-gray-700 hover:text-blue-600"
>
 Home
</Link>

   {/* Categories */}
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              Categories
            </button>
          
       

         

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Shop
          </a>

        </div>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-64">
        
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none w-full"
            value={textsearch}
            onChange={(e)=>settextsearch(e.target.value)}
          />
           <span className="mr-2"
           onClick={headlSearch}
           >🔍</span>
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
   

    <input
      type="text"
      placeholder="Search products..."
      className="outline-none w-full"
       value={textsearch}
      onChange={(e)=>settextsearch(e.target.value)}
    />
     <span className="mr-2"
      onClick={headlSearch}
     >🔍</span>
  </div>
</div>
    </nav>
         {/* Category Popup */}
      {categoryOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2
                        w-[90%] max-w-4xl
                        bg-white shadow-2xl rounded-xl
                        p-6 z-40">

          <h2 className="text-2xl font-bold mb-5">
            Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
              categorie.map((value ,index)=>{
         return(
          <>
           <button className="p-4 bg-gray-100 rounded-lg hover:bg-blue-100">
              {value}
            </button>
          </>
         )

              })
            }

   

          </div>
        </div>
      )}
  
        </>
        
    )
}
export default Navber;

