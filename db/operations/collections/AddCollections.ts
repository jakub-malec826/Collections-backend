import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
import CollectionModel from "../../models/CollectionModel";

export default async function AddCollections(collection: CollectionSchemaIF) {
	const newCollection = new CollectionModel(collection);
	await newCollection.save();

	return newCollection;
}
