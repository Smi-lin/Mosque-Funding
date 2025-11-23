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
           About the New Mosque Project
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our community is working together to build a brand-new mosque, 
            A place that will serve as a center of worship, learning, and unity for everyone. 
            This new project aims to provide a bigger prayer area, better facilities, 
            and a more comfortable environment for all worshippers, young and old.
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
