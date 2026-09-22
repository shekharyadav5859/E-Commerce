import React, { useState } from "react";
import { toast } from "react-toastify";
import UserPage from "./UserPage";
import { Link, Navigate, useNavigate } from "react-router-dom";



export default function UserSignup() {
    const navigate = useNavigate();
  const[from , setfrom] = useState({
   name:"",
   email:"",
   pass:""
  
  })

  const handcompent = (e)=>{
    const{name ,value} =e.target;
     setfrom({
      ...from,
      [name]:value
     })

  }



 const handleSubmit = (e) => {
  e.preventDefault();
if (!from.name || !from.email || !from.pass) { 
  toast.warning("Please fill all fields!"); 
  return;
 }

  const oldUser = JSON.parse(localStorage.getItem("userData")) || [];

  const userExists = oldUser.some( (user) =>user.email.toLowerCase() === from.email.toLowerCase());

  if (userExists) {
    toast.error("User already exists! Please login.");
    return;
  }


  // Signup data temporary save
    localStorage.setItem( "pendingSignup", JSON.stringify({ name: from.name, email: from.email, pass: from.pass }) );
    localStorage.setItem("otpEmail", from.email);
    navigate("/User/Login/OTP/",
       { state: { type: "signup", email: from.email } });

 
};

  return (
  <>
    
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10 mt-[50px]">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Sign up to start shopping with us
          </p>
        </div>

        {/* Signup Form */}
        <form className="space-y-4"  onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>

            <input
             name="name"
             value={from.name}
             onChange={handcompent}
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              name="email"
              value={from.email}
              onChange={handcompent}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              name="pass"
              value={from.pass}
              onChange={handcompent}
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
            />

            <p className="text-gray-500">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                Terms & Conditions
              </span>
            </p>
          </div>

       

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition"
          >
            Email Verifecation
          </button>

        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
          to={'/Login/User'}
          >
          <span className="text-blue-600 font-semibold cursor-pointer">
            Login
          </span>
          </Link>
          {/* <span className="text-blue-600 font-semibold cursor-pointer">
            Login
          </span> */}
        </p>

      </div>

    </div>
    </>
  );
}