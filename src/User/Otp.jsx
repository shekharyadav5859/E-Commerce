import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Otp() {

  const [otpInput, setOtpInput] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const email = localStorage.getItem("otpEmail");

  // React StrictMode me double OTP send rokne ke liye
  const sentRef = useRef(false);


  const sendOtp = async () => {

    if (!email) {
      toast.error("Email not found!");
      return;
    }

    setLoading(true);

   const otp = String(Math.floor(100000 + Math.random() * 900000));

const templateParams = {
  email: email,
  passcode: otp,
  time: "15 minutes"
};

    console.log("Sending OTP to:", email);
    console.log("OTP:", otp);

    try {

      const response = await emailjs.send(
        "service_bgyryaa",
        "template_ls5q7nu",
        templateParams,
        "4JVc8rt5UyVhNe4QP"
      );

      console.log("EMAILJS RESPONSE:", response);

      // OTP tabhi save karo jab email successfully send ho
      localStorage.setItem("otp", otp);

      toast.success("OTP sent successfully!");

    } catch (error) {

      console.log("EMAILJS ERROR:", error);

      toast.error("OTP send failed!");

    } finally {

      setLoading(false);

    }
  };


  // OTP page open hote hi OTP send
  useEffect(() => {

    if (!sentRef.current) {
      sentRef.current = true;
      sendOtp();
    }

  }, []);


  const verifyOtp = () => {

    const savedOtp = localStorage.getItem("otp");

    if (!savedOtp) {
      toast.error("Please request OTP first!");
      return;
    }

    if (otpInput === savedOtp) {

      toast.success("OTP verified successfully! 🎉");

      // OTP verify hone ke baad hi currentUser rakho
      const currentUser =
        JSON.parse(localStorage.getItem("currentUser"));

      if (currentUser) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(currentUser)
        );
      }

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } else {

      toast.error("Invalid OTP!");

    }
  };


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