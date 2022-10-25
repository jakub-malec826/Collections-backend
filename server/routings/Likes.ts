import express, { Router, Request, Response } from "express";

import AddLike from "../../db/operations/items/AddLike";
import UnLike from "../../db/operations/items/Unlike";

const likesRouter: Router = express.Router();

likesRouter.put("/addlike/:itemid", async (req: Request, res: Response) => {
	res.json(await AddLike(req.params.itemid, req.body.loginUser)).end();
});

likesRouter.put("/unlike/:itemid", async (req: Request, res: Response) => {
	res.json(await UnLike(req.params.itemid, req.body.loginUser)).end();
});

export default likesRouter;
