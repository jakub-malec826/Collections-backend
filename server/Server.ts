import express, { Express } from "express";
import cors from "cors";

import authRouter from "./routings/Auth";

import ConnectToDb from "../db/ConnectToDb";
import usersRouter from "./routings/Users";
import topicRouter from "./routings/Topic";
import itemsRouter from "./routings/Items";
import collectionRouter from "./routings/Collections";

ConnectToDb();

const server: Express = express();

server.use(cors());
server.use(express.json());

server.use("/auth", authRouter);

server.use("/users", usersRouter);
server.use("/collections", collectionRouter);
server.use("/items", itemsRouter);

server.use("/topic", topicRouter);

process.env.NODE_ENV === "development"
	? server.listen(9090, "192.168.0.145", () =>
			console.log("App starts on port", 9090)
	  )
	: server.listen(process.env.PORT, () =>
			console.log("App starts on port", process.env.PORT)
	  );
