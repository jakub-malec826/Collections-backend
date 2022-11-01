import ItemModel from "../../models/ItemModel";

export default async function UnLike(itemID: string, loginUser: string) {
	return await ItemModel.findByIdAndUpdate(
		itemID,
		{
			$pull: {
				likes: loginUser,
			},
		},
		{ new: true }
	);
}
