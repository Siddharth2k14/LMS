import express from "express";
import Video from "./videoSchema.js";

const router = express.Router();

// API to store a YouTube link
router.post("/", async (req, res) => {
    try {
        const { title, url } = req.body;
        const newVideo = new Video({ title, url });
        await newVideo.save();
        res.status(201).json(newVideo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API to fetch all videos
router.get("/", async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;