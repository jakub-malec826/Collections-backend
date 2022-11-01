import CollectionModel from "../../models/CollectionModel";
import DeleteImageFromCloudinary from "./cloudinary/DeleteImageFromCloudinary";
import DeleteItem from "../items/DeleteItem";

export default async function DeleteCollection(collectionID: string) {
	const coll = await CollectionModel.findById(collectionID);
	if (coll) {
		await DeleteImageFromCloudinary(coll._id);
		coll.items.map(async (i) => await DeleteItem(i));
	}

	collectionID && (await CollectionModel.findByIdAndDelete(collectionID));
}
