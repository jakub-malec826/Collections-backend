export default interface ItemSchemaIF {
    id: number;
    name: string;
    tag: string[];
    comments: { user: string; comment: string }[];
    likes: number;
}
