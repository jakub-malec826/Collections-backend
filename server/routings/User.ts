import { Router, Request, Response } from "express";
import GetAllUsers from "../../db/operations/GetAllUsers";

const userRouter: Router = Router();

userRouter.get("/all", async (req: Request, res: Response) => {
    res.json(await GetAllUsers()).end();
});

export default userRouter;
