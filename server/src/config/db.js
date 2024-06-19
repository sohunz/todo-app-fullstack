import mysql2 from "mysql2/promise";

export const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo-app",
    port: 3306,
    namedPlaceholders: true,
});
