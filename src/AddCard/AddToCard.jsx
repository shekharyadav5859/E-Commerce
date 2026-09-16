
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddToCard() {
  const navigate = useNavigate();
  const location = useLocation();

  const product = location.state?.product;

  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const curr = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!curr) {
      toast.info("Please login first!");
      navigate("/Login/User");
      return;
    }

    setCurrentUser(curr);

    const oldCart = curr.cartDetails || [];

    if (product) {
      const checkProduct = oldCart.some(
        (item) => item.id === product.id
      );

      if (checkProduct) {
        toast.info(
          "This product is already added to your cart!"
        );

        setCart(oldCart);
        return;
      }

      const updatedCart = [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];

      curr.cartDetails = updatedCart;
      localStorage.setItem("currentUser",JSON.stringify(curr));
      setCart(updatedCart);
      toast.success("Product added successfully to your cart!");
    } else {
      setCart(oldCart);
    }
  }, [navigate, product]);

  // Remove product
  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        cartDetails: updatedCart,
      };

      setCurrentUser(updatedUser);

      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );
    }

    toast.success("Product removed from cart!");
  };

  // Total
  const totalPrice = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(item.quantity || 1),
    0
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">

      {/*  HEADER  */}

      <div className="bg-white border-b px-5 sm:px-10 py-6">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
              🛒
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                My Cart
              </h1>

              <p className="text-sm text-gray-500">
                {cart.length}{" "}
                {cart.length === 1
                  ? "item"
                  : "items"}{" "}
                in your cart
              </p>
            </div>

          </div>

        </div>

      </div>


      {/*  CONTENT  */}

      <div className="max-w-6xl mx-auto p-4 sm:p-6">

        {cart.length === 0 ? (

          /*  EMPTY CART */

          <div className="bg-white rounded-2xl shadow-sm p-10 sm:p-16 text-center">

            <div className="text-7xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything yet.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-7 px-8 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-6">

            {/* ================= PRODUCTS ================= */}

            <div className="lg:col-span-2 space-y-4">

              {cart.map((item) => {

                const title =
                  typeof item.title === "object"
                    ? item.title?.name
                    : item.title;

                const category =
                  typeof item.category === "object"
                    ? item.category?.name
                    : item.category;

                const image =
                  item.thumbnail ||
                  item.image ||
                  item.img ||
                  item.images?.[0];

                const quantity =
                  item.quantity || 1;

                return (

                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
                  >

                    <div className="flex gap-4">

                      {/* IMAGE */}

                      <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gray-50 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">

                        <img
                          src={image}
                          alt={title || "Product"}
                          className="w-full h-full object-contain p-2"
                        />

                      </div>


                      {/* DETAILS */}

                      <div className="flex-1 min-w-0">

                        <div className="flex justify-between gap-3">

                          <div>

                            <h2 className="font-semibold text-base sm:text-lg text-gray-800 line-clamp-2">
                              {title}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1 capitalize">
                              {category}
                            </p>

                          </div>

                          {/* REMOVE */}

                          <button
                            onClick={() =>
                              removeProduct(item.id)
                            }
                            className="text-gray-400 hover:text-red-500 text-xl transition"
                            title="Remove"
                          >
                            ✕
                          </button>

                        </div>


                        {/* PRICE */}

                        <div className="flex items-center justify-between mt-5">

                          <div>

                            <p className="text-xl font-bold text-gray-800">
                              ${item.price}
                            </p>

                            <p className="text-xs text-green-600 font-medium mt-1">
                              ✓ Available
                            </p>

                          </div>


                          {/* QUANTITY */}

                          <div className="flex items-center gap-2">

                            <span className="text-sm text-gray-500">
                              Qty
                            </span>

                            <div className="px-4 py-2 rounded-lg bg-gray-100 font-semibold">
                              {quantity}
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>


            {/* ================= SUMMARY ================= */}

            <div className="lg:col-span-1">

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sticky top-24">

                <h2 className="text-xl font-bold text-gray-800">
                  Order Summary
                </h2>

                <div className="border-b my-5"></div>

                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Products
                  </span>

                  <span>
                    {cart.length}
                  </span>

                </div>

                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Delivery
                  </span>

                  <span className="text-green-600 font-medium">
                    FREE
                  </span>

                </div>

                <div className="border-b my-5"></div>

                <div className="flex justify-between items-center">

                  <span className="font-bold text-lg">
                    Total
                  </span>

                  <span className="font-bold text-2xl text-pink-600">
                    ${totalPrice.toFixed(2)}
                  </span>

                </div>

                <button
                  onClick={() =>
                    navigate(  `/Add/To/Cart/ProcessToCheck/${totalPrice}`, {
                      state: {
                        cart,
                        total: totalPrice,
                      },
                    })
                  }
                  className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3.5 rounded-xl transition shadow-sm"
                >
                  Proceed to Checkout →
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="w-full mt-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition"
                >
                  Continue Shopping
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

























