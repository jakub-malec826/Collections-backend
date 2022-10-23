import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
	topic: String,
});

export default TopicSchema;
