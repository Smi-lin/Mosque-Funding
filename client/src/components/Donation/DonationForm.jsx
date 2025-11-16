import React, { useState } from "react";
import axios from "axios";

const DonationForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
    receipt: null
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "receipt") {
      setFormData({ ...formData, receipt: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("amount", formData.amount);
      data.append("message", formData.message);
      if (formData.receipt) data.append("receipt", formData.receipt);

      const response = await axios.post(
       `${import.meta.env.VITE_API_URL}/api/donations`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Thank you for your donation! We’ll confirm soon.");
      setFormData({ name: "", email: "", amount: "", message: "", receipt: null });

      // Optional: callback to parent (DonationPage) to refresh progress
      if (onSuccess) onSuccess(response.data.donation.amount);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        type="number"
        name="amount"
        placeholder="Amount Donated (₦)"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D4D4F]"
        required
      />
      <textarea
        name="message"
        placeholder="Write a short message (optional)"
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1D4D4F]"
      />
      <input
        type="file"
        name="receipt"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
        required
      />
      <button
        type="submit"
        className="bg-[#1D4D4F] text-white w-full py-3 rounded-lg hover:bg-[#163C3E] transition duration-300"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Donation"}
      </button>
    </form>
  );
};

export default DonationForm;
