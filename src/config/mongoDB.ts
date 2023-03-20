import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/**
 * Connect to MongoDB
 */
export default function connectDB() {
	// Set strictQuery to false to allow for queries like: { name: { $regex: ".*" } } to work properly
	mongoose.set("strictQuery", false);
	mongoose
		.connect(
			process.env.MONGO_URL as string,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			} as ConnectOptions
		)
		.then(() => {
			console.log("Connected to MongoDB ✅");
		})
		.catch((err) => {
			console.log("Error while connecting to MongoDB ❌ \n", err);
		});
}
