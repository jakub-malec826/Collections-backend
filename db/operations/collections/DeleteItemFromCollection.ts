import CollectionModel from "../../models/CollectionModel";
export default async function DeleteItemFromCollection(
	collectionName: string,
	itemName: string
) {
	await CollectionModel.findOneAndUpdate(
		{ name: collectionName },
		{
			$pull: {
				items: itemName,
			},
		}
	);
}
