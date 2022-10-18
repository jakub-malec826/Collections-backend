import ItemSchemaIF from "../../interfaces/ItemsSchemaIF";
import UserModel from "../../models/UserModel";
export default async function AddItem(
    userName: string,
    collectionName: string,
    item: ItemSchemaIF
) {
    await UserModel.findOneAndUpdate(
        {
            userName,
            "collections.name": collectionName,
        },
        {
            $push: {
                "collections.$.items": item,
            },
        },
        { new: true }
    );
}
