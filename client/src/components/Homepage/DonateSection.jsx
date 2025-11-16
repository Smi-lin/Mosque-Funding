import React from "react";
import { Link } from "react-router-dom";
import donateImg from "../../assets/donate-bg.png"; // replace with real image later

const DonationSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#1E5631] mb-4">
            How You Can Support
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Your contribution — no matter the size — will go a long way in
            helping us renovate and preserve our mosque for future generations.
            You can donate directly to the mosque’s official bank account and
            fill out a short form to record your support.
          </p>

          <Link
            to="/donate"
            className="bg-[#D4AF37] hover:bg-[#1E5631] text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Read More
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src={donateImg}
            alt="Donate to Mosque"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
