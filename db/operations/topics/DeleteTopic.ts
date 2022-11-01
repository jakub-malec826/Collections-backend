import TopicModel from "../../models/TopicModel";

export default async function DeleteTopic(topicID: string) {
	await TopicModel.findByIdAndDelete(topicID, { new: true });
}
