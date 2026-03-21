import { useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
function IndiaCarousel() {

  const scrollRef = useRef(null)

  const [packages, setPackages] = useState([
    {
      name: "Uttarakhand Packages",
      price: "₹11,999/-",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
       slug: "uttarakhand"
    },
    {
      name: "Goa Packages",
      price: "₹13,999/-",
      image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww",
       slug: "goa"
    },
    {
      name: "Varanasi Packages",
      price: "₹17,999/-",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
       slug: "varanasi"
    },
    {
      name: "Gujarat Packages",
      price: "₹27,999/-",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
       slug: "gujrat"
    },
    {
      name: "Andaman Packages",
      price: "₹42,999/-",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       slug: "andaman"
    },
    {
      name: "Kerala Packages",
      price: "₹21,999/-",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
       slug: "kerala"
    }
  ])

  const slideNext = () => {

    const container = scrollRef.current
    const scrollAmount = container.offsetWidth / 4

    container.scrollBy({ left: scrollAmount, behavior: "smooth" })

    setTimeout(() => {
      setPackages(prev => {
        const updated = [...prev]
        const first = updated.shift()
        updated.push(first)
        return updated
      })

      container.scrollLeft -= scrollAmount

    }, 500)

  }

  const slidePrev = () => {

    const container = scrollRef.current
    const scrollAmount = container.offsetWidth / 4

    setPackages(prev => {
      const updated = [...prev]
      const last = updated.pop()
      updated.unshift(last)
      return updated
    })

    container.scrollLeft += scrollAmount

  }

  useEffect(() => {

    const interval = setInterval(() => {
      slideNext()
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <section className="bg-gray-100 py-12 sm:py-14 lg:py-16" id="india-packages">
     

      <div className="w-[92%] sm:w-[88%] lg:w-[85%] mx-auto">

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-8 lg:mb-10">
          India Tour Packages - Popular Destinations
        </h2>

        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={slidePrev}
            className="absolute left-[-5px] sm:left-[-10px] lg:left-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={slideNext}
            className="absolute right-[-5px] lg:right-[-5px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-hidden"
          >

       {packages.map((item, index) => (

  <Link
    key={index}
    to={`/holidays/${item.slug}`}
    className="flex-shrink-0 w-[75%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
  >

    <div className="bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-105">

                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt=""
                    className="h-[150px] sm:h-[170px] lg:h-[180px] w-full object-cover transition duration-500 hover:scale-110"
                  />

                  <span className="absolute bottom-3 left-3 text-white font-semibold text-sm sm:text-base lg:text-lg">
                    {item.price}
                  </span>

                </div>

                <div className="p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-gray-700">
                  {item.name}
                </div>

              </div>
</Link>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default IndiaCarousel