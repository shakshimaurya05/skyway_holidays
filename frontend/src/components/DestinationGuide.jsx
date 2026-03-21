import bali from "../assets/bali.avif"
import goa from "../assets/goa.avif"
import singapore from "../assets/singapore.jpg"
import paris from "../assets/paris.jpg"
import travelImg from "../assets/tavel1.avif"

function DestinationGuideSection() {

  const deals = [
    {
      title: "Aastha Escape Resort, Goa",
      nights: "4 Nights",
      price: "₹13,999/-",
      image: goa
    },
    {
      title: "Bali Family Package",
      nights: "5 Nights",
      price: "₹60,999/-",
      image: bali
    },
    {
      title: "Singapore Fantasy",
      nights: "3 Nights",
      price: "₹61,999/-",
      image: singapore
    },
    {
      title: "Jewels of Europe - Swiss & Italy",
      nights: "6 Nights",
      price: "₹1,86,999/-",
      image: paris
    }
  ]

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20" id="destination-guide">

      <div className="w-[92%] sm:w-[88%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* LEFT SIDE */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow flex flex-col justify-center">

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-5 lg:mb-6 text-gray-800">
            Explore Travel Destination Guide
          </h2>

          <p className="text-gray-600 mb-3 leading-relaxed italic text-sm sm:text-base">
            "Travel is the only thing you buy that makes you richer."
          </p>

          <p className="text-gray-500 leading-relaxed mb-5 lg:mb-6 text-sm sm:text-base">
            Discover beautiful destinations and curated holiday experiences
            designed to make your journeys unforgettable. Explore new cultures,
            stunning landscapes and create memories with Skyway Holidays.
          </p>

          <img
            src={travelImg}
            alt="Travel Guide"
            className="rounded-xl w-full h-40 sm:h-44 lg:h-48 object-cover"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">

          {deals.map((item, index) => (

            <div
              key={index}
              className="flex bg-white rounded-2xl overflow-hidden shadow group cursor-pointer"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt=""
                  className="w-32 sm:w-36 lg:w-44 h-24 sm:h-26 lg:h-28 object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* CONTENT */}
              <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center">

                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {item.title}
                </h3>

                <p className="text-blue-600 text-xs sm:text-sm mt-1">
                  → {item.nights}
                </p>

              </div>

              {/* PRICE */}
              <div className="flex items-center pr-3 sm:pr-4 lg:pr-6 font-semibold text-blue-600 text-sm sm:text-base lg:text-lg">
                {item.price}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default DestinationGuideSection