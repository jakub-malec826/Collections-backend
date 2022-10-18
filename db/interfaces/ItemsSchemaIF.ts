export default interface ItemSchemaIF {
    _id?: string;
    name: string;
    tag: string[];
    comments: { user: string; comment: string }[];
    likes: number;
    additionalField: { fieldName: string; fieldType: string }[];
}
