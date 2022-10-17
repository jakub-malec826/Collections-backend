import UserModel from "../models/UserModel";
import CollectionSchemaIF from "../interfaces/CollectionSchemaIF";
export default async function AddToCollection(
    userName: string,
    collections: CollectionSchemaIF
) {
    const c = await UserModel.findOneAndUpdate(
        { userName },
        {
            $push: {
                collections,
            },
        },
        { new: true }
    );
    console.log(c);
}
