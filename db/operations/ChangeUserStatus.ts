import UserModel from "../models/UserModel";
import FindOne from "../validation/FindOne";

export default async function ChangeUserStatus(_id: string) {
    const user = await FindOne(_id);

    const status = await UserModel.findByIdAndUpdate(_id, {
        status: user?.status === "active" ? "blocked" : "active",
    });
    console.log(status);
    if (!status) return "Error";
    else return "OK";
}
