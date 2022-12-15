import React from "react";

import { useSelector } from "react-redux";
import { List } from "antd";

export default function DoneListPage() {
    const todos = useSelector((state) => {
        return state.todoList;
    });
    return (
        <List
            itemLayout="horizontal"
            dataSource={todos}
            renderItem={(todo, index) =>
                todo.done ? (
                    <List.Item>
                        <div key={index}>{todo.text}</div>
                    </List.Item>
                ) : null
            }
        />
    );
    // return todos.map((todo, index) => {
    //     return todo.done ? <div key={index}>{todo.text}</div> : null;
    // });
}
