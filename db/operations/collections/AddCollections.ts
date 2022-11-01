import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
import CollectionModel from "../../models/CollectionModel";
import UserModel from "../../models/UserModel";

export default async function AddCollections(collection: CollectionSchemaIF) {
	const newCollection = new CollectionModel(collection);
	await newCollection.save();

	await UserModel.findOneAndUpdate(
		{ userName: collection.owner },
		{ $push: { collections: newCollection._id } },
		{ new: true }
	);
	return newCollection;
}
