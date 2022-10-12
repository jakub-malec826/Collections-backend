import express, { Express } from "express";
import cors from "cors";

import authRouter from "./routings/Auth";

import ConnectToDb from "../db/ConnectToDb";
import userRouter from "./routings/User";
import adminRouter from "./routings/Admin";

ConnectToDb();

const server: Express = express();

server.use(cors());
server.use(express.json());

server.use("/auth", authRouter);
server.use("/user", userRouter);
server.use("/admin", adminRouter);

// const port = process.env.PORT;
const port = 9090;

server.listen(port, "192.168.0.145", () =>
    console.log("App starts on port", port)
);
