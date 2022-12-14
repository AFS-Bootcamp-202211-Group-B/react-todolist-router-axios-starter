import React from 'react';
import { useSelector } from "react-redux";
import DoneItem from './DoneItem';
export default function DoneList() {
    const todos = useSelector((state) => state.todoList);
        return todos.filter(item => item.done).map((done,index)=> {
            return <DoneItem key={index} done={done}/>;
        });
      
}
