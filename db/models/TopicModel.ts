import mongoose from "mongoose";
import TopicSchema from "../schemas/TopicSchema";
import TopicSchemaIF from "../interfaces/TopicSchemaIF";

const TopicModel = mongoose.model<TopicSchemaIF>("TopicModel", TopicSchema);
export default TopicModel;
