import mongoose from "mongoose";
import ItemSchema from "./ItemSchema";

const CollectionSchema = new mongoose.Schema({
    name: String,
    descriptions: String,
    topic: String,
    image: String,
    owner: String,
    items: [ItemSchema],
});

export default CollectionSchema;
