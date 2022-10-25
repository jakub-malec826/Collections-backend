import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
import CollectionModel from "../../models/CollectionModel";

export default async function AddCollections(collection: CollectionSchemaIF) {
	console.log(collection);
	const newCollection = new CollectionModel(collection);
	await newCollection.save();
	console.log(newCollection);
	return newCollection;
}
