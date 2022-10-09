import UserModel from "../models/UserModel";
export default async function GetAllUsers() {
    const all = await UserModel.find();
    return all;
}
