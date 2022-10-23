import { Router, Request, Response } from "express";

import AddTopic from "../../db/operations/topics/AddTopic";
import DeleteTopic from "../../db/operations/topics/DeleteTopic";
import GetAllTopics from "../../db/operations/topics/GetAllTopics";

const topicRouter = Router();

topicRouter.get("/get", async (req: Request, res: Response) => {
	res.json(await GetAllTopics()).end();
});

topicRouter.post("/add", async (req: Request, res: Response) => {
	await AddTopic(req.body.topic);
	res.status(200).end();
});

topicRouter.post("/delete", async (req: Request, res: Response) => {
	await DeleteTopic(req.body.topic);
	res.status(200).end();
});

export default topicRouter;
