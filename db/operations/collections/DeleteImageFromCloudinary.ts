import cloudinary from "cloudinary";
import CollectionModel from "../../models/CollectionModel";

require("dotenv").config();

cloudinary.v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});

export default async function DeleteImageFromCloudinary(collectionId: string) {
	const collection = await CollectionModel.findById(collectionId);
	collection?.image.id &&
		collection.image.id !== "" &&
		(await cloudinary.v2.uploader.destroy(
			collection.image.id,
			(err: string, res: string) => console.log(err, res)
		));
}
