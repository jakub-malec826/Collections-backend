import UserModel from "../models/UserModel";
export default async function FindByName(name: string) {
    return await UserModel.findOne({ userName: name });
}
