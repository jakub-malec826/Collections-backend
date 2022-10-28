import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
dotenv.config();

const url = `mongodb+srv://jakub-malec826:${process.env.REACT_APP_MONGO_DATA}@usersdb.4tqbyhs.mongodb.net/?retryWrites=true&w=majority`;

export default async function ConnectToDb() {
	try {
		cloudinary.config({
			cloud_name: process.env.REACT_APP_CLOUD_NAME,
			api_key: process.env.REACT_APP_API_KEY,
			api_secret: process.env.REACT_APP_API_SECRET,
		});
		await mongoose.connect(url);
		console.log("Connection with db OK");
	} catch (err) {
		console.error(err);
	}
}
