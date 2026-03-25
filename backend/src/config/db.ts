import mongοose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined in .env');
        }

        await mongοose.connect(mongoUri);
        console.log('MongoDB connected');
    }   catch (error) {
        console.log('MongoDB connection error:', error);
        process.exit(1);
    }
};