import UserSchemaIF from "../interfaces/UserSchemaIF";

import UserModel from "../models/UserModel";

export default async function IfUserExist(userName: string, email?: string) {
    if (email) {
        const ifExist = await UserModel.findOne({ email });
        if (ifExist) return "Email exist";
    }
    const ifExist: null | UserSchemaIF = await UserModel.findOne({ userName });
    if (ifExist) {
        return "User exist";
    }
    return "OK";
}
