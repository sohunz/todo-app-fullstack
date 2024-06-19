import axios from "axios";
import { useState } from "react";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";

const TodoForm = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleAddTodo = () => {
        axios.post("http://localhost:8080/api/todo", { title: value });
    };

    return (
        <div className="max-w-lg mx-auto mb-10 mt-5 space-x-2">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Input todo..."
                    onChange={handleChange}
                />
                <Button onClick={handleAddTodo}> Add todo</Button>
            </div>
        </div>
    );
};

export default TodoForm;
