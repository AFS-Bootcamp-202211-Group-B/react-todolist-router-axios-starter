import { useSelector } from "react-redux";
import TodoGenerator from "../todo/TodoGenerator";
import TodoGroup from "../todo/TodoGroup";
import DoneItem from "./DoneItem";


import React from 'react'

export default function DoneList() {
  
    const todos = useSelector((state) => {
      return state.todoList.filter(item => item.done);
  });

  return todos.map((todo) => {
      return <DoneItem todo={todo} key={todo.id} done/>;
  });


}


 

 