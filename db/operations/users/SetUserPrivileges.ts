import UserModel from "../../models/UserModel";

export default async function SetUserPrivileges(
	userID: string,
	status: boolean
) {
	await UserModel.findByIdAndUpdate(
		userID,
		{ isAdmin: status },
		{ new: true }
	);
}
