import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({
	name: String,
	description: String,
	topic: String,
	image: { url: String, id: String },
	owner: String,
	items: [String],
});

export default CollectionSchema;