import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { postTodos } from "../../api/todos";
import { Button , Input } from "antd";


const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = { text: todoText, done: false };
    // dispatch(addTodo(todo));


    postTodos(todo).then((response) => {
        dispatch((addTodo(response.data)));
      })
 
    
    setTodoText("");
  };

  return (
    <>
      <Input 
      placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange} />

      <Button type="dashed" danger onClick={onAdd}>add</Button>
    </>
  );
};

export default TodoGenerator;
