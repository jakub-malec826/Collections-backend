import ItemModel from "../../models/ItemModel";
export default async function GetFilteringItems(
	filteringText: string,
	owner?: string
) {
	if (owner)
		return await ItemModel.find({
			owner,
			$text: { $search: `\"${filteringText}\"` },
		});
	else
		return await ItemModel.find({
			$text: { $search: `\"${filteringText}\"` },
		});
}
