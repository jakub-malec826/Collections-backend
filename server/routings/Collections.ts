import { Router, Request, Response } from "express";

import itemsRouter from "./Items";

import AddCollections from "../../db/operations/collections/AddCollections";
import DeleteCollection from "../../db/operations/collections/DeleteCollection";
import EditCollection from "../../db/operations/collections/EditCollection";

const collectionRouter = Router();

collectionRouter.use("/items", itemsRouter);

collectionRouter.post("/:user/newcoll", async (req: Request, res: Response) => {
	await AddCollections(req.params.user, req.body.collection);
	res.status(200).end();
});

collectionRouter.post(
	"/:user/editcoll",
	async (req: Request, res: Response) => {
		await EditCollection(req.params.user, req.body.collection);
		res.status(200).end();
	}
);

collectionRouter.post("/:user/delcoll", async (req: Request, res: Response) => {
	await DeleteCollection(req.params.user, req.body.collection);
	res.status(200).end();
});

export default collectionRouter;
