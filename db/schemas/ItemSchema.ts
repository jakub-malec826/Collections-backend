import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        tag: [String],
        comments: [
            {
                user: String,
                comment: String,
            },
        ],
        likes: Number,
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
