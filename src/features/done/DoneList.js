import { useSelector } from "react-redux";
import TodoGenerator from "../todo/TodoGenerator";
import TodoGroup from "../todo/TodoGroup";
import "../todo/TodoItem.css";


import React from 'react'

export default function DoneList() {
  
  const todos = useSelector((state) => {
      return state.todoList.filter(item => item.done);
  });

  return todos.map((todo) => {
      return <div className="box" key={todo.id} >{todo.text}</div>;
  });


}


 

 