import UserModel from "../../models/UserModel";

export default async function GetAllUsers() {
	return await UserModel.find();
}
