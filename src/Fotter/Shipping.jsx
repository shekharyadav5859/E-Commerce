
import React from "react";

export default function Shipping() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Shipping Information
        </h1>

        <p className="text-gray-600 mb-8">
          At S-Kart, we work to deliver your orders safely and on time.
          Please read the shipping information below.
        </p>

        <div className="space-y-7">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Shipping Time
            </h2>
            <p className="text-gray-600">
              Orders are generally delivered within 3–7 business days,
              depending on your location and product availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Shipping Charges
            </h2>
            <p className="text-gray-600">
              Shipping charges may vary depending on the order, delivery
              location, and product. Any applicable charges will be shown
              during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Order Tracking
            </h2>
            <p className="text-gray-600">
              Once your order has been shipped, tracking information may be
              provided so you can check the delivery status of your order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Delivery Address
            </h2>
            <p className="text-gray-600">
              Please make sure that your shipping address and contact
              information are correct before placing your order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Delayed Delivery
            </h2>
            <p className="text-gray-600">
              Delivery may take longer than expected due to weather,
              holidays, courier delays, or other unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about your order or delivery,
              please contact our support team.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}


