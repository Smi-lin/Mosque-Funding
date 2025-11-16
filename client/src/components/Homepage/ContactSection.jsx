import React from "react";

const ContactSection = () => {
  return (
<section className="py-16 bg-[#D4AF37]/20" id="contact">


      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10">
        {/* Left Side - Text and Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#1E5631] mb-3">Get in Touch</h2>
          <p className="text-[#1A1A1A] mb-8">
            Have questions or want to support our mosque renovation? We’d love to
            hear from you. Fill the form below or use the contact info to reach us directly.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-[#1A1A1A] mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E5631]/30 focus:border-[#1E5631]"
              />
            </div>

            <div>
              <label className="block text-[#1A1A1A] mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E5631]/30 focus:border-[#1E5631]"
              />
            </div>

            <div>
              <label className="block text-[#1A1A1A] mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E5631]/30 focus:border-[#1E5631]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#D4AF37] text-[#1E5631] px-6 py-2 rounded-lg font-semibold hover:bg-[#1E5631] hover:text-white transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="bg-[#F7F7F7] rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-[#1E5631] mb-5">Contact Information</h3>
          <ul className="space-y-4 text-[#1A1A1A]">
            <li>
              <span className="font-semibold">Address:</span>
              <p className="text-[#1A1A1A]">4 Mujjahiduun Crescent, behind industrial estate, Nigeria</p>
            </li>
            <li>
              <span className="font-semibold">Email:</span>
              <p className="text-[#1A1A1A]">mujjahiduuncentral@gmail.com</p>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>
              <p className="text-[#1A1A1A]">+234 813 704 152 6</p>
            </li>
          </ul>

          <div className="mt-6 flex space-x-4">
            <a
              href="#"
              className="inline-block text-[#1E5631] hover:text-[#D4AF37] font-medium"
            >
              Twitter
            </a>
            <a
              href="#"
              className="inline-block text-[#1E5631] hover:text-[#D4AF37] font-medium"
            >
              Facebook
            </a>
            <a
              href="#"
              className="inline-block text-[#1E5631] hover:text-[#D4AF37] font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
