import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    donorName: { type: String, required: true }, // was 'name'
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String },
    receipt: { type: String },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Donation", donationSchema);
