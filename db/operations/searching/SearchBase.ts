import ItemModel from "../../models/ItemModel";
import CollectionModel from "../../models/CollectionModel";
import UserModel from "../../models/UserModel";

export default async function SearchBase(searchInput: string) {
	let result: any = [];
	result = result.concat(
		await ItemModel.find({ $text: { $search: `${searchInput}` } })
	);
	result = result.concat(
		await CollectionModel.find({ $text: { $search: `${searchInput}` } })
	);
	result = result.concat(
		await UserModel.find({ $text: { $search: `${searchInput}` } })
	);

	return result;
}
