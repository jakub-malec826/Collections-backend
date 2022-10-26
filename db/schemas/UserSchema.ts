import mongoose from "mongoose";
import CollectionSchema from "./CollectionSchema";

const UserSchema = new mongoose.Schema({
	userName: String,
	password: String,
	email: String,
	isAdmin: Boolean,
	status: String,
	collections: [String],
});

UserSchema.index({
	userName: "text",
	email: "text",
	status: "text",
	collections: "text",
});

export default UserSchema;
