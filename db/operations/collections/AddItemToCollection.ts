import CollectionModel from "../../models/CollectionModel";

export default async function AddItemToCollection(
	collectionName: string,
	itemID: string
) {
	await CollectionModel.findOneAndUpdate(
		{ name: collectionName },
		{
			$push: {
				items: itemID,
			},
		},
		{ new: true}
	);
}
