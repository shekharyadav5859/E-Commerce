function SpecialOffers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-10 md:p-14 text-white flex items-center justify-between overflow-hidden">

        <div>

          <p className="text-lg mb-2">
            Limited Time Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get 30% OFF
          </h2>

          <p className="text-blue-100 mb-6">
            On your first order. Don't miss this amazing deal!
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </button>

        </div>

        <div className="hidden md:block text-8xl">
          🏷️
        </div>

      </div>

    </section>
  );
}

export default SpecialOffers;