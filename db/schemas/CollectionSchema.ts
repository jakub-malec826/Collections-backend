import mongoose from "mongoose";
import ItemSchema from "./ItemSchema";

const CollectionSchema = new mongoose.Schema({
    name: String,
    description: String,
    topic: String,
    image: { url: String, id: String},
    owner: String,
    items: [ItemSchema],
});


export default CollectionSchema;
