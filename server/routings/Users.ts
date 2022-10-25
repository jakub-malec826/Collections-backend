import { Router, Request, Response } from "express";

import GetAllUsers from "../../db/operations/users/GetAllUsers";
import SetUser from "../../db/operations/users/SetUser";
import FindByName from "../../db/validation/FindByName";

const usersRouter: Router = Router();

usersRouter.get("/getall", async (req: Request, res: Response) => {
	res.json(await GetAllUsers()).end();
});

usersRouter.put("/set/:userid", async (req: Request, res: Response) => {
	await SetUser(req.params.userid, req.body);
	res.status(200).end();
});

usersRouter.post("/:user", async (req: Request, res: Response) => {
	res.json(await FindByName(req.params.user)).end();
});

export default usersRouter;
