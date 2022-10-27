import UserModel from "../models/UserModel";
import UserSchemaIF from "../interfaces/UserSchemaIF";

export default async function MatchPassword(
	userName: string,
	password: string
) {
	const ifExist: UserSchemaIF | null = await UserModel.findOne({ userName });
	if (ifExist) {
		if (ifExist.status !== "blocked") {
			if (ifExist.password === password)
				return { message: "OK", body: ifExist };
			else return { message: "wrongPass", body: null };
		} else return { message: "blocked", body: null };
	} else return { message: "isNotExist", body: null };
}
