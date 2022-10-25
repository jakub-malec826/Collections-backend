import mongoose from "mongoose";
import ItemSchemaIF from "../interfaces/ItemSchemaIF";
import ItemSchema from "../schemas/ItemSchema";

const ItemModel = mongoose.model<ItemSchemaIF>("ItemModel", ItemSchema);
export default ItemModel;
