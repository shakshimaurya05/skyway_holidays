import { useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
function InternationalCarousel() {

  const scrollRef = useRef(null)

  const [packages, setPackages] = useState([
    {
      name: "Bali Packages",
      price: "₹60,999/-",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      slug: "bali"
    },
    {
      name: "Maldives Packages",
      price: "₹79,999/-",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       slug: "maldives"
    },
    {
      name: "Singapore Packages",
      price: "₹61,999/-",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
       slug: "singapore"
    },
    {
      name: "Dubai Packages",
      price: "₹52,999/-",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
       slug: "dubai"
    },
    {
      name: "Thailand Packages",
      price: "₹44,999/-",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
       slug: "thailand"
    },
    {
      name: "Paris Packages",
      price: "₹1,10,999/-",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
       slug: "paris"
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
    <section className="bg-[#061a33] py-12 sm:py-16 lg:py-20" id="international-packages">

      <div className="w-[92%] sm:w-[88%] lg:w-[85%] mx-auto">

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-8 lg:mb-12">
          International Holiday Packages
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
            className="absolute right-[-5px] sm:right-[-10px] lg:right-[-20px] top-1/2 -translate-y-1/2 z-10 w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-200"
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
  className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
>

  <div className="rounded-xl overflow-hidden relative group shadow-lg">

    {/* IMAGE */}
    <div className="relative">

      <img
        src={item.image}
        alt=""
        className="h-[260px] sm:h-[300px] lg:h-[340px] w-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

    </div>

    {/* CONTENT */}
    <div className="absolute bottom-6 left-5 right-5 text-white transition-all duration-300 group-hover:bottom-20">

      <p className="text-base sm:text-lg font-semibold">
        {item.name}
      </p>

      <p className="text-sm">
        {item.price}
      </p>

    </div>

    {/* BOOK NOW BUTTON */}
    <div className="absolute bottom-[-60px] left-0 w-full flex justify-center transition-all duration-300 group-hover:bottom-6">

      <button className="bg-white text-black px-5 sm:px-6 py-2 rounded-lg font-semibold shadow text-sm sm:text-base">
        Book Now
      </button>

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

export default InternationalCarousel