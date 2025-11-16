import express from "express";
import { createDonation, getDonations } from "../controllers/donationController.js";
import multer from "multer";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post("/", upload.single("receipt"), createDonation);
router.get("/", getDonations);

export default router;
