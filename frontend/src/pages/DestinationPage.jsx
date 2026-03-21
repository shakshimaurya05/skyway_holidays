import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function DestinationPage() {

  const { place } = useParams()

  const packages = [

    {
      name: "Short Trip to Corbett",
      nights: "2 Nights",
      price: "₹14,999",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      slug: "corbett-trip"
    },

    {
      name: "Ravishing Rishikesh",
      nights: "2 Nights",
      price: "₹11,999",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca",
      slug: "ravishing-rishikesh"
    },

    {
      name: "Queen of Hills Mussoorie",
      nights: "2 Nights",
      price: "₹11,999",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      slug: "mussoorie-trip"
    },

    {
      name: "Mussoorie & Kanatal Delight",
      nights: "3 Nights",
      price: "₹14,999",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      slug: "mussoorie-kanatal"
    },

    {
      name: "Nainital & Corbett Escape",
      nights: "3 Nights",
      price: "₹19,999",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      slug: "nainital-corbett"
    },

    {
      name: "Auli Ski Adventure",
      nights: "4 Nights",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227",
      slug: "auli-ski"
    },

    {
      name: "Char Dham Yatra",
      nights: "6 Nights",
      price: "₹29,999",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      slug: "char-dham"
    },

    {
      name: "Valley of Flowers Trek",
      nights: "5 Nights",
      price: "₹26,999",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      slug: "valley-flowers"
    }

  ]

  const popular = packages.slice(0,5)

  return (

    <>
      <Navbar />

      <section className="bg-gray-100 py-16">

        <div className="w-[85%] mx-auto">

          {/* TITLE */}

          <h1 className="text-3xl font-semibold mb-8 capitalize">
            {place} Holiday Packages
          </h1>


          {/* DESCRIPTION + IMAGE */}

          <div className="bg-white rounded-xl shadow p-8 mb-12 grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Uttarakhand is one of the most beautiful travel destinations in India.
                Located in the lap of the Himalayas, it is known for its scenic mountains,
                peaceful rivers, spiritual towns and breathtaking valleys.
                Tourists from all over the country visit Uttarakhand to experience
                its natural beauty and cultural richness.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                The state offers a wide range of travel experiences including adventure tourism,
                religious pilgrimages, wildlife safaris and relaxing hill station holidays.
                Popular places like Nainital, Mussoorie, Rishikesh and Auli attract thousands
                of travelers every year.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Uttarakhand is also famous for the sacred Char Dham Yatra which includes
                Yamunotri, Gangotri, Kedarnath and Badrinath.
                These holy sites are among the most important pilgrimage destinations
                for Hindus.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Apart from spiritual tourism, Uttarakhand is also a paradise for adventure lovers.
                Trekking in the Valley of Flowers, river rafting in Rishikesh and skiing in Auli
                are some of the most popular activities enjoyed by tourists.
              </p>

            </div>


            <div className="overflow-hidden rounded-xl shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="w-full h-[350px] object-cover"
              />

            </div>

          </div>



          {/* POPULAR PACKAGES TABLE */}

          <h2 className="text-2xl font-semibold mb-6 capitalize">
            Popular {place} Packages
          </h2>


          <div className="bg-white rounded-xl shadow mb-12 overflow-hidden">

            {/* HEADER */}

            <div className="grid grid-cols-3 bg-teal-500 text-white font-semibold px-6 py-4">

              <div>{place} Packages</div>
              <div>Duration</div>
              <div>Price</div>

            </div>


            {/* ROWS */}

            {popular.map((pkg,index) => (

              <div
                key={index}
                className="grid grid-cols-3 px-6 py-4 border-b last:border-none hover:bg-gray-50"
              >

                <Link
                  to={`/package/${pkg.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {pkg.name}
                </Link>

                <div>{pkg.nights}</div>

                <div>{pkg.price}</div>

              </div>

            ))}

          </div>



          {/* PACKAGE CARDS */}

          <div className="space-y-6">

            {packages.map((pkg,index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow flex gap-6 p-4"
              >

                {/* IMAGE */}

                <img
                  src={pkg.image}
                  className="w-64 h-40 object-cover rounded-lg"
                />


                {/* CONTENT */}

                <div className="flex-1">

                  <h3 className="text-lg font-semibold">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {pkg.nights}
                  </p>

                </div>


                {/* PRICE */}

                <div className="text-right">

                  <p className="text-2xl text-blue-700 font-semibold">
                    {pkg.price}
                  </p>

                  <p className="text-sm text-gray-500">
                    Per person twin sharing
                  </p>

                  <button className="mt-3 bg-blue-900 text-white px-5 py-2 rounded-lg">
                    Book Online
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default DestinationPage