import ItemSchemaIF from "./ItemsSchemaIF";

export default interface CollectionSchemaIF {
    name: string;
    description: string;
    topic: string;
    image: string;
    owner: string;
    items: ItemSchemaIF[];
}