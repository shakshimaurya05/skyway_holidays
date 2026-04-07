import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div>

        {/* HERO SECTION */}
        <section
          className="flex items-center justify-between px-[12%] py-[100px] gap-[60px] min-h-[85vh]"
        >
          {/* LEFT TEXT */}
          <div className="flex-1 max-w-[600px]">
            <h1
              className="text-4xl mb-5 font-semibold"
            >
              Explore the World with Skyway Holidays
            </h1>

            <p
              className="text-base leading-relaxed text-gray-600 text-justify"
            >
              At Skyway Holidays, we believe travel is more than simply visiting
              new destinations—it is about creating meaningful and unforgettable
              experiences. We provide thoughtfully designed holiday packages,
              reliable flight booking services, and personalized travel planning
              tailored to individual needs.
              <br /><br />
              Whether you are planning a peaceful getaway, an adventurous
              journey, or an international vacation, our goal is to ensure a
              smooth, comfortable, and enriching travel experience from start to
              finish.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="flex-1 flex justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt=""
              className="w-[400px] h-[400px] rounded-full object-cover shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
            />
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          className="px-[12%] py-[100px] bg-gray-50"
        >
          <h2
            className="text-center text-3xl font-semibold mb-[60px]"
          >
            Our Services
          </h2>

          <div
            className="flex flex-wrap justify-center gap-[40px]"
          >
            {[
              {
                title: "Holiday Packages",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                desc: "Carefully curated travel experiences for every type of traveler.",
              },
              {
                title: "Flight Booking",
                img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
                desc: "Easy and reliable flight booking with competitive pricing.",
              },
              {
                title: "Custom Trips",
                img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
                desc: "Personalized travel plans designed according to your needs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="w-[300px] rounded-xl overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-300 hover:scale-[1.05]"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[200px] object-cover"
                />

                <div className="p-[15px]">
                  <h3 className="text-lg mb-2 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY SECTION */}
        <section
          className="flex items-center justify-between px-[12%] py-[100px] gap-[60px] flex-wrap"
        >
          {/* IMAGE */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c"
              alt=""
              className="w-full max-w-[450px] rounded-[15px] object-cover shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* TEXT */}
          <div className="flex-1 min-w-[320px]">
            <h2 className="text-3xl mb-4 font-semibold">
              Why Choose Us
            </h2>

            <p
              className="text-base leading-relaxed text-gray-600 text-justify"
            >
              We provide high-quality travel experiences with careful planning,
              competitive pricing, and dedicated customer support. Our focus is
              on delivering seamless and enjoyable journeys that leave a lasting
              impression.
              <br /><br />
              Every trip is designed with attention to detail, ensuring comfort,
              reliability, and satisfaction for our travelers.
            </p>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}