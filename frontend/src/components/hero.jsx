import heroImg from "../assets/hero.png"
import BookingCard from "./bookingCard"
import HeroOptions from "./HeroOption"

function Hero() {
  return (
    <div className="relative">

      <div
        className="h-[60vh] md:h-[55vh] lg:h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center px-4">
          
          <div className="text-center text-white max-w-2xl lg:max-w-3xl mx-auto px-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight">
              READY TO TAKE OFF?
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg mb-4 max-w-xl mx-auto">
              Find the best flights and holiday packages with Skyway Holidays
            </p>
          </div>

        </div>
      </div>

      <div className="bg-white h-[45vh] md:h-[42vh] lg:h-[40vh]"></div>

      <BookingCard />
      <HeroOptions />

    </div>
  )
}

export default Hero