import ItemSchemaIF from "./ItemsSchemaIF";

export default interface CollectionSchemaIF {
	_id?: string;
	name: string;
	description: string;
	topic: string;
	image: { url: string; id: string };
	owner: string;
	items: ItemSchemaIF[];
}
