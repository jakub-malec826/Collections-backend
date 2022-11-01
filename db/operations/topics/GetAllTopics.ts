import TopicModel from "../../models/TopicModel";

export default async function GetAllTopics() {
	return await TopicModel.find();
}
