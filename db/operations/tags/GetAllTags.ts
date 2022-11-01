import ItemModel from "../../models/ItemModel";

export default async function GetAllTags() {
	const tags = await ItemModel.find().select("tag -_id");
	const tagsList: string[] = [];
	tags.map((t) =>
		t.tag.map((tt) => {
			!tagsList.includes(tt) && tagsList.push(tt);
		})
	);
	const tagCloudList: { value: string; count: number }[] = [];
	tagsList.map((t) =>
		tagCloudList.push({
			value: t,
			count: Math.floor(Math.random() * (60 - 10) + 10),
		})
	);

	return tagCloudList;
}
