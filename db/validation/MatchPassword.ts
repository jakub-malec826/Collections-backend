import UserModel from "../models/UserModel";
import UserSchemaIF from "../interfaces/UserSchemaIF";

export default async function MatchPassword(
    userName: string,
    password: string
) {
    const ifExist: UserSchemaIF | null = await UserModel.findOne({ userName });
    if (ifExist) {
        if (ifExist.password === password) return "OK";
        else return "Password are not matched";
    } else return "User doesn't exit";
}
