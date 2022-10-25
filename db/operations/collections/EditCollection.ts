import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
import CollectionModel from "../../models/CollectionModel";

export default async function EditCollection(
	collectionId: string,
	collection: CollectionSchemaIF,
) {

	return await CollectionModel.findByIdAndUpdate(collectionId, collection, {
		new: true,
	});
}
