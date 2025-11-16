import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountInfo from "./AccountInfo";
import DonationForm from "./DonationForm";
import ProgressBar from "./ProgressBar";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Gallery1 from "../../assets/Gallery1-bg.png";
import Gallery2 from "../../assets/Galley2-bg.png";
import Gallery4 from "../../assets/Gallery4.jpg";
import Gallery5 from "../../assets/Gallery5.jpg";
import Gallery6 from "../../assets/Gallery6.jpg";
import Gallery7 from "../../assets/Gallery7.jpg";

const DonationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalRaised, setTotalRaised] = useState(0);
  const goal = 500_000_000;

  const fetchDonations = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/donations`);
      const sum = response.data.reduce((acc, donation) => acc + donation.amount, 0);
      setTotalRaised(sum);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleDonateSuccess = (amount) => {
    setTotalRaised(prev => prev + amount);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const galleryImages = [Gallery1, Gallery2, Gallery4, Gallery5, Gallery6, Gallery7];

  return (
    <section className="bg-[#F5F5DC] min-h-screen">
    
     <Navbar/>
      <div
        className="relative w-full h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${Gallery1})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute w-full h-full bg-[#1D4D4F]/70"></div>
        <div className="relative text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Support the Mosque Renovation</h1>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Every contribution brings us closer to completing this sacred project.
          </p>
          <button
            onClick={openModal}
            className="bg-[#D4AF37] text-[#1D4D4F] px-6 py-3 rounded-xl font-semibold hover:bg-[#c29e2e] transition duration-300"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Overview & Progress Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1D4D4F] mb-4">About the Project</h2>
        <p className="text-gray-700 mb-6">
          Our mosque has been the heart of the community for decades. Over time, the building
          has aged and needs urgent renovation. Your donations will help restore its structure,
          enhance safety, and ensure a welcoming space for everyone.
        </p>
        <ProgressBar progress={Math.min((totalRaised / goal) * 100, 100)} />
        <p className="text-gray-600 mt-2">
          ₦{totalRaised.toLocaleString()} raised out of ₦{goal.toLocaleString()} goal
        </p>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-[#1D4D4F] mb-6 text-center">Project Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

          {/* Purpose Section */}
            <div className="max-w-5xl mx-auto px-6 py-16 bg-white shadow-md rounded-2xl border-t-4 border-[#1E5631] mb-20">
              <h2 className="text-3xl font-semibold text-[#1E5631] mb-4 text-center">
                Our Purpose
              </h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                Our purpose is to rebuild more than just walls — it is to revive faith,
                unity, and community spirit. The mosque renovation represents a shared
                vision of nurturing hearts, guiding generations, and providing a home
                for prayer, learning, and togetherness. Through this project, we aim
                to create a sacred space that inspires every believer to connect more
                deeply with Allah (SWT), serve others with compassion, and uphold the
                timeless values of Islam in everyday life.
              </p>
            </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-lg max-w-3xl w-full mx-4 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-[#1D4D4F]">Confirm Your Donation</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-[#1D4D4F] transition">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-8">
              <AccountInfo />
              <DonationForm onSuccess={handleDonateSuccess} />
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </section>
  );
};

export default DonationPage;
