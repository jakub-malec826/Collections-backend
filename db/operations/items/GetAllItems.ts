import ItemModel from "../../models/ItemModel";
export default async function GetAllItems(owner: string) {
	return await ItemModel.find({ owner });
}
