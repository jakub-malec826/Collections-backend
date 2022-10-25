import { Router, Request, Response } from "express";

import GetAllTopics from "../../db/operations/topics/GetAllTopics";

import AddTopic from "../../db/operations/topics/AddTopic";

import DeleteTopic from "../../db/operations/topics/DeleteTopic";

const topicRouter = Router();

topicRouter.get("/get", async (req: Request, res: Response) => {
	res.json(await GetAllTopics()).end();
});

topicRouter.post("/add", async (req: Request, res: Response) => {
	res.json(await AddTopic(req.body.topic)).end();
});

topicRouter.delete("/delete/:topicid", async (req: Request, res: Response) => {
	await DeleteTopic(req.params.topicid);
	res.status(200).end();
});

export default topicRouter;
