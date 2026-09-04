function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Subscribe to our Newsletter
        </h2>

        <p className="text-gray-500 mt-3 mb-7">
          Get the latest products, offers and exclusive deals
          directly in your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;