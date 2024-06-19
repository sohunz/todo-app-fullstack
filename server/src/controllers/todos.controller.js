import { db } from "../config/db.js";

export const getTodos = async (req, res) => {
    const [data] = await db.query("SELECT * FROM todo");
    res.status(200).json(data);
};
export const addTodo = async (req, res) => {
    await db.query("ALTER TABLE todo AUTO_INCREMENT = 1");
    await db.query("INSERT INTO todo (title) VALUE(?)", [req.body.title]);
    res.status(200).json({ msg: "Todo added successfully" });
};
export const updateTodo = async (req, res) => {
    const id = parseInt(req.params.id);
    const newTitle = req.body.title;

    await db.query("UPDATE todo SET title= ? WHERE id = ?", [newTitle, id]);
    res.send("Update successfully");
};
export const deleteTodo = async (req, res) => {
    const id = parseInt(req.params.id);

    await db.query(`DELETE FROM todo WHERE id = ?`, [id]);
    res.send("delete successfully");
};
