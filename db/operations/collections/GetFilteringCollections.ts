import CollectionModel from "../../models/CollectionModel";
export default async function GetFilteringCollections(
	owner: string,
	filterText: string
) {
	return await CollectionModel.find({
		owner,
		$text: { $search: filterText },
	});
}
