import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
import CollectionModel from "../../models/CollectionModel";

export default async function EditCollection(
	collectionID: string,
	collection: CollectionSchemaIF,
) {

	return await CollectionModel.findByIdAndUpdate(collectionID, collection, {
		new: true,
	});
}
