import { FaPlane, FaUmbrellaBeach, FaMapMarkerAlt, FaQuestionCircle } from "react-icons/fa"

function HeroOptions() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto bg-white/99 backdrop-blur-md border border-white/40 rounded-2xl lg:rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4 px-6 lg:px-10 py-4 relative -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-20  mb-10 z-10 before:absolute before:inset-0 before:rounded-2xl lg:before:rounded-full before:bg-gradient-to-t before:from-white/40 before:to-transparent before:pointer-events-none">

      {/* FLIGHTS */}
      <div
        onClick={() => scrollToSection("india-packages")}
        className="flex items-center gap-3 cursor-pointer hover:text-blue-700 hover:-translate-y-1 transition"
      >
        <FaPlane className="text-blue-700 text-lg" />
        <span className="font-medium">Flights</span>
      </div>

      {/* HOLIDAYS */}
      <div
        onClick={() => scrollToSection("international-packages")}
        className="flex items-center gap-3 cursor-pointer hover:text-blue-700 hover:-translate-y-1 transition"
      >
        <FaUmbrellaBeach className="text-blue-700 text-lg" />
        <span className="font-medium">Holidays</span>
      </div>

      {/* DESTINATION GUIDE */}
      <div
        onClick={() => scrollToSection("destination-guide")}
        className="flex items-center gap-3 cursor-pointer hover:text-blue-700 hover:-translate-y-1 transition"
      >
        <FaMapMarkerAlt className="text-blue-700 text-lg" />
        <span className="font-medium">Destination Guide</span>
      </div>

      {/* FAQ */}
      <div
        onClick={() => scrollToSection("why-skyway")}
        className="flex items-center gap-3 cursor-pointer hover:text-blue-700 hover:-translate-y-1 transition"
      >
        <FaQuestionCircle className="text-blue-700 text-lg" />
        <span className="font-medium">FAQs</span>
      </div>

    </div>
  )
}

export default HeroOptions