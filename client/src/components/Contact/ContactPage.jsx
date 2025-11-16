import React, { useState } from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-[#F5F5DC] min-h-screen">
    <Navbar/>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#1D4D4F] mb-4">Get in Touch</h1>
        <p className="text-gray-700 text-lg">
          Have questions, feedback, or want to support the mosque? Reach out to us below.
        </p>
      </div>

      {/* Form & Contact Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D4D4F]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D4D4F]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D4D4F]"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D4D4F]"
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#D4AF37] text-[#1D4D4F] w-full py-3 rounded-lg font-semibold hover:bg-[#c29e2e] transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-[#1D4D4F] mb-4">Contact Info</h2>
          <div className="flex items-center space-x-4">
            <span className="text-[#1D4D4F] font-semibold">📧</span>
            <span className="text-gray-700">rokibatolajide48@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#1D4D4F] font-semibold">📞</span>
            <span className="text-gray-700">+234 813 704 152 6</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#1D4D4F] font-semibold">📍</span>
            <span className="text-gray-700">123 Mosque Street, Lagos, Nigeria</span>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default ContactPage;
