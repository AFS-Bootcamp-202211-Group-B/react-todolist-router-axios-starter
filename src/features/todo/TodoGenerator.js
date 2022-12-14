import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { postTodo } from "../../api/todos";
import { Input, Button } from "antd";

const TodoGenerator = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState("");

    const onTextChange = (event) => {
        setTodoText(event.target.value);
    };

    const onAdd = () => {
        const todo = { text: todoText, done: false };
        // dispatch(addTodo(todo));
        // call api and update state
        postTodo(todo).then((response) => {
            dispatch(addTodo(response.data));
        });
        // create a reducer
        setTodoText("");
    };

    return (
        <>
            <Input
                placeholder="input your todo"
                type="text"
                name="todo"
                value={todoText}
                onChange={onTextChange}
                style={{ width: "250px" }}
            />
            &nbsp;
            <Button type="default" onClick={onAdd}>
                Add
            </Button>
        </>
    );
};

export default TodoGenerator;
