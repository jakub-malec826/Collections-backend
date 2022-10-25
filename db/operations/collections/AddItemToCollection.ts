import CollectionModel from "../../models/CollectionModel";
export default async function AddItemToCollection(
	collectionName: string,
	itemName: string
) {
	await CollectionModel.findOneAndUpdate(
		{ name: collectionName },
		{
			$push: {
				items: itemName,
			},
		},
		{ new: true}
	);
}
