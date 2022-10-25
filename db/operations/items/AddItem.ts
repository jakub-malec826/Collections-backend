import ItemSchemaIF from "../../interfaces/ItemSchemaIF";
import ItemModel from "../../models/ItemModel";

export default async function AddItem(item: ItemSchemaIF) {
	const newItem = new ItemModel(item);
	await newItem.save();
	return newItem;
}
