import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
	{
		name: String,
		tag: [String],
		comments: [
			{
				user: String,
				comment: String,
			},
		],
		likes: [String],
		date: String,
		owner: String,
		author: String,
		additionalField: [
			{
				fieldName: String,
				fieldType: String,
			},
		],
	},
	{ strict: false }
);

export default ItemSchema;
