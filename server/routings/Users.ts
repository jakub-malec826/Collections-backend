import { Router, Request, Response } from "express";
import AddToCollection from "../../db/operations/AddToCollection";
import DelFromColl from "../../db/operations/DelFromColl";
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
    console.log(req.params.user);
    res.json(
        await AddToCollection(req.body.userName, req.body.collection)
    ).end();
});
usersRouter.post(
    "/:user/delcoll",
    async (req: Request, res: Response) => {
        await req.body.collectionID.map((id: string) =>
            DelFromColl(req.params.user, id)
        );
        res.json("OK").end();
    }
);

export default usersRouter;
