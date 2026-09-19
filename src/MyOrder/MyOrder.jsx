
import React, { useEffect, useState } from "react";

export default function MyOrder() {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const curr = JSON.parse(localStorage.getItem("currentUser"));

    if (curr?.orderArray) {
      setMyOrder(curr.orderArray);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-3 md:px-8">

      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-5">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          My Orders
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Check your recent orders and order details
        </p>
      </div>

      {/* No Orders */}
      {myOrder.length === 0 ? (
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-10 text-center shadow-sm">

          <div className="text-6xl mb-4">
            🛍️
          </div>

          <h2 className="text-xl font-semibold text-gray-800">
            No Orders Yet
          </h2>

          <p className="text-gray-500 mt-2">
            You haven't placed any orders yet.
          </p>

        </div>
      ) : (

        /* Orders */
        <div className="max-w-5xl mx-auto space-y-5">

          {myOrder.map((order, index) => {

            // Ordered products
            const products = order.products || [];

            return (
              <div
                key={order.id || index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >

                {/* Order Header */}
                <div className="border-b px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                  <div>
                    <p className="text-xs text-gray-500">
                      ORDER ID
                    </p>

                    <p className="font-semibold text-sm">
                      #{order.id || `ORDER${index + 1}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">

                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                    <span className="text-green-600 font-medium text-sm">
                      {order.status || "Order Placed"}
                    </span>

                  </div>

                </div>

                {/* Products */}
                <div className="p-4">

                  {products.map((product, productIndex) => {

                    const productImage =
                      product.thumbnail ||
                      product.image ||
                      product.img ||
                      product.imgUrl ||
                      product.ImgUrl;

                    const productName =
                      product.title ||
                      product.productname ||
                      product.ProductName ||
                      product.name ||
                      "Product";

                    const productPrice =
                      Number(product.price || product.Price || 0);

                    const quantity =
                      Number(product.quantity || product.qty || 1);

                    return (
                      <div
                        key={product.id || productIndex}
                        className="flex gap-4 border-b last:border-b-0 pb-4 mb-4 last:mb-0"
                      >

                        {/* Product Image */}
                        <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">

                          {productImage ? (
                            <img
                              src={productImage}
                              alt={productName}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-gray-400 text-sm">
                              No Image
                            </span>
                          )}

                        </div>

                        {/* Product Details */}
                        <div className="flex-1">

                          <h2 className="font-semibold text-gray-800 text-base md:text-lg line-clamp-2">
                            {productName}
                          </h2>

                          <p className="text-gray-500 text-sm mt-2">
                            Quantity:{" "}
                            <span className="text-gray-700 font-medium">
                              {quantity}
                            </span>
                          </p>

                          <p className="text-lg font-bold text-gray-800 mt-2">
                            ₹{productPrice.toFixed(2)}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                  {/* Delivery Status */}
                  <div className="mt-5 bg-green-50 rounded-lg p-3">

                    <div className="flex items-center gap-2">

                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                      <p className="font-semibold text-green-700">
                        {order.status || "Order Placed"}
                      </p>

                    </div>

                    <p className="text-sm text-gray-600 mt-1 ml-5">
                      Your order has been successfully placed.
                    </p>

                  </div>

                  {/* Order Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

                    {/* Date */}
                    <div className="border rounded-lg p-3">

                      <p className="text-xs text-gray-500">
                        ORDER DATE
                      </p>

                      <p className="font-medium text-gray-800 mt-1">
                        {order.orderDate || "Not Available"}
                      </p>

                    </div>

                    {/* Address */}
                    <div className="border rounded-lg p-3">

                      <p className="text-xs text-gray-500">
                        DELIVERY ADDRESS
                      </p>

                      <p className="font-medium text-gray-800 mt-1">
                        {order.address?.name || "Customer"}
                      </p>

                      <p className="text-sm text-gray-600">
                        {order.address?.house || ""}{" "}
                        {order.address?.area || ""}
                      </p>

                      <p className="text-sm text-gray-600">
                        {order.address?.city || ""}
                        {order.address?.state
                          ? `, ${order.address.state}`
                          : ""}
                        {order.address?.pin
                          ? ` - ${order.address.pin}`
                          : order.address?.pincode
                          ? ` - ${order.address.pincode}`
                          : ""}
                      </p>

                      <p className="text-sm text-gray-600 mt-1">
                        📞 {order.address?.phone || "Not Available"}
                      </p>

                    </div>

                  </div>

                  {/* Order Summary */}
                  <div className="border rounded-lg p-4 mt-5">

                    <div className="flex justify-between items-center">

                      <span className="text-gray-600">
                        Total Amount
                      </span>

                      <span className="text-xl font-bold text-gray-800">
                        ₹{Number(order.total || 0).toFixed(2)}
                      </span>

                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-5">

                    <button
                      className="flex-1 border border-gray-300 rounded-lg py-2.5 font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                      View Details
                    </button>

                    <button
                      className="flex-1 border border-red-300 text-red-600 rounded-lg py-2.5 font-medium hover:bg-red-50 transition"
                    >
                      Cancel Order
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}
