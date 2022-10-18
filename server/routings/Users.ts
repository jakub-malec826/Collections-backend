import { Router, Request, Response } from "express";
import AddItem from "../../db/operations/items/AddItem";

import AddCollections from "../../db/operations/collections/AddCollections";
import DeleteCollection from "../../db/operations/collections/DeleteCollection";
import EditCollection from "../../db/operations/collections/EditCollection";
import GetAllUsers from "../../db/operations/users/GetAllUsers";
import FindByName from "../../db/validation/FindByName";
import EditItem from "../../db/operations/items/EditItem";
import DeleteItem from "../../db/operations/items/DeleteItem";

const usersRouter: Router = Router();

usersRouter.get("/allusers", async (req: Request, res: Response) => {
    res.json(await GetAllUsers()).end();
});

usersRouter.post("/:user", async (req: Request, res: Response) => {
    res.json(await FindByName(req.params.user)).end();
});

usersRouter.post("/:user/newcoll", async (req: Request, res: Response) => {
    console.log(req.body.collection);
    await AddCollections(req.params.user, req.body.collection);
    res.status(200).end();
});

usersRouter.post("/:user/editcoll", async (req: Request, res: Response) => {
    await EditCollection(req.params.user, req.body.collection);
    res.status(200).end();
});

usersRouter.post("/:user/delcoll", async (req: Request, res: Response) => {
    await DeleteCollection(req.params.user, req.body.collection);
    res.status(200).end();
});

usersRouter.post(
    "/:user/:collname/additem",
    async (req: Request, res: Response) => {
        await AddItem(req.params.user, req.params.collname, req.body.item);
        res.status(200).end();
    }
);

usersRouter.post(
    "/:user/:collname/edititem",
    async (req: Request, res: Response) => {
        console.log(req.body.index);
        await EditItem(
            req.params.user,
            req.params.collname,
            req.body.item,
            req.body.index
        );
        res.status(200).end();
    }
);

usersRouter.post(
    "/:user/:collname/deleteitem",
    async (req: Request, res: Response) => {
        await DeleteItem(req.params.user, req.params.collname, req.body.item);
        res.status(200).end();
    }
);

export default usersRouter;
