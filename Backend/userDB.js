import mongoose from "mongoose";
import dotenv from "dotenv";
import process from "process";
dotenv.config();

const connectUserDB = async () => {
    try {
        if (!process.env.MONGO_URI_USER) {
            throw new Error("MONGO_URI_USER is not defined in .env file");
        }
        await mongoose.connect(process.env.MONGO_URI_USER, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("User Database Connected");
    } catch (err) {
        console.error("User Database Connection Error:", err.message);
        process.exit(1);
    }
};

export default connectUserDB;