import ItemModel from "../../models/ItemModel";

export default async function AddLike(itemID: string, loginUser: string) {
	return await ItemModel.findByIdAndUpdate(
		itemID,
		{
			$push: {
				likes: loginUser,
			},
		},
		{ new: true }
	);
}
