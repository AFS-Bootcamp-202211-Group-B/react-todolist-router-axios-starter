import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../api/todos";
import { addTodo } from "./todoSlice";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  }

  const onAdd = () => {
    const newTodoObj = { text: todoText, done: false };
    createTodo(newTodoObj)
      .then((response) => {
        dispatch(addTodo(response.data))
        setTodoText("")
      })
      .catch(() => alert('fail to create new todo item'))
  }

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
