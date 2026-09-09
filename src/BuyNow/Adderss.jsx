import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Adderss() {

  const navigate = useNavigate(); 
  const [form, setform] = useState({
    name: "",
    phone: "",
    house: "",
    city: "",
    pin: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     const isEmpty = Object.values(form).some(
    (value) => value.trim() === ""
  );

  if (isEmpty) {
    toast.warning("Please fill all fields!");
    return;
  }

  setform({
     name: "",
    phone: "",
    house: "",
    city: "",
    pin: "",
    address: ""
  })
    toast.success("your order successfully save");
    toast.success("Delivery on 3 Days in Your Address");

    setTimeout(()=>{
        navigate('/');
    },1000)
    
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm mt-[100px] p-6">

        <h2 className="text-xl font-bold mb-5">
          Delivery Address
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="house"
              value={form.house}
              onChange={handleChange}
              type="text"
              placeholder="House / Building"
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
            />

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              type="text"
              placeholder="City"
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="pin"
              value={form.pin}
              onChange={handleChange}
              type="text"
              placeholder="PIN Code"
              className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Complete Address"
            rows="3"
            className="w-full border rounded-xl px-4 py-3 mt-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="w-full sm:w-[50%] mx-auto">
            <button
              onSubmit={handleSubmit}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold mt-6 transition"
            >
              Submit
            </button>
          </div>

        </form>

      </div>
    </>
  );
}