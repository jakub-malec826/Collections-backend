import CollectionModel from "../../models/CollectionModel";

export default async function GetBiggestCollections() {
	const collections = await CollectionModel.find();
	return collections
		.sort((a, b) => (a.items.length < b.items.length ? 1 : -1))
		.slice(0, 5);
}
