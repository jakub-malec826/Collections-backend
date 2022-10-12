import UserModel from "../models/UserModel";
import CollectionSchemaIF from "../interfaces/CollectionSchemaIF";
export default async function AddToCollection(
    userName: string,
    collections: CollectionSchemaIF
) {
    const upd = await UserModel.findOneAndUpdate(
        { userName },
        {
            $push: {
                collections,
            },
        },
        { new: true }
    );
    console.log(userName, collections);
    console.log(upd?.collections[0].description);
    return upd;
}
