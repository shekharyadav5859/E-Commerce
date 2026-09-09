import React, { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { OfferBanner } from "../Navber/OfferBanner";
import { toast } from "react-toastify";

export default function Order() {
  let[num , setnum] = useState(0);
  let[cel , setcel] =useState(0);
  let [total ,settotal] = useState(0);

  const { id } = useParams();
  let location = useLocation();
  let navigate =useNavigate();
  const  product = location.state?.product;
const handleBuyNow = () => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );
    
    if(num ==0){
      toast.warning("Please select a quantity!");
      return
    }
   
    // User login nahi hai
    if (!currentUser) {
      toast.info("Please login first!");
      navigate("/Login/User");
      return;
    }

    // User login hai → Address page
    navigate(`/User/Order/${id}/${currentUser.name}`, {
      state: { product }
    });
  };
   const addnum =()=>{      
 if(num >=10){
  toast.warning("Your cart limit is full!");
  return;
}
  setcel(product.price+cel);
    setnum(num+1);
     settotal(product.price+cel+40)     
     };

  //sbubresion   
  const subnum =()=>{
    if(num >=2){
      setcel(cel-product.price);
      setnum(num-1);
      settotal((total-product.price))
 
    }
   if(num ===1){
    toast.warning("Your cart limit is Low!");
   }
    return;
   };
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-10 px-4 sm:px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Complete Your Order
          </h1>
          <p className="text-gray-500 mt-1">
            Review your product and enter delivery details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left - Product + Address */}
          <div className="lg:col-span-2 space-y-6">

            {/* Product */}
            <div className="bg-white rounded-2xl shadow-sm p-6">

              <h2 className="text-xl font-bold mb-5">
                Product Details
              </h2>

              <div className="flex gap-5">

                {/* Product Image */}
                <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt="Product"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                   {product.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Product ID: {id}
                  </p>

                  <p className="text-xl font-bold text-gray-900 mt-3">
                   ${product.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm font-medium">
                      Quantity:
                    </span>

                    <button className="w-8 h-8 border rounded-lg"
                    onClick={subnum}
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {num}
                    </span>

                    <button className="w-8 h-8 border rounded-lg"
                     onClick={addnum}
                     
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            </div>

           

          </div>

          {/* Right - Price Summary */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-28">

              <h2 className="text-xl font-bold mb-6">
                Price Details
              </h2>

              <div className="space-y-4 text-gray-600">

                <div className="flex justify-between">
                  <span>Product Price</span>
                  <span>  ${product.price}</span>
                </div>

                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>{num}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>$40</span>
                </div>
                <div className="flex justify-between">
                  <span>Celculet</span>
                  <span>$ {cel}</span>
                </div>

              </div>

              <div className="border-t my-5"></div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
                 
            
                
                 <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold mt-6 transition"
                 onClick={handleBuyNow}
                 >
                Place Order
              </button>
                
             

              <p className="text-center text-xs text-gray-400 mt-4">
                Your order is safe and secure
              </p>

            </div>
          </div>

        </div>

      </div>
      <OfferBanner/>
    </div>
  );
}
