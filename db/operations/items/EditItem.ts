import ItemSchemaIF from "../../interfaces/ItemSchemaIF";
import ItemModel from "../../models/ItemModel";

export default async function EditItem(itemID: string, item: ItemSchemaIF) {
	return await ItemModel.findByIdAndUpdate(itemID, item, { new: true });
}
