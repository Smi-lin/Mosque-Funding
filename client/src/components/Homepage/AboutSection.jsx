import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/aboutmosque.jpg"; // you can replace later

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src={aboutImg}
            alt="About the Mosque"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#1E5631] mb-4">
            About the Renovation Project
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our community mosque has served as a place of prayer and unity for
            decades. Now, it needs urgent renovation — from rebuilding its
            structure to improving the prayer space and facilities for all.
          </p>

          <Link
            to="/about"
            className="bg-[#D4AF37] hover:bg-[#1E5631] text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
