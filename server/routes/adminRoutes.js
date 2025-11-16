import express from "express";
import { deleteDonation, getDonations } from "../controllers/adminController.js";

const router = express.Router();

// Admin donation routes
router.get("/donations", getDonations);
router.delete("/donations/:id", deleteDonation);

export default router;
