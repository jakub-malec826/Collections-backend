import mongoose from "mongoose";
import UserSchemaIF from "../interfaces/UserSchemaIF";
import UserSchema from "../schemas/UserSchema";

const UserModel = mongoose.model<UserSchemaIF>("UserModel", UserSchema);
export default UserModel;
