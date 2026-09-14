
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Hero from "../Navber/Hero";
import { OfferBanner } from "../Navber/OfferBanner";

export default function UserAddress() {
  const location = useLocation();

  const user = location.state?.user ||JSON.parse(localStorage.getItem("currentUser"));

  const [addresses, setAddresses] = useState(
    user?.myAddress || []
  );

  const [showForm, setShowForm] = useState(
    (user?.myAddress || []).length === 0
  );

  const [address, setAddress] = useState({
    name: user?.name || "",
    phone: "",
    house: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !address.name ||
      !address.phone ||
      !address.house ||
      !address.area ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    if (address.phone.length !== 10) {
      toast.warning("Enter valid 10 digit phone number");
      return;
    }

    if (address.pincode.length !== 6) {
      toast.warning("Enter valid 6 digit pincode");
      return;
    }

    // New address
    const newAddresses = [
      ...addresses,
      address,
    ];

    // Update currentUser
    const updatedUser = {
      ...user,
      myAddress: newAddresses,
    };

    // Save currentUser
    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    // Update userData
    const users =
      JSON.parse(localStorage.getItem("userData")) || [];

    const updatedUsers = users.map((item) => {
      if (item.id === user.id) {
        return updatedUser;
      }

      return item;
    });

    localStorage.setItem(
      "userData",
      JSON.stringify(updatedUsers)
    );

    // Update UI
    setAddresses(newAddresses);

    // Form reset
    setAddress({
      name: user?.name || "",
      phone: "",
      house: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
    });

    setShowForm(false);

    toast.success("Address saved successfully!");
  };

  return (  <>


    <div className="min-h-screen bg-gray-100 pt-24 px-4 pb-10">

      <div className="max-w-3xl mx-auto">
        

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              My Addresses
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Manage your delivery addresses
            </p>
          </div>

          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              + Add Address
            </button>
          )}

        </div>

        {/*from */}

        {showForm && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

            <div className="mb-6">

              <h2 className="text-xl font-bold text-gray-800">
                Add Delivery Address
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Enter your address details for delivery
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={address.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={address.phone}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                    maxLength={10}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

              </div>

              {/* House */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  House / Flat / Building
                </label>

                <input
                  type="text"
                  name="house"
                  value={address.house}
                  onChange={handleChange}
                  placeholder="House no., Flat no., Building name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Area / Street / Locality
                </label>

                <input
                  type="text"
                  name="area"
                  value={address.area}
                  onChange={handleChange}
                  placeholder="Enter area or street"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              {/* City + State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                  />
                </div>

              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={address.pincode}
                  onChange={handleChange}
                  placeholder="6 digit pincode"
                  maxLength={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-pink-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">

                {addresses.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                )}

                <button
                  type="submit"
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg transition"
                >
                  Save Address
                </button>

              </div>

            </form>
          </div>
        )}

        {/* address*/}

        {addresses.length > 0 && !showForm && (

          <div className="space-y-4">

            {addresses.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition"
              >

                <div className="flex justify-between items-start">

                  <div className="flex gap-3">

                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                      🏠
                    </div>

                    <div>

                      <h2 className="font-bold text-lg text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-sm text-gray-500">
                        {item.phone}
                      </p>

                    </div>

                  </div>

                  <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-semibold">
                    Address {index + 1}
                  </span>

                </div>

                <div className="mt-4 ml-1">

                  <p className="text-gray-700">
                    {item.house}, {item.area}
                  </p>

                  <p className="text-gray-600 mt-1">
                    {item.city}, {item.state}
                  </p>

                  <p className="text-gray-600 mt-1">
                    Pincode:{" "}
                    <span className="font-semibold">
                      {item.pincode}
                    </span>
                  </p>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
     
    </div>
   
    </>
  );
}
