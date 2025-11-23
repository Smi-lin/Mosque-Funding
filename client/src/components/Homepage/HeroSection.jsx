import React from "react";
import muj from "../../assets/muj1.png"
import { Link } from "react-router-dom";

const HeroSection = ({ progress = 0 }) => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${muj})` }}
    >
      <div className="absolute inset-0 bg-[#1E5631]/70"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
       <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
  Help Build Our New Community Mosque
</h1>
<p className="text-lg md:text-xl mb-6 text-gray-200">
  Join hands to support the construction of a new mosque that will serve our community for generations to come.
</p>


        <Link to="/donate">
          <button className="bg-[#D4AF37] hover:bg-white hover:text-[#1E5631] text-white font-semibold px-6 py-3 rounded-full transition duration-300">
            Donate Now
          </button>
        </Link>

        <div className="mt-10">
          <div className="w-full bg-white/30 rounded-full h-3">
            <div
              className="bg-[#D4AF37] h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-gray-200">{progress.toFixed(1)}% Funded</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
