import { Router, Request, Response } from "express";

import GetAllUsers from "../../db/operations/users/GetAllUsers";
import FindByName from "../../db/validation/FindByName";

import SetUserPrivileges from "../../db/operations/users/SetUserPrivileges";
import SetUserStatus from "../../db/operations/users/SetUserStatus";

import DeleteUser from "../../db/operations/users/DeleteUser";

const usersRouter: Router = Router();

usersRouter.get("/getall", async (req: Request, res: Response) => {
	res.json(await GetAllUsers()).end();
});

usersRouter.post("/:user", async (req: Request, res: Response) => {
	res.json(await FindByName(req.params.user)).end();
});

usersRouter.put(
	"/setprivileges/:userid",
	async (req: Request, res: Response) => {
		await SetUserPrivileges(req.params.userid, req.body.privileges);
		res.status(200).end();
	}
);
usersRouter.put("/setstatus/:userid", async (req: Request, res: Response) => {
	await SetUserStatus(req.params.userid, req.body.status);
	res.status(200).end();
});

usersRouter.delete("/delete/:userid", async (req: Request, res: Response) => {
	await DeleteUser(req.params.userid);
	res.status(200).end();
});

export default usersRouter;
