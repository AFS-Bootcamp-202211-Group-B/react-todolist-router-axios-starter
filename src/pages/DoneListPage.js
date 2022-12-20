import React from 'react'
import DoneItem from "../features/done/DoneItem";
import { useSelector } from 'react-redux';

export default function DoneListPage() {
    const todos = useSelector((state) => state.todoList);
    return todos.filter(todo => todo.done ).map((done, index) => {
      return <DoneItem key={index} done={done} />;
    });
}
