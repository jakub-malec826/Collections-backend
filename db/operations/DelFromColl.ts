import UserModel from "../models/UserModel";
export default async function DelFromColl(userName: string, collID: string) {
    const coll = await UserModel.findOneAndUpdate(
        { userName },
        {
            $pull: {
                collections: { _id: collID },
            },
        },
        { multi: true, new: true }
    );
    console.log(coll);
}
