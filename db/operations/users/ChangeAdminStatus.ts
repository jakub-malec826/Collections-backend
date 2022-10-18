import UserModel from "../../models/UserModel";
import FindOne from "../../validation/FindOne";

export default async function ChangeAdminStatus(_id: string) {
    const user = await FindOne(_id);

    const isAdm = await UserModel.findByIdAndUpdate(_id, {
        isAdmin: !user?.isAdmin,
    });
    if (!isAdm) return "Error";
    else return "OK";
}
