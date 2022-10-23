import UserModel from "../../models/UserModel";
export default async function AddLike(
	owner: string,
	loginUser: string,
	collecitonName: string,
	itemIndex: number
) {
	await UserModel.findOneAndUpdate(
		{
			userName: owner,
			"collections.name": collecitonName,
		},
		{
			$push: {
				[`collections.$.items.${itemIndex}.likes`]: loginUser,
			},
		},
		{ new: true }
	);
}
