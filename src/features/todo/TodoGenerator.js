import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import {postTodos} from "../../api/todos";
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
      <input
        placeholder="input your todo"
        type="text"
        name="todo"
        value={todoText}
        onChange={onTextChange}
      />
      <button onClick={onAdd}>add</button>
    </>
  );
};

export default TodoGenerator;
