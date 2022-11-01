import { Router, Request, Response } from "express";

import GetAllCollections from "../../db/operations/collections/GetAllCollections";
import GetBiggestCollections from "../../db/operations/collections/GetBiggestCollections";
import GetFilteringCollections from "../../db/operations/collections/GetFilteringCollections";

import AddCollections from "../../db/operations/collections/AddCollections";
import AddItemToCollection from "../../db/operations/collections/AddItemToCollection";

import EditCollection from "../../db/operations/collections/EditCollection";

import DeleteCollection from "../../db/operations/collections/DeleteCollection";
import DeleteImageFromCloudinary from "../../db/operations/collections/cloudinary/DeleteImageFromCloudinary";
import DeleteItemFromCollection from "../../db/operations/collections/DeleteItemFromCollection";

const collectionRouter = Router();

collectionRouter.get("/getall/:userid", async (req: Request, res: Response) => {
	res.json(await GetAllCollections(req.params.userid)).end();
});

collectionRouter.get(
	"/getall/:userid/:filtertext",
	async (req: Request, res: Response) => {
		res.json(
			await GetFilteringCollections(
				req.params.userid,
				req.params.filtertext
			)
		).end();
	}
);

collectionRouter.get("/getbiggest", async (req: Request, res: Response) => {
	res.json(await GetBiggestCollections()).end();
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

collectionRouter.put(
	"/additemtocollection/:collectionName/:itemid",
	async (req: Request, res: Response) => {
		res.json(
			await AddItemToCollection(
				req.params.collectionName,
				req.params.itemid
			)
		).end();
	}
);

collectionRouter.put(
	"/deleteitemfromcollection/:collectionName/:itemid",
	async (req: Request, res: Response) => {
		res.json(
			await DeleteItemFromCollection(
				req.params.collectionName,
				req.params.itemid
			)
		).end();
	}
);

collectionRouter.delete(
	"/deletecollection/:collectionid",
	async (req: Request, res: Response) => {
		await DeleteCollection(req.params.collectionid);
		res.status(200).end();
	}
);

export default collectionRouter;
