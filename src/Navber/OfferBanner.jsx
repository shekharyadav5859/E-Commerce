import React from 'react'

export const OfferBanner = () => {
  return (
  
<>
{/* ================= OFFER BANNER ================= */}

<div className="w-full bg-gradient-to-r mt-[80px] from-blue-600 via-indigo-600 to-purple-600 text-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">

      {/* Offer Text */}

      <div className="flex items-center gap-3 text-center sm:text-left">

        <span className="text-2xl">
          🔥
        </span>

        <div>
          <p className="font-bold text-sm sm:text-base">
            Big Sale is Live!
          </p>

          <p className="text-xs sm:text-sm text-blue-100">
            Get up to <span className="font-bold text-white">50% OFF</span> on selected products
          </p>
        </div>

      </div>


      {/* Button */}

      <button
        className="bg-white text-blue-600 hover:bg-gray-100 px-5 py-2 rounded-full text-sm font-bold transition shadow-sm"
      >
        Shop Now →
      </button>

    </div>

  </div>

</div>
</>
  )
}
