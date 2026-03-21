import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 mt-16 lg:mt-24">

      {/* MAIN FOOTER */}
      <div className="w-[92%] sm:w-[88%] lg:w-[85%] mx-auto py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            Skyway Holidays
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            Your gateway to unforgettable travel experiences across India and
            around the world. Discover the best holiday packages, flights and
            travel deals with Skyway Holidays.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-lg">

            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaYoutube className="cursor-pointer hover:text-white transition" />

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Packages</li>
            <li className="hover:text-white cursor-pointer">Flights</li>
            <li className="hover:text-white cursor-pointer">Hotels</li>
            <li className="hover:text-white cursor-pointer">Contact</li>

          </ul>
        </div>

        {/* DESTINATIONS */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Popular Destinations
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">Goa</li>
            <li className="hover:text-white cursor-pointer">Manali</li>
            <li className="hover:text-white cursor-pointer">Bali</li>
            <li className="hover:text-white cursor-pointer">Singapore</li>
            <li className="hover:text-white cursor-pointer">Dubai</li>

          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Booking Help</li>
            <li className="hover:text-white cursor-pointer">Cancellation Policy</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">

            <li>📍 New Delhi, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ support@skywayholidays.com</li>

          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-blue-800">

        <div className="w-[92%] sm:w-[88%] lg:w-[85%] mx-auto py-5 sm:py-6 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center text-sm">

          <p className="text-gray-400 text-center sm:text-left">
            © 2026 Skyway Holidays. All rights reserved.
          </p>

          <div className="flex gap-5 sm:gap-6">

            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer