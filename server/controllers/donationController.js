import Donation from "../models/Donation.js";
import sendEmail from "../utils/sendEmail.js";


export const createDonation = async (req, res) => {
  try {
    const { name, email, amount, message, receipt } = req.body;

    // Save donation
    const donation = await Donation.create({
      name,
      email,
      amount,
      message,
      receipt,
    });

    // Send confirmation to donor
    await sendEmail({
      to: email,
      donorName: name,
      amount,
      message,
      type: "donor", // optional flag to select email template
    });

    // Send notification to mosque (EMAIL_USER)
    await sendEmail({
      to: process.env.EMAIL_USER,
      donorName: name,
      amount,
      message,
      type: "admin", // optional flag to use a different template
    });

    res.status(201).json({ success: true, donation });
  } catch (error) {
    console.log("Donation error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getDonations = async (req, res) => {
    try {
        const donations = await Donation.find().sort({ createdAt: -1 });
        res.status(200).json(donations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
