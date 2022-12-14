import { useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import {postTodos} from "../../api/todos";
import { Button, Input } from 'antd';
import "./TodoGenerator.css";
const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    //Todo for axios
    // dispatch(addTodo(todo));
    postTodos(todo.text).then((response)=>{
    dispatch(addTodo(response.data));
      
    }, [dispatch]);
  
    setTodoText("");
  };

  return (
    <>
      <Input
        placeholder="input your todo"
        value={todoText}
        onChange={onTextChange}
        size="middle"
        style={{ width: 304 }}
      />
      <Button onClick={onAdd} type="primary" style={{background:"#2ecc40",marginLeft: "20px"}}>add</Button>


    </>
  );
};

export default TodoGenerator;
