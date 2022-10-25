import CollectionModel from "../../models/CollectionModel";

export default async function DeleteCollection(collectionId: string) {
	await CollectionModel.findByIdAndDelete(collectionId);
}
