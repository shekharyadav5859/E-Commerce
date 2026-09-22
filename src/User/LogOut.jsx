
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function DeleteData() {
  const navigate = useNavigate();

  const deleteUserData = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("currentUser");
    toast.success("User data deleted successfully!")
    

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 text-center">

        <h1 className="text-2xl font-bold text-gray-800">
          Delete Your Account
        </h1>

        <p className="text-gray-500 mt-3 text-sm">
          This will delete all saved your data from localStorage.
        </p>

        <button
          onClick={deleteUserData}
          className="
            mt-6
            w-full
            bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            py-3
            rounded-xl
            transition
          "
        >
          Delete Your Data
        </button>

      </div>
    </div>
  );
}


