import cloudinary from "cloudinary";
import CollectionModel from "../../../models/CollectionModel";

cloudinary.v2.config({
	cloud_name: process.env.REACT_APP_CLOUD_NAME,
	api_key: process.env.REACT_APP_API_KEY,
	api_secret: process.env.REACT_APP_API_SECRET,
});

export default async function DeleteImageFromCloudinary(collectionId: string) {
	const collection = await CollectionModel.findById(collectionId);
	collection?.image.id &&
		(collection.image.id !== "" || collection.image.id !== undefined) &&
		(await cloudinary.v2.uploader.destroy(collection.image.id));
}
