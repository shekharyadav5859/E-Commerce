import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [from, setfrom] = useState({
    email: "",
    pass: ""
  });

  const navigate = useNavigate();

  const handle = (e) => {
    const { name, value } = e.target;

    setfrom({
      ...from,
      [name]: value
    });
  };

  const fromhandal = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData")) || [];

    const loginUser = userData.find(
      (user) =>
        user.email.toLowerCase() === from.email.toLowerCase() &&
        user.pass === from.pass
    );

    if (!loginUser) {
      toast.error("Invalid email or password!");
      return;
    }
   
 


    localStorage.setItem("otpEmail" , loginUser.email)
    toast.success("Login successful! 🎉");
    
   navigate("/User/Login/OTP/",
     { state: { type: "login", email: loginUser.email } });
   
    // setTimeout(() => {
    //   navigate('/User/Login/OTP/');
    // }, 1000);
  };



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">

        {/* Icon */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">👋</div>

          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back!
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Login to your account
          </p>
        </div>

        <form onSubmit={fromhandal}>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>

            <input
              name="email"
              value={from.email}
              onChange={handle}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <input
              name="pass"
              value={from.pass}
              onChange={handle}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Login */}
        {/* <Link
        to={'/User/Login/OTP/'}
        state={{email:from.email}}
        >
        
        </Link> */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send OTP
          </button>

        </form>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-5">
          New user?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Create Account
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;