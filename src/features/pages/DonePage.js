import React  from "react";
import { useSelector } from "react-redux";
import TodoItem from "../todo/TodoItem";


export default function DonePage()
{
    // const todos = useSelector((state) => {
    //   return state.todoList.filter((todo) => todo.done === true);
    // });
    // console.log(todos);
    // return todos.map((todo) => {
    //     return <span>{todo.text}</span>;
    // })


    const todos = useSelector((state) => state.todoList);
    const doneTodos =  todos.filter(todo => todo.done);
    return doneTodos.map((todo)=> {
        return <TodoItem todo ={todo} key={todo.id} />
    });



}
