import ItemModel from "../../models/ItemModel";

export default async function UnLike(itemId: string, loginUser: string) {
	return await ItemModel.findByIdAndUpdate(
		itemId,
		{
			$pull: {
				likes: loginUser,
			},
		},
		{ new: true }
	);
}
