import ItemSchemaIF from "../../interfaces/ItemsSchemaIF";
import UserModel from "../../models/UserModel";
export default async function DeleteItem(
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
            $pull: {
                "collections.$.items": { _id: item._id },
            },
        }
    );
}
