import mongoose from "mongoose";
import CollectionSchemaIF from "../interfaces/CollectionSchemaIF";
import CollectionSchema from "../schemas/CollectionSchema";

const CollectionModel = mongoose.model<CollectionSchemaIF>(
	"CollectionModel",
	CollectionSchema
);
export default CollectionModel;
