import ItemModel from "../../models/ItemModel";

export default async function DeleteItem(itemId: string) {
	await ItemModel.findByIdAndDelete(itemId);
}
