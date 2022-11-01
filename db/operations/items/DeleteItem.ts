import ItemModel from "../../models/ItemModel";

export default async function DeleteItem(itemID: string) {
(await ItemModel.findByIdAndDelete(itemID));
}
