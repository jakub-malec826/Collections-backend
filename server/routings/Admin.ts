import { Router, Request, Response } from "express";

import ChangeAdminStatus from "../../db/operations/ChangeAdminStatus";
import ChangeUserStatus from "../../db/operations/ChangeUserStatus";

const adminRouter = Router();

adminRouter.post("/status", async (req: Request, res: Response) => {
    req.body.map((i: string) => ChangeUserStatus(i));
    res.json("OK").end();
});

adminRouter.post("/isadmin", async (req: Request, res: Response) => {
    req.body.map((i: string) => ChangeAdminStatus(i));
    res.json("OK").end();
});

export default adminRouter;
