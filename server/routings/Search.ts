import express, { Router, Request, Response } from "express";
import SearchBase from "../../db/operations/searching/SearchBase";

const searchRouter: Router = express.Router();

searchRouter.get("/:searchinput", async (req: Request, res: Response) => {
	res.json(await SearchBase(req.params.searchinput)).end();
});

export default searchRouter;
