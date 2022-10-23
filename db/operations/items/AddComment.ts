import UserModel from "../../models/UserModel";
export default async function AddComment(
	owner: string,
	collecitonName: string,
	itemIndex: number,
	comment: { user: string; comment: string }
) {
	await UserModel.findOneAndUpdate(
		{
			userName: owner,
			"collections.name": collecitonName,
		},
		{
			$push: {
				[`collections.$.items.${itemIndex}.comments`]: comment,
			},
		},
		{ new: true }
	);
}
