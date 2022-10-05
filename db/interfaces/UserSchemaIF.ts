import { Document } from "mongoose";

export default interface UserSchemaIF extends Document {
    userName: string;
    password: string;
    email: string;
    isAdmin: boolean;
    collections: [];
}
