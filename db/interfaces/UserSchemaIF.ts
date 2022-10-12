import { Document } from "mongoose";
import CollectionSchemaIF from "./CollectionSchemaIF";

export default interface UserSchemaIF extends Document {
    userName: string;
    password: string;
    email: string;
    isAdmin: boolean;
    status: string;
    collections: CollectionSchemaIF[];
}
