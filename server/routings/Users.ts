import { Router, Request, Response } from "express";

import collectionRouter from "./Collections";

import GetAllUsers from "../../db/operations/users/GetAllUsers";
import FindByName from "../../db/validation/FindByName";

const usersRouter: Router = Router();

usersRouter.use("/collections", collectionRouter);

usersRouter.get("/allusers", async (req: Request, res: Response) => {
	res.json(await GetAllUsers()).end();
});

usersRouter.post("/:user", async (req: Request, res: Response) => {
	res.json(await FindByName(req.params.user)).end();
});

export default usersRouter;
