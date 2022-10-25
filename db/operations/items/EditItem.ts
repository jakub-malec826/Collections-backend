import ItemSchemaIF from "../../interfaces/ItemSchemaIF";
import ItemModel from "../../models/ItemModel";

export default async function EditItem(itemId: string, item: ItemSchemaIF) {
	return await ItemModel.findByIdAndUpdate(itemId, item, { new: true });
}
