import express, { Express } from "express";
import cors from "cors";

import authRouter from "./routings/Auth";

import ConnectToDb from "../db/ConnectToDb";
import userRouter from "./routings/User";

ConnectToDb();

const server: Express = express();

server.use(cors());
server.use(express.json());

server.use("/auth", authRouter);
server.use("/user", userRouter);

const port = process.env.PORT || 9090;

server.listen(port, () => console.log("App work on port:", port));
