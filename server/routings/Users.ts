import { Router, Request, Response } from "express";

import AddToCollection from "../../db/operations/AddToCollection";
import DelFromColl from "../../db/operations/DelFromColl";
import EditCollection from "../../db/operations/EditCollection";
import GetAllUsers from "../../db/operations/GetAllUsers";
import FindByName from "../../db/validation/FindByName";

const usersRouter: Router = Router();

usersRouter.get("/allusers", async (req: Request, res: Response) => {
    res.json(await GetAllUsers()).end();
});

usersRouter.post("/:user/one", async (req: Request, res: Response) => {
    res.json(await FindByName(req.params.user)).end();
});

usersRouter.post("/:user/newcoll", async (req: Request, res: Response) => {
    console.log(req.body.collection);
    await AddToCollection(req.params.user, req.body.collection);
    res.status(200).end();
});

usersRouter.post("/:user/editcoll", async (req: Request, res: Response) => {
    await EditCollection(req.params.user, req.body.collection);
    res.status(200).end();
});

usersRouter.post("/:user/delcoll", async (req: Request, res: Response) => {
    await DelFromColl(req.params.user, req.body.collection);
    res.status(200).end();
});

export default usersRouter;
