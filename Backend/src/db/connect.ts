import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI as string)
        console.log(`"MongoDB Connected" ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("MongoDB connection Failed", error);
        process.exit(1)

    }
}

export default connectDB