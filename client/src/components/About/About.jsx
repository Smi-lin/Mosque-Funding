import React from "react";
import { Link } from "react-router-dom";
import mosqueImg from "../../assets/aboutmosque.jpg";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

const About = () => {
  return (
    <section className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-[#1E5631]/90">
        <img
          src={mosqueImg}
          alt="Mosque"
          className="absolute w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-4xl font-bold mb-3">
            About the Mosque Renovation Project
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            A community-driven initiative to rebuild and restore our local
            mosque for future generations.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#D4AF37]">
          <h2 className="text-2xl font-semibold text-[#1E5631] mb-4">
            Our Vision
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-3">
            <li>
              To build a spiritually enlightened and united Ummah, rooted in
              Taqwa (God-consciousness), noble character, and compassionate
              service to humanity — creating a community where Islamic values
              illuminate every aspect of life.
            </li>
            <li>
              To nurture a generation grounded in faith, integrity, and
              knowledge — one that thrives in both spiritual and worldly
              excellence.
            </li>
            <li>
              To establish a strong foundation for unity, education, and
              community development that will inspire generations to uphold the
              mercy, beauty, and balance of Islam in all their endeavors.
            </li>
            <li>
              To ensure the mosque remains a beacon of guidance, peace, and
              inspiration for the entire community.
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#D4AF37]">
          <h2 className="text-2xl font-semibold text-[#1E5631] mb-4">
            Our Mission
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-3">
            <li>
              To strengthen faith and deepen the understanding of Islam through
              authentic education based on the Qur’an and Sunnah.
            </li>
            <li>
              To promote good character (Akhlaq), mutual respect, and a strong
              sense of social responsibility within the community.
            </li>
            <li>
              To empower families, youth, and future leaders with Islamic values
              and essential life skills that foster excellence in both religious
              and worldly pursuits.
            </li>
            <li>
              To serve humanity with compassion — supporting the needy, guiding
              those in spiritual or personal distress, and uplifting every soul
              through kindness.
            </li>
            <li>
              To foster unity, cooperation, and peaceful coexistence among
              Muslims and the wider society.
            </li>
          </ul>
        </div>
      </div>

  

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <img
          src={mosqueImg}
          alt="Mosque Renovation"
          className="w-full md:w-1/2 rounded-2xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#1E5631] mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The mosque has been a cornerstone of our community for decades. Over
            time, the building has aged and requires urgent renovation to ensure
            safety and functionality. This project is our collective effort to
            preserve the mosque’s legacy and continue its vital role in our
            lives.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every donation — no matter the size — brings us closer to our goal
            of creating a welcoming and lasting space for everyone.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#D4AF37] text-center py-16 text-[#1E5631]">
        <h2 className="text-3xl font-bold mb-4">Be Part of the Change</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Your contribution will help us complete this renovation and strengthen
          our community.
        </p>

        <Link
          to="/donate"
          className="bg-[#1E5631] text-white px-6 py-3 rounded-full font-medium hover:bg-[#184d2c] transition"
        >
          Support the Renovation
        </Link>
      </div>

      <Footer />
    </section>
  );
};

export default About;
