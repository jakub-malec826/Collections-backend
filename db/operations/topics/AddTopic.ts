import TopicModel from "../../models/TopicModel";

export default async function AddTopic(topic: string) {
	const newTopic = new TopicModel({ topic });
	await newTopic.save();
	return newTopic;
}
