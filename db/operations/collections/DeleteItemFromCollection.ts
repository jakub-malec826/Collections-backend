import CollectionModel from "../../models/CollectionModel";

export default async function DeleteItemFromCollection(
	collectionName: string,
	itemID: string
) {
	await CollectionModel.findOneAndUpdate(
		{ name: collectionName },
		{
			$pull: {
				items: itemID,
			},
		}
	);
}
