export default interface ItemSchemaIF {
	_id?: string;
	name: string;
	tag: string[];
	comments: { user: string; comment: string }[];
	likes: string[];
	additionalField: { fieldName: string; fieldType: string }[];
}
