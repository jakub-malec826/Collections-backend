import UserSchemaIF from "../../interfaces/UserSchemaIF";
import UserModel from "../../models/UserModel";
export default async function SetUser(userid: string, user: UserSchemaIF) {
	await UserModel.findByIdAndUpdate(userid, user);
}
