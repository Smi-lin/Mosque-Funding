import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Homepage/Navbar';
import HeroSection from '../components/Homepage/HeroSection';
import AboutSection from '../components/Homepage/AboutSection';
import DonationSection from '../components/Homepage/DonateSection';
import GallerySection from '../components/Homepage/GallerySection';
import ContactSection from '../components/Homepage/ContactSection';
import Footer from '../components/Homepage/Footer';

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const DONATION_TARGET = 500000;

  const adminKey = import.meta.env.VITE_ADMIN_SECRET;
  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch donations from backend
  const fetchDonations = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/admin/mosque/fund/donations`, {
        headers: { 'x-admin-key': adminKey }
      });
      setDonations(response.data);
    } catch (err) {
      console.error('Failed to fetch donations:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
  const progress = Math.min((totalAmount / DONATION_TARGET) * 100, 100);

  return (
    <>
      <Navbar />
      <HeroSection progress={loading ? 0 : progress} />
      <AboutSection />
      <DonationSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
