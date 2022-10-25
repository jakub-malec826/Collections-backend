import ItemModel from "../../models/ItemModel";
export default async function GetLastItems() {
	const last = await ItemModel.find();
	return last
		?.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
		.slice(0, 5);
}
