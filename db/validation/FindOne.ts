import UserModel from "../models/UserModel";
export default async function FindOne(id: string) {
    return await UserModel.findById(id);
}
