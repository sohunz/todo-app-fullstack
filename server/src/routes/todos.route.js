import express from "express";
import {
    addTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from "../controllers/todos.controller.js";

export const router = express.Router();

router.get("/", getTodos);
router.post("/", addTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
