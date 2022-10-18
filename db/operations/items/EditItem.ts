import UserModel from "../../models/UserModel";
import ItemSchemaIF from "../../interfaces/ItemsSchemaIF";
export default async function EditCollection(
    userName: string,
    collectionName: string,
    item: ItemSchemaIF,
    index: number
) {
    await UserModel.findOneAndUpdate(
        {
            userName,
            "collections.name": collectionName,
        },
        {
            $set: {
                [`collections.$.items.${index}`]: item,
            },
        }
    );
}
