import ItemModel from "../../models/ItemModel";

export default async function AddComment(
	itemId: string,
	comment: { user: string; comment: string }
) {
	return await ItemModel.findByIdAndUpdate(
		itemId,
		{
			$push: {
				comments: comment,
			},
		},
		{ new: true }
	);
}
