import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-3xl font-mono">
            <Link to="/">Preshi.</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg text-white flex flex-col items-center space-y-4 py-3 w-1/2 mx-auto rounded-lg ">
          {/* Close Button (Cancel Icon) */}
          <button
            onClick={closeMenu}
            className="self-end text-white text-3xl p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Links */}
          <Link
            to="/"
            className="hover:text-blue-200 transition duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-200 transition duration-300"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-200 transition duration-300"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-200 transition duration-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
