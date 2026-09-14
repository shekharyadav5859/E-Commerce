import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function UserPage() {
    
const [user, setUser] = useState(null);
let text = useRef(null);

useEffect(() => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  setUser(currentUser);
}, []);
const handleLoginClick = (e) => {
  if (user) {
    e.preventDefault();
    let currtext = text.current.innerText;
    toast.warning(`User already ${currtext}!`);
    return;
  }
};
 
const UserCheck = (e) => {
  if (!user) {
    e.preventDefault();
    toast.error("User first Login / SingUp");
    return;
  }
};
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-10 px-4 sm:px-6">

      <div className="max-w-5xl mx-auto">

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5">

          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
            {user? user.name.charAt(0):"👤"}
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900">
              {user? user.name :  "YourName SarName"}
         
            </h1>

            <p className="text-gray-500 mt-1">
               {user ? user.email : "yourname@example.com"}
            </p>

            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition">
              Edit Profile
            </button>
          </div>

        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">

          {/* Login */}
          <Link
          to={'/Login/User'}
          onClick={handleLoginClick}
          >

            
            <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
          🔐
            </div>

            <h2  ref={text} className="text-lg font-bold text-gray-900">
                  Login
            </h2>

            <p className="text-gray-500 text-sm mt-1">
             Already have an account? Login here.
            </p>
          </div>


          </Link>
         

              {/* SingUp */}
         <Link
        onClick={handleLoginClick}
         to={'/singup'}
         >
         
         <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
              👋 
            </div>

            <h2 ref={text} className="text-lg font-bold text-gray-900">
              Create Account 
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              New here? Create your account.
            </p>
          </div>
         </Link>

          
           {/* My Order */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
                📦
            </div>

            <h2 className="text-lg font-bold text-gray-900">
               My Orders
            </h2>

            <p className="text-gray-500 text-sm mt-1">
             Track and manage your orders
            </p>
          </div>

          {/* Wishlist */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
              ❤️
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Wishlist
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              View your saved products
            </p>
          </div>

          {/* Address */}
        <Link
        to={`/user/add/save`}
        state={{user}}
        onClick={UserCheck}
        >
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
               🏠
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              My Address
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Manage your delivery addresses
            </p>
          </div>
        </Link>


       

          {/* Cart */}
        <Link
        to={`/AddToCard/${user?.name}/${user?.id}`}
        >
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
              🛒
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              My Cart
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              View products in your cart
            </p>
          </div>
        
        </Link>



        
       

          {/* Settings */}
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
              ⚙️
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Settings
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Manage your account settings
            </p>
          </div>

          {/* Logout */}
       <Link
       to={'/delet/user'}
       >
       
          <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
            <div className="text-3xl mb-4">
              🚪
            </div>

            <h2 className="text-lg font-bold text-red-600">
              Logout
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Sign out from your account
            </p>
          </div>
       </Link>

         

        </div>

      </div>
    </div>
  );
}



