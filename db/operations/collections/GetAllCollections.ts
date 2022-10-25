import CollectionModel from "../../models/CollectionModel";
export default async function GetAllCollections(owner: string) {
	return await CollectionModel.find({ owner });
}
