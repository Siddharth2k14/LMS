import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";
import jwt from "jsonwebtoken";
import connectUserDB from "./userDB.js";
import connectVideoDB from "./videoDB.js";
import userRoutes from "./userRoutes.js";
import videoRoutes from "./videoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectVideoDB();
connectUserDB();

app.use("/api/videos", videoRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Internal Server Error", message: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});