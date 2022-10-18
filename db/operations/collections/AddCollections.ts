import UserModel from "../../models/UserModel";
import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
export default async function AddCollections(
    userName: string,
    collections: CollectionSchemaIF
) {
    await UserModel.findOneAndUpdate(
        { userName },
        {
            $push: {
                collections,
            },
        },
        { new: true }
    );
}
