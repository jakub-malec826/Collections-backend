import { Router, Request, Response } from "express";
import AddComment from "../../db/operations/items/AddComment";

import AddItem from "../../db/operations/items/AddItem";
import AddLike from "../../db/operations/items/AddLike";
import DeleteItem from "../../db/operations/items/DeleteItem";
import EditItem from "../../db/operations/items/EditItem";
import UnLike from "../../db/operations/items/Unlike";

const itemsRouter = Router();

itemsRouter.post(
	"/:user/:collname/additem",
	async (req: Request, res: Response) => {
		await AddItem(req.params.user, req.params.collname, req.body.item);
		res.status(200).end();
	}
);

itemsRouter.post(
	"/:user/:collname/edititem",
	async (req: Request, res: Response) => {
		console.log(req.body.index);
		await EditItem(
			req.params.user,
			req.params.collname,
			req.body.item,
			req.body.index
		);
		res.status(200).end();
	}
);

itemsRouter.post(
	"/:user/:collname/deleteitem",
	async (req: Request, res: Response) => {
		await DeleteItem(req.params.user, req.params.collname, req.body.item);
		res.status(200).end();
	}
);

itemsRouter.post(
	"/:user/:collname/addcomment",
	async (req: Request, res: Response) => {
		await AddComment(
			req.params.user,
			req.params.collname,
			req.body.itemIndex,
			req.body.comment
		);
		res.status(200).end();
	}
);
itemsRouter.post(
	"/:user/:collname/addlike",
	async (req: Request, res: Response) => {
		await AddLike(
			req.params.user,
			req.body.loginUser,
			req.params.collname,
			req.body.itemIndex
		);
		res.status(200).end();
	}
);

itemsRouter.post(
	"/:user/:collname/unlike",
	async (req: Request, res: Response) => {
		await UnLike(
			req.params.user,
			req.body.loginUser,
			req.params.collname,
			req.body.itemIndex
		);
		res.status(200).end();
	}
);

export default itemsRouter;
