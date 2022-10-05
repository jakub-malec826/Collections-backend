import express, { Express, Request, Response } from "express";
import cors from "cors";

import ConnectToDb from "./db/ConnectToDb";
import AddUserToDb from "./db/operations/AddUserToDb";
import MatchPassword from "./db/validation/MatchPassword";

const server: Express = express();
server.use(cors());
server.use(express.json());

ConnectToDb();

server.post("/signup", async (req: Request, res: Response) => {
    const ifExist = await AddUserToDb(req.body);
    res.json(ifExist).end();
});

server.post("/signin", async (req, res) => {
    const validateUser = await MatchPassword(
        req.body.userName,
        req.body.password
    );
    console.log(validateUser);
    res.json(validateUser).end();
});

const port = process.env.PORT || 9090;

server.listen(port, () => console.log("App work on port:", port));
