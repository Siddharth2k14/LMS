import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";
dotenv.config();

const connectVideoDB = async () => {
    try {
        if (!process.env.MONGO_URI_VIDEO) {
            throw new Error("MONGO_URI_VIDEO is not defined in .env file");
        }
        await mongoose.createConnection(process.env.MONGO_URI_VIDEO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Video Database Connected");
    } catch (err) {
        console.error("Video Database Connection Error:", err.message);
        process.exit(1);
    }
};

export default connectVideoDB;