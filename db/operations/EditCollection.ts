import CollectionSchemaIF from "../interfaces/CollectionSchemaIF";
import UserModel from "../models/UserModel";
export default async function EditCollection(
    userName: string,
    collection: CollectionSchemaIF
) {
    const u = await UserModel.findOneAndUpdate(
        {
            userName,
            "collections._id": collection._id,
        },
        {
            $set: {
                "collections.$": collection,
            },
        },
        { new: true }
    );
    console.log(u);
}
