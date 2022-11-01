import ItemModel from "../../models/ItemModel";

export default async function AddComment(
	itemID: string,
	comment: { user: string; comment: string }
) {
	return await ItemModel.findByIdAndUpdate(
		itemID,
		{
			$push: {
				comments: comment,
			},
		},
		{ new: true }
	);
}
