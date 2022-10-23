import { Router, Request, Response } from "express";

import itemsRouter from "./Items";

import cloudinary from "cloudinary";

import AddCollections from "../../db/operations/collections/AddCollections";
import DeleteCollection from "../../db/operations/collections/DeleteCollection";
import EditCollection from "../../db/operations/collections/EditCollection";
import UserModel from "../../db/models/UserModel";

const collectionRouter = Router();

console.log(process.env.REACT_APP_API_SECRET);

cloudinary.v2.config({
	cloud_name: process.env.REACT_APP_CLOUD_NAME,
	api_key: process.env.REACT_APP_API_KEY,
	api_secret: process.env.REACT_APP_API_SECRET,
});

collectionRouter.use("/items", itemsRouter);

collectionRouter.post("/:user/newcoll", async (req: Request, res: Response) => {
	await AddCollections(req.params.user, req.body.collection);
	res.status(200).end();
});

collectionRouter.post(
	"/:user/editcoll",
	async (req: Request, res: Response) => {
		const user = await UserModel.findOne({ userName: req.params.user });
		const coll = user?.collections.find(
			(col) => col.name === req.body.collection.name
		);
		coll?.image.id !== req.body.collection.image.id &&
			(await cloudinary.v2.uploader.destroy(
				coll ? coll?.image.id : "",
				(err: string, res: string) => console.log(err, res)
			));
		await EditCollection(req.params.user, req.body.collection);
		res.status(200).end();
	}
);

collectionRouter.post("/:user/delcoll", async (req: Request, res: Response) => {
	await cloudinary.v2.uploader.destroy(
		req.body.collection.image.id,
		(err: string, res: string) => console.log(err, res)
	);
	await DeleteCollection(req.params.user, req.body.collection);
	res.status(200).end();
});

export default collectionRouter;
