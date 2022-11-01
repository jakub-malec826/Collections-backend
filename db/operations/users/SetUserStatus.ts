import UserModel from "../../models/UserModel";

export default async function SetUserStatus(userID: string, status: string) {
	await UserModel.findByIdAndUpdate(userID, { status });
}
