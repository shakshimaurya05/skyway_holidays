import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 cursor-pointer">
            Skyway Holidays
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>

          <li>
            <Link to="/packages" className="hover:text-blue-600">Packages</Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4">
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>

            <li>
              <Link to="/packages" className="hover:text-blue-600">Packages</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-600">About Us</Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;