import { Router, Request, Response } from "express";

import GetAllCollections from "../../db/operations/collections/GetAllCollections";

import AddCollections from "../../db/operations/collections/AddCollections";

import EditCollection from "../../db/operations/collections/EditCollection";

import DeleteCollection from "../../db/operations/collections/DeleteCollection";
import DeleteImageFromCloudinary from "../../db/operations/collections/DeleteImageFromCloudinary";

const collectionRouter = Router();

collectionRouter.get("/getall/:userid", async (req: Request, res: Response) => {
	res.json(await GetAllCollections(req.params.userid)).end();
});

collectionRouter.post(
	"/newcollection/",
	async (req: Request, res: Response) => {
		res.json(await AddCollections(req.body)).end();
	}
);

collectionRouter.put(
	"/editcollection/:collectionid",
	async (req: Request, res: Response) => {
		await DeleteImageFromCloudinary(req.params.collectionid);

		res.json(await EditCollection(req.params.collectionid, req.body)).end();
	}
);

collectionRouter.delete(
	"/deletecollection/:collectionid",
	async (req: Request, res: Response) => {
		await DeleteImageFromCloudinary(req.params.collectionid);
		await DeleteCollection(req.params.collectionid);
		res.status(200).end();
	}
);

export default collectionRouter;
