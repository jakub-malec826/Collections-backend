import express, { Router, Request, Response } from "express";

import AddUserToDb from "../../db/operations/AddUserToDb";
import MatchPassword from "../../db/validation/MatchPassword";

const authRouter: Router = express.Router();

authRouter.post("/signup", async (req: Request, res: Response) => {
    const ifExist = await AddUserToDb(req.body);
    res.json(ifExist).end();
});

authRouter.post("/signin", async (req: Request, res: Response) => {
    const validateUser = await MatchPassword(
        req.body.userName,
        req.body.password
    );
    res.json(validateUser).end();
});

export default authRouter;
