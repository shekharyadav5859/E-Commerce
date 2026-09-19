
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Adderss() {
let location = useLocation();
let product = location.state?.product;

  const {
    id,
    name: productname,
    total,
    quantity
  } = useParams();

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

    setform((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    // ================= VALIDATION =================

    const isEmpty = Object.values(form).some(
      (value) => value.trim() === ""
    );

    if (isEmpty) {
      toast.warning("Please fill all fields!");
      return;
    }


    // ================= GET CURRENT USER =================

    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      toast.warning("Please login first!");
      navigate("/Login/User");
      return;
    }


    // ================= ADDRESS =================

    const deliveryAddress = {
      id: Date.now(),

      name: form.name,
      phone: form.phone,
      house: form.house,
      city: form.city,
      pin: form.pin,
      address: form.address
    };


    // ================= ORDER =================

    const newOrder = {

      id: `ORD${Date.now()}`,

      orderDate: new Date().toLocaleString(),

      status: "Order Placed",

      total: Number(total) || 0,

      address: deliveryAddress,

      products: [
        
               {
        ...product,
        quantity: Number(quantity) || 1
      }


         
        
      ]

    };


    //  SAVE ORDER 

    const updatedUser = {

      ...currentUser,

      orderArray: [
        ...(currentUser.orderArray || []),
        newOrder
      ]

    };


    // ================= EMAIL =================

    const templateParams = {

      email: currentUser.email,

      name: form.name,

      orderid: newOrder.id,

      productname: productname,

      quantity: quantity,

      amount: total,

      Adderss: form.address
    };


    try {

      await emailjs.send(
        "service_bgyryaa",
        "template_ajfvrt7",
        templateParams,
        "4JVc8rt5UyVhNe4QP"
      );


      // Save only after successful order process
      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );


      console.log(
        "Order Saved:",
        updatedUser.orderArray
      );


      toast.success(
        "Your order successfully saved! 🎉"
      );

      toast.success(
        "Delivery in 3 days 📦"
      );


      // Clear form

      setform({
        name: "",
        phone: "",
        house: "",
        city: "",
        pin: "",
        address: ""
      });


      // Go to My Orders

      setTimeout(() => {
        navigate("/MyOrder");
      }, 1000);


    } catch (error) {

      console.log("EmailJS Error:", error);

      toast.error(
        "Order could not be completed!"
      );

    }

  };


  return (

    <div className="min-h-screen bg-gray-100 pt-24 pb-10 px-3 md:px-8">

      <div className="max-w-3xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="mb-5">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Delivery Address
          </h1>

          <p className="text-gray-500 mt-1">
            Enter your address to complete your order
          </p>

        </div>


        {/* ================= CARD ================= */}

        <div className="bg-white rounded-2xl shadow-sm p-5 md:p-8">

          {/* Product Summary */}

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">

            <h2 className="font-semibold text-gray-800 mb-2">
              Order Summary
            </h2>

            <div className="flex justify-between gap-3">

              <div>

                <p className="font-medium text-gray-800">
                  {productname || "Product"}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Quantity: {quantity || 1}
                </p>

              </div>

              <p className="font-bold text-gray-800">
                ${Number(total || 0).toFixed(2)}
              </p>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Name */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>


              {/* Phone */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>


              {/* House */}

              <div className="sm:col-span-2">

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  House / Building
                </label>

                <input
                  name="house"
                  value={form.house}
                  onChange={handleChange}
                  type="text"
                  placeholder="House number / Building name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>


              {/* City */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter city"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>


              {/* PIN */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code
                </label>

                <input
                  name="pin"
                  value={form.pin}
                  onChange={handleChange}
                  type="text"
                  maxLength="6"
                  placeholder="Enter PIN code"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>

            </div>


            {/* Complete Address */}

            <div className="mt-4">

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Complete Address
              </label>

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter complete delivery address"
                rows="4"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white py-4 rounded-xl font-bold mt-6 transition"
            >
              Place Order
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}





// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import emailjs from "@emailjs/browser";

// export default function Adderss() {


//   const {
//   id,
//   name,
//   total,
//   quantity,
//   productname
// } = useParams();
//   const locetion = useLocation;
  
//   const navigate = useNavigate(); 

  

//   const [form, setform] = useState({
//     name: "",
//     phone: "",
//     house: "",
//     city: "",
//     pin: "",
//     address: ""
//   });

//   const currentUser = JSON.parse(
//   localStorage.getItem("currentUser")
// );
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setform({
//       ...form,
//       [name]: value
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//      const isEmpty = Object.values(form).some(
//     (value) => value.trim() === ""
//   );

//   if (isEmpty) {
//     toast.warning("Please fill all fields!");
//     return;
//   }


// if(!currentUser){
//   toast.warning("User is not login");
//   return
// }

// const templateParams = {
//   email: currentUser.email,
//   name: name,
//   orderid: id,
//   productname: productname,
//   quantity: quantity,
//   amount: total,
//   Adderss: form.address
// };

// try{
//     const response = await emailjs.send(
//         "service_bgyryaa",
//         "template_ajfvrt7",
//         templateParams,
//         "4JVc8rt5UyVhNe4QP"
//       );

      
   

//     toast.success("Your order successfully saved! 🎉");
//     toast.success("Delivery in 3 days 📦");
    
// }
// catch(error){
//   console.log("error" + error);
//   toast.error("Your Order Rejected");

// }










//   setform({
//      name: "",
//     phone: "",
//     house: "",
//     city: "",
//     pin: "",
//     address: ""
//   })
   

//     setTimeout(()=>{
//         navigate('/');
//     },1000)
    
//   };
  

//   return (
//     <>
    
//       <div className="bg-white rounded-2xl shadow-sm mt-28 md:mt-[80px] p-6">

//         <h2 className="text-xl font-bold mb-5">
//           Delivery Address
        
//         </h2>

//         <form onSubmit={handleSubmit}>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               type="text"
//               placeholder="Full Name"
//               className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               type="text"
//               placeholder="Phone Number"
//               className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               name="house"
//               value={form.house}
//               onChange={handleChange}
//               type="text"
//               placeholder="House / Building"
//               className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
//             />

//             <input
//               name="city"
//               value={form.city}
//               onChange={handleChange}
//               type="text"
//               placeholder="City"
//               className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//             />

//             <input
//               name="pin"
//               value={form.pin}
//               onChange={handleChange}
//               type="text"
//               placeholder="PIN Code"
//               className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//             />

//           </div>

//           <textarea
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Complete Address"
//             rows="3"
//             className="w-full border rounded-xl px-4 py-3 mt-4 outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <div className="w-full sm:w-[50%] mx-auto">
//             <button
//               onSubmit={handleSubmit}
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold mt-6 transition"
//             >
//               Submit
//             </button>
//           </div>

//         </form>

//       </div>
//     </>
//   );
// }