import Donation from "../models/Donation.js";

// Get all donations
export const getDonations = async (req, res) => {
  const ADMIN_SECRET = process.env.ADMIN_SECRET; // <- move here
  try {
    const key = req.headers["x-admin-key"];
    if (!key || key !== ADMIN_SECRET) {
      console.log("Provided key:", key);
      console.log("Expected key:", ADMIN_SECRET);
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a donation
export const deleteDonation = async (req, res) => {
  const ADMIN_SECRET = process.env.ADMIN_SECRET; // <- move here
  try {
    const key = req.headers["x-admin-key"];
    if (!key || key !== ADMIN_SECRET) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    await Donation.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Donation deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
