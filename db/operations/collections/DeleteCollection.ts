import UserModel from "../../models/UserModel";
import CollectionSchemaIF from "../../interfaces/CollectionSchemaIF";
export default async function DeleteCollection(
    userName: string,
    collection: CollectionSchemaIF
) {
    await UserModel.findOneAndUpdate(
        { userName },
        {
            $pull: {
                collections: { _id: collection._id },
            },
        },
        { new: true }
    );
}
