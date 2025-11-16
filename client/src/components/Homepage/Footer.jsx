import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E5631] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">Mosque</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Join us in rebuilding and supporting our community mosque. Every contribution brings us closer to completing this noble cause.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#D4AF37] transition">About</Link></li>
            <li><Link to="/donate" className="hover:text-[#D4AF37] transition">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact</h3>
          <ul className="space-y-2 text-gray-200">
            <li>📍 12 Unity Street, Lagos, Nigeria</li>
            <li>📞 +234 812 345 6789</li>
            <li>📧 mosqueproject@gmail.com</li>
          </ul>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#D4AF37]"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#D4AF37]"><Twitter size={20} /></a>
            <a href="#" className="hover:text-[#D4AF37]"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Mosque Renovation Project — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
