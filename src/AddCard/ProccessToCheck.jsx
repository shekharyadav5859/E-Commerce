
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ProcessToCheck() {
  const navigate = useNavigate();
  const location = useLocation();
  const{totalPrice} = useParams;

  // ================= CART DATA =================

  const { cart = [], total = 0 } = location.state || {};

  // ================= ADDRESS =================

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    house: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  //LOAD USER 

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      toast.info("Please login first!");
      navigate("/Login/User");
      return;
    }

    const savedAddress = currentUser.myAddress || [];

    if (savedAddress.length > 0) {
      const lastAddress =
        savedAddress[savedAddress.length - 1];

      setAddress({
        name: lastAddress.name || currentUser.name || "",
        phone: lastAddress.phone || "",
        house: lastAddress.house || "",
        area: lastAddress.area || "",
        city: lastAddress.city || "",
        state: lastAddress.state || "",
        pincode: lastAddress.pincode || "",
      });
    } else {
      setAddress({
        name: currentUser.name || "",
        phone: "",
        house: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
      });
    }
  }, [navigate]);

  //  INPUT CHANGE

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  CONTINUE / PLACE ORDER 

  const handleContinue = async () => {

    // Get current user
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      toast.info("Please login first!");
      navigate("/Login/User");
      return;
    }

    //  CART CHECK 

    if (!cart || cart.length === 0) {
      toast.warning("Your cart is empty!");
      navigate("/AddToCard");
      return;
    }

    //  ADDRESS VALIDATION 

    if (
      !address.name.trim() ||
      !address.phone.trim() ||
      !address.house.trim() ||
      !address.area.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.pincode.trim()
    ) {
      toast.warning("Please fill all address fields!");
      return;
    }

    //  PHONE VALIDATION 

    if (!/^[0-9]{10}$/.test(address.phone)) {
      toast.warning("Please enter a valid 10 digit phone number!");
      return;
    }

    //  PINCODE VALIDATION 

    if (!/^[0-9]{6}$/.test(address.pincode)) {
      toast.warning(
        "Please enter a valid 6 digit pincode!"
      );
      return;
    }

    //  ORDER ID 

    const orderId =
      "ORD" + Date.now();

    //  PRODUCT NAME 

    const productName = cart
      .map((item) => {
        if (typeof item.title === "object") {
          return item.title?.name || "Product";
        }

        return item.title || "Product";
      })
      .join(", ");

    // ================= QUANTITY =================

    const quantity = cart
      .map((item) => item.quantity || 1)
      .join(", ");

    // ================= ADDRESS STRING =================

    const fullAddress =
      `${address.house}, ${address.area}, ` +
      `${address.city}, ${address.state} - ${address.pincode}`;

    // ================= EMAILJS DATA =================

    const templateParams = {
      email: currentUser.email,
      name: currentUser.name,

      orderid: orderId,

      productname: productName,

      quantity: quantity,

      amount: Number(total).toFixed(2),

      Adderss: fullAddress,

      phone: address.phone,
    };

    console.log(
      "EMAIL TEMPLATE DATA:",
      templateParams
    );

    try {

      // ================= SEND EMAIL =================

      const response = await emailjs.send(
        "service_bgyryaa",
        "template_ajfvrt7",
        templateParams,
        "4JVc8rt5UyVhNe4QP"
      );

      console.log(
        "EMAILJS RESPONSE:",
        response
      );

      // ================= SAVE ADDRESS =================

      const newAddress = {
        id: Date.now(),
        ...address,
      };

      // ================= SAVE ORDER =================

      const newOrder = {
        id: orderId,

        products: cart,

        total: Number(total),

        address: newAddress,

        orderDate:
          new Date().toLocaleString(),

        status: "Order Placed",
      };

      // ================= UPDATE USER =================

      const updatedUser = {
        ...currentUser,

        myAddress: [
          ...(currentUser.myAddress || []),
          newAddress,
        ],

        orderArray: [
          ...(currentUser.orderArray || []),
          newOrder,
        ],

        // Order ke baad cart empty
        cartDetails: [],
      };

      // ================= SAVE CURRENT USER =================

      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );

      // ================= UPDATE USER DATA =================

      const userData =
        JSON.parse(
          localStorage.getItem("userData")
        ) || [];

      const updatedUserData =
        userData.map((user) =>
          user.id === currentUser.id
            ? updatedUser
            : user
        );

      localStorage.setItem(
        "userData",
        JSON.stringify(updatedUserData)
      );

      // ================= SUCCESS =================

      toast.success(
        "Your order successfully saved! 🎉"
      );

      toast.success(
        "Delivery in 3 days 📦"
      );

      // ================= NEXT PAGE =================

      navigate("/", {
       
      });

    } catch (error) {

      console.log(
        "EMAILJS ERROR:",
        error
      );

      toast.error(
        "Your Order Rejected!"
      );
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}

      <div className="bg-white border-b px-5 sm:px-10 py-6">

        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center text-xl">
              📍
            </div>

            <div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Delivery Address
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Enter your delivery details
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= CONTENT ================= */}

      <div className="max-w-5xl mx-auto p-4 sm:p-6">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

          {/* ================= TITLE ================= */}

          <div className="mb-6">

            <h2 className="text-xl font-bold text-gray-800">
              Add Delivery Address
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Please provide the address where you want
              your order delivered.
            </p>

          </div>


          {/* ================= FORM ================= */}

          <div className="grid sm:grid-cols-2 gap-5">

            {/* NAME */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={address.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>


            {/* PHONE */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                placeholder="10 digit mobile number"
                maxLength="10"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>


            {/* HOUSE */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                House / Flat / Building
              </label>

              <input
                type="text"
                name="house"
                value={address.house}
                onChange={handleChange}
                placeholder="House / Flat number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>


            {/* AREA */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Area / Street
              </label>

              <input
                type="text"
                name="area"
                value={address.area}
                onChange={handleChange}
                placeholder="Area / Street / Colony"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>


            {/* CITY */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                City
              </label>

              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>


            {/* STATE */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                State
              </label>

              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>


            {/* PINCODE */}

            <div className="sm:col-span-2">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={address.pincode}
                onChange={handleChange}
                placeholder="6 digit pincode"
                maxLength="6"
                className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 transition"
              />

            </div>

          </div>


          {/* ================= ADDRESS PREVIEW ================= */}

          {address.city &&
            address.state &&
            address.pincode && (

            <div className="mt-7 p-4 rounded-xl bg-pink-50 border border-pink-100">

              <p className="text-sm font-semibold text-gray-700 mb-1">
                📍 Delivery Address Preview
              </p>

              <p className="text-sm text-gray-600">
                {address.house},{" "}
                {address.area},{" "}
                {address.city},{" "}
                {address.state} -{" "}
                {address.pincode}
              </p>

            </div>

          )}


          {/* ================= BUTTONS ================= */}

          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <button
              onClick={() =>
                navigate(`/`)
              }
              className="sm:w-1/3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3.5 rounded-xl transition"
            >
              ← Back to Cart
            </button>

            <button
              onClick={handleContinue}
              className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-xl transition shadow-sm"
            >
              Place Order 🎉
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}







