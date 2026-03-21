import heroImg from "../assets/hero.png"

function HeroPackages() {
  return (
    <div className="relative">

      <div
        className="h-[45vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center">

          <h1 className="text-white text-4xl font-semibold">
            Book India & International Holiday Tour Packages
          </h1>

        </div>
      </div>

    </div>
  )
}

export default HeroPackages