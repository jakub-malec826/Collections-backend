import UserModel from "../models/UserModel";
import IfUserExist from "../validation/IfUserExist";

interface userDataIF {
    userName: string;
    email: string;
    password: string;
}

export default async function AddUserToDb(userData: userDataIF) {
    const { userName, email, password } = userData;
    const cErr = await IfUserExist(userName, email);
    const user = new UserModel({
        userName,
        email,
        password,
        isAdmin: true,
        status: "active",
    });
    if (cErr === "OK") {
        await user.save();
        console.log(user);
        return { message: cErr, body: user };
    }
    return { message: cErr, body: null };
}
