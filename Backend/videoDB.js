import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const videoDB = mongoose.createConnection(process.env.MONGO_URI_VIDEO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

videoDB.on("connected", () => console.log("✅ Video Database Connected Successfully"));
videoDB.on("error", (err) => {
    console.error("❌ Video Database Connection Error:", err.message);
    process.exit(1);
});

export default videoDB;