import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "../../@/components/ui/dialog";
import { Input } from "../../@/components/ui/input";
import { Label } from "../../@/components/ui/label";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState("");
    useEffect(() => {
        const fetchTodo = async () => {
            const response = await axios.get("http://localhost:8080/api/todo");
            setTodos(response.data);
        };

        fetchTodo();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/todo/${id}`);
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleUpdateChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    };

    const handleUpdate = async (id) => {
        axios.put(`http://localhost:8080/api/todo/${id}`, {
            title: value,
        });

        const updateTodo: any = todos.map((todo: any) =>
            todo.id === id ? { ...todo, title: value } : todo
        );

        setTodos(updateTodo);
    };

    console.log(value);

    return (
        <div className="max-w-lg mx-auto space-y-2">
            {todos.map((todo) => {
                return (
                    <div
                        key={todo.id}
                        className="border flex items-center justify-between p-3"
                    >
                        <p>{todo.title}</p>
                        <div className=" space-x-5">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">update</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="name"
                                                className="text-right"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                className="col-span-3"
                                                onChange={handleUpdateChange}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button
                                            onClick={() =>
                                                handleUpdate(todo.id)
                                            }
                                        >
                                            Save changes
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <button
                                onClick={() => handleDelete(todo.id)}
                                className="text-red-500"
                            >
                                delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
