import { Router, Request, Response } from "express";

import commentsRouter from "./Comments";
import likesRouter from "./Likes";

import GetAllItems from "../../db/operations/items/GetAllItems";

import AddItem from "../../db/operations/items/AddItem";

import EditItem from "../../db/operations/items/EditItem";

import DeleteItem from "../../db/operations/items/DeleteItem";
import GetLastItems from "../../db/operations/items/GetLastItems";

const itemsRouter = Router();

itemsRouter.use("/comments", commentsRouter);
itemsRouter.use("/likes", likesRouter);

itemsRouter.get(
	"/getall/:collectionname",
	async (req: Request, res: Response) => {
		res.json(await GetAllItems(req.params.collectionname)).end();
	}
);
itemsRouter.get("/lastadded", async (req: Request, res: Response) => {
	res.json(await GetLastItems()).end();
});

itemsRouter.post("/newitem", async (req: Request, res: Response) => {
	res.json(await AddItem(req.body)).end();
});

itemsRouter.put("/edititem/:itemid", async (req: Request, res: Response) => {
	res.json(await EditItem(req.params.itemid, req.body)).end();
});

itemsRouter.delete(
	"/deleteitem/:itemid",
	async (req: Request, res: Response) => {
		await DeleteItem(req.params.itemid);
		res.status(200).end();
	}
);

export default itemsRouter;
