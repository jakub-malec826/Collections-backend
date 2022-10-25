import TopicModel from "../../models/TopicModel";
export default async function DeleteTopic(topicId: string) {
	await TopicModel.findByIdAndDelete(topicId, { new: true });
}
