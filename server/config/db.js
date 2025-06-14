import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGODB_URI);
		if (!connect) console.log(`Failed to connect MongoDB database`);
		else console.log(`Successfully connected to MongoDB`);
	} catch (error) {
		console.log(`Error in connecting MongoDB database: ${error.message}`);
	}
};
