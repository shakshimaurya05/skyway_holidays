import { useState } from "react"

import img1 from "../assets/place3.webp"
import img2 from "../assets/place2.avif"
import img3 from "../assets/place1.jpg"
import img4 from "../assets/place4.jpg"
import img5 from "../assets/place5.webp"
import img6 from "../assets/place7.jpg"

function WhySkyway() {

  const [active, setActive] = useState(0)

  const items = [
    {
      title: "How do I find the best flight deals?",
      content:
        "Skyway Holidays helps you discover the best flight and hotel deals by comparing multiple airlines and travel providers in one place. Our smart search system ensures you get competitive prices, flexible options, and exclusive seasonal discounts so you can plan your trip with confidence."
    },
    {
      title: "Is booking through Skyway Holidays secure?",
      content:
        "All bookings on Skyway Holidays are protected through secure payment gateways and trusted travel partners. Your personal and payment information is encrypted and handled with strict security protocols."
    },
    {
      title: "Can I customize my travel package?",
      content:
        "Yes, you can easily customize your trip by combining flights, hotels and experiences based on your preferences. Whether you want a luxury getaway or a budget friendly trip, we provide flexible options."
    },
    {
      title: "Does Skyway offer holiday packages?",
      content:
        "We offer both domestic and international holiday packages including beach vacations, mountain escapes, cultural city tours and luxury travel experiences."
    },
    {
      title: "How can I get travel discounts?",
      content:
        "Skyway Holidays regularly offers seasonal deals and exclusive discounts on flights and hotels. Keep checking our platform to grab the best offers."
    },
    {
      title: "Is customer support available?",
      content:
        "Our support team is available to assist you with booking help, itinerary planning and travel guidance to ensure your journey remains smooth and stress free."
    }
  ]

  const toggleAccordion = (index) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 -mt-10" id="why-skyway">

      <div className="w-[92%] sm:w-[88%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* LEFT SIDE FAQ */}
        <div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 lg:mb-10">
            Why Skyway Holidays?
          </h2>

          <div className="space-y-4 sm:space-y-5">

            {items.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 sm:p-5 lg:p-6 cursor-pointer transition hover:shadow-md"
                onClick={() => toggleAccordion(index)}
              >

                <div className="flex justify-between items-center">

                  <h3 className="font-medium text-gray-800 text-sm sm:text-base">
                    {item.title}
                  </h3>

                  <span className="text-lg sm:text-xl font-semibold">
                    {active === index ? "−" : "+"}
                  </span>

                </div>

                {active === index && (
                  <p className="text-gray-600 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                    {item.content}
                  </p>
                )}

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6 h-full">

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img1}
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img2}
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img3}
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img4}
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img5}
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img6}
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

        </div>

      </div>

    </section>
  )
}

export default WhySkyway