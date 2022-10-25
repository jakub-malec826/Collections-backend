import express, { Router, Request, Response } from "express";

import AddComment from "../../db/operations/items/AddComment";

const commentsRouter: Router = express.Router();

commentsRouter.put(
	"/addcomment/:itemid",
	async (req: Request, res: Response) => {
		res.json(await AddComment(req.params.itemid, req.body.comment)).end();
	}
);

export default commentsRouter;
