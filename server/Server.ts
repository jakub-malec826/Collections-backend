import express, { Express } from "express";
import * as dotenv from "dotenv";

import cors from "cors";
dotenv.config();

import ConnectToDb from "../db/ConnectToDb";
import authRouter from "./routings/Auth";

import usersRouter from "./routings/Users";
import topicRouter from "./routings/Topic";
import itemsRouter from "./routings/Items";
import collectionRouter from "./routings/Collections";
import searchRouter from "./routings/Search";

const server: Express = express();

ConnectToDb();

server.use(cors());
server.use(express.json());

server.use("/auth", authRouter);

server.use("/users", usersRouter);
server.use("/collections", collectionRouter);
server.use("/items", itemsRouter);

server.use("/topic", topicRouter);
server.use("/search", searchRouter);

process.env.NODE_ENV === "development"
	? server.listen(9090, () => console.log("App starts on port", 9090))
	: server.listen(process.env.PORT, () =>
			console.log("App starts on port", process.env.PORT)
	  );
