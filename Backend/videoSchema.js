import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    subject: { type: String, required: true } // Add subject for filtering
}, { timestamps: true });

const Video = mongoose.model("Video", VideoSchema);
export default Video;