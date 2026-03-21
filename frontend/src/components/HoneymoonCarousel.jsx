import { useState } from "react"

import img1 from "../assets/goa.avif"
import img2 from "../assets/place1.jpg"
import img3 from "../assets/place4.jpg"
import img4 from "../assets/place7.jpg"
import img5 from "../assets/place2.avif"
import img6 from "../assets/singapore.jpg"

function HoneymoonCarousel() {

  const data = [
    { img: img1, title: "Goa" },
    { img: img2, title: "Maldives" },
    { img: img3, title: "Kashmir" },
    { img: img4, title: "Manali" },
    { img: img5, title: "Mauritius" },
    { img: img6, title: "Singapore" },
    { img: img1, title: "Bali" },
    { img: img2, title: "Thailand" },
    { img: img3, title: "Shimla" },
    { img: img4, title: "Paris" },
    { img: img5, title: "Switzerland" },
    { img: img6, title: "Dubai" },
  ]

  const [startIndex, setStartIndex] = useState(0)

  const visibleCards = 6

  const nextSlide = () => {
    if (startIndex + visibleCards < data.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (

    <section className="py-20 ">

      <div className="w-[85%] mx-auto relative">

        {/* Title */}

        <h2 className="text-2xl font-semibold mb-10">
          Honeymoon Packages
        </h2>


        {/* Left Arrow */}

        <button
          onClick={prevSlide}
          className="absolute left-[-40px] top-[50%] -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          ‹
        </button>


        {/* Right Arrow */}

        <button
          onClick={nextSlide}
          className="absolute right-[-40px] top-[50%] -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100"
        >
          ›
        </button>


        {/* Cards */}

        <div className="flex justify-between overflow-hidden">

          {data.slice(startIndex, startIndex + visibleCards).map((item, index) => (

            <div key={index} className="text-center">

              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 hover:scale-105 transition duration-300">

                <img
                  src={item.img}
                  className="w-full h-full object-cover"
                  alt=""
                />

              </div>

              <h3 className="font-medium">{item.title}</h3>

              <p className="text-sm text-gray-500">
                Honeymoon Packages
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default HoneymoonCarousel