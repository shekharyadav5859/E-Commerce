import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function Otp() {

  const [otpInput, setOtpInput] = useState("");
  const [loading, setLoading] = useState(false);
   
  const location = useLocation();
  const navigate = useNavigate();

  const sentRef = useRef(false);
    const type = location.state?.type || "login";
 const email = location.state?.email || localStorage.getItem("otpEmail");
 console.log("OTP Type:", type); 
 console.log("OTP Email:", email);

 


  const sendOtp = async () => {

    if (!email) {
      toast.error("Email not found!");
      return;
    }

    setLoading(true);

   const otp = String(Math.floor(100000 + Math.random() * 900000));
console.log(otp);
const templateParams = {
  email: email,
  passcode: otp,
  time: "15 minutes"
};



    try {

      const response = await emailjs.send(
        "service_bgyryaa",
        "template_ls5q7nu",
        templateParams,
        "4JVc8rt5UyVhNe4QP"
      );

      console.log("EMAILJS RESPONSE:", response);

      // OTP  successfully send 
      localStorage.setItem("otp", otp);

      toast.success("OTP sent successfully!");

    } catch (error) {

      console.log("error"+error);
      toast.error("Resend send OTP");

    } finally {

      setLoading(false);

    }
  };





  // page open OTP send
  useEffect(() => {

    if (!sentRef.current) {
      sentRef.current = true;
      sendOtp();
    }

  }, []);


const verifyOtp = () => { 
  const savedOtp = localStorage.getItem("otp");
   if (!savedOtp) { toast.error("Please request OTP first!");
     return;
     } 
     if (otpInput !== savedOtp) { toast.error("Invalid OTP!"); 
      return;
     }
toast.success("OTP verified successfully! 🎉");


if (type === "signup") { 
  const pendingSignup = JSON.parse( localStorage.getItem("pendingSignup") );
   if (!pendingSignup) {
     toast.error("Signup data not found!");
      return;
     } 
     const oldUser = JSON.parse( localStorage.getItem("userData") ) || [];
      const newUser = { id: Date.now(),
         name: pendingSignup.name, 
         email: pendingSignup.email,
          pass: pendingSignup.pass, 
          likeProduct: [],
           orderArray: [],
            myAddress: [], 
            cartDetails: []
           }; 
      // User save 
       oldUser.push(newUser); 
       localStorage.setItem( "userData", JSON.stringify(oldUser) ); 
       //Current logged-in user 
       localStorage.setItem( "currentUser", JSON.stringify(newUser) );
       localStorage.removeItem("pendingSignup"); 
       toast.success("Account created successfully! 🎉");

         setTimeout(() => {
           navigate("/Profile/Check/User");
           }, 1000);
            return;

        }

        if (type === "login") {
           const userData = JSON.parse( localStorage.getItem("userData") ) || [];
            
           const loginUser = userData.find( (user) => user.email.toLowerCase() === email.toLowerCase() ); 
           if (!loginUser) { toast.error("User not found!"); return; } 
           // OTP verify ke baad currentUser l
            localStorage.setItem( "currentUser", JSON.stringify(loginUser) );
             toast.success("Login successful! 🎉"); 
             setTimeout(() => { navigate("/"); }, 1000); 
             return; 
            }
              toast.error("Invalid OTP request!");
      }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 sm:p-8">

        {/* Icon */}
        <div className="flex justify-center mb-5">

          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
            🔐
          </div>

        </div>


        {/* Heading */}
        <div className="text-center">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Verify Your Email
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            We've sent a 6-digit OTP to
          </p>

          <p className="font-semibold text-gray-800 mt-1 break-all">
            {email}
          </p>

        </div>


        {/* OTP */}
        <div className="mt-8">

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter OTP
          </label>

          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={otpInput}
            onChange={(e) =>
              setOtpInput(
                e.target.value.replace(/\D/g, "")
              )
            }
            placeholder="Enter 6-digit OTP"
            className="w-full text-center tracking-[0.5em] text-xl font-semibold
            border border-gray-300 rounded-xl px-4 py-4
            outline-none focus:border-blue-500
            focus:ring-2 focus:ring-blue-100 transition"
          />

        </div>


        {/* Verify */}
        <button
          onClick={verifyOtp}
          disabled={otpInput.length !== 6}
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700
          disabled:bg-gray-300 disabled:cursor-not-allowed
          text-white py-3.5 rounded-xl font-semibold transition"
        >
          Verify OTP
        </button>


        {/* Resend */}
        <div className="text-center mt-6">

          <p className="text-sm text-gray-500">
            Didn't receive the OTP?
          </p>

          <button
            onClick={sendOtp}
            disabled={loading}
            className="text-blue-600 font-semibold text-sm mt-1
            hover:underline disabled:text-gray-400"
          >
            {loading ? "Sending..." : "Resend OTP"}
          </button>

        </div>


        {/* Security */}
        <div className="mt-7 bg-gray-50 rounded-xl p-3 text-center">

          <p className="text-xs text-gray-500">
            🔒 Never share your OTP with anyone.
          </p>

        </div>

      </div>

    </div>
  );
}