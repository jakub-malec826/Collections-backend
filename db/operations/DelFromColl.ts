import UserModel from "../models/UserModel";
import CollectionSchemaIF from "../interfaces/CollectionSchemaIF";
export default async function DelFromColl(
    userName: string,
    collection: CollectionSchemaIF
) {
    const coll = await UserModel.findOneAndUpdate(
        { userName },
        {
            $pull: {
                collections: { _id: collection._id },
            },
        },
        { new: true }
    );
    console.log(coll);
}
