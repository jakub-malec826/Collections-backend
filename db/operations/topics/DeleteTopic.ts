import TopicModel from "../../models/TopicModel";
export default async function DeleteTopic(topic: string) {
	await TopicModel.findOneAndDelete({ topic }, { new: true });
}
