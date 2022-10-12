import { Router, Request, Response } from "express";
import AddToCollection from "../../db/operations/AddToCollection";
import GetAllUsers from "../../db/operations/GetAllUsers";
import FindByName from "../../db/validation/FindByName";

const userRouter: Router = Router();

userRouter.get("/all", async (req: Request, res: Response) => {
    res.json(await GetAllUsers()).end();
});

userRouter.post("/one", async (req: Request, res: Response) => {
    res.json(await FindByName(req.body.userName)).end();
});

userRouter.post("/newcoll", async (req: Request, res: Response) => {
    console.log(req.body.collection);
    res.json(
        await AddToCollection(req.body.userName, req.body.collection)
    ).end();
});

export default userRouter;
