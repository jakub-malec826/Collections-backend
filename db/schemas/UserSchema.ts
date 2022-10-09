import mongoose from "mongoose";
import CollectionSchema from "./CollectionSchema";

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    isAdmin: Boolean,
    status: String,
    collections: [CollectionSchema],
});

export default UserSchema;
