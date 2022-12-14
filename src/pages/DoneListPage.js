import React from "react";

import { useSelector } from "react-redux";

export default function DoneListPage() {
    const todos = useSelector((state) => {
        return state.todoList;
    });
    return todos.map((todo, index) => {
        return todo.done ? <div key={index}>{todo.text}</div> : null;
    });
}
