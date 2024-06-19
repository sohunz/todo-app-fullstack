import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { router } from "./routes/todos.route.js";

export const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/todo/", router);
