import ItemModel from "../../models/ItemModel";

export default async function AddLike(itemId: string, loginUser: string) {
	return await ItemModel.findByIdAndUpdate(
		itemId,
		{
			$push: {
				likes: loginUser,
			},
		},
		{ new: true }
	);
}
