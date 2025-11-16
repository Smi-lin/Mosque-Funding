import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Bell } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1E5631] shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#D4AF37]">MosqueFund</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
       
            <Link
              to="/about"
              className="text-white hover:text-[#D4AF37] transition duration-200 font-medium text-sm"
            >
              About
            </Link>
            <Link
              to="/donate"
              className="text-white hover:text-[#D4AF37] transition duration-200 font-medium text-sm"
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-[#D4AF37] transition duration-200 font-medium text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">

            <Link
              to="/donate"
              className="bg-[#D4AF37] hover:bg-white hover:text-[#1E5631] transition duration-200 text-white font-semibold px-4 py-2 rounded-full"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:text-[#D4AF37] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1E5631] border-t border-[#D4AF37]">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <Link
              to="/"
              className="block text-white hover:text-[#D4AF37] font-medium text-base transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-[#D4AF37] font-medium text-base transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/donate"
              className="block text-white hover:text-[#D4AF37] font-medium text-base transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/contact"
              className="block text-white hover:text-[#D4AF37] font-medium text-base transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center justify-between pt-3 border-t border-[#D4AF37]"> 
              <Link
                to="/donate"
                className="bg-[#D4AF37] text-white hover:bg-white hover:text-[#1E5631] transition duration-200 font-semibold px-3 py-2 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
