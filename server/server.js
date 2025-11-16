import dotenv from "dotenv";
dotenv.config(); // must be first

console.log("ADMIN_SECRET:", process.env.ADMIN_SECRET); // debug

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import donationRoutes from "./routes/donationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); 

// Routes
app.use("/api/donations", donationRoutes);
app.use("/api/admin/mosque/fund", adminRoutes);


// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
