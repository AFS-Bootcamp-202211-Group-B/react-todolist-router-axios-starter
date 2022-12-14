import React from 'react'
import { useSelector } from "react-redux";
import TodoItem from '../features/todo/TodoItem';
import { Link } from "react-router-dom"

export default function DoneListPage() {
    const doneTodos = useSelector((state) => {
        return state.todoList.filter(item => item.done);
    });
    return (
        <>
            <div onClickCapture={e => { alert("dont click on me, modify todo items at home page"); e.stopPropagation() }}>
                {doneTodos.map((todo) => { return <TodoItem todo={todo} key={todo.id} /> })}
            </div>
            <Link to='/'>take me back to home</Link>
        </>
    )
}
