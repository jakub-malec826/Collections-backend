import UserModel from "../../models/UserModel";
import DeleteCollection from "../collections/DeleteCollection";

export default async function DeleteUser(userId: string) {
	const user = await UserModel.findById(userId);
	if (user) {
		user.collections.map(async (coll) => {
			await DeleteCollection(coll);
		});
	}

	await UserModel.findByIdAndDelete(userId);
}
