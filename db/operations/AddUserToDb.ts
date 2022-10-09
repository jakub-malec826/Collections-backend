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
    if (cErr === "OK") {
        const user = new UserModel({
            userName,
            email,
            password,
            isAdmin: true,
            status: "active",
        });
        await user.save();
        console.log(user);
    }
    console.log(cErr);
    return cErr;
}
