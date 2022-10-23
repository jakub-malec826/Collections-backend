import UserModel from "../../models/UserModel";
export default async function UnLike(
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
			$pull: {
				[`collections.$.items.${itemIndex}.likes`]: loginUser,
			},
		},
		{ new: true }
	);
}
