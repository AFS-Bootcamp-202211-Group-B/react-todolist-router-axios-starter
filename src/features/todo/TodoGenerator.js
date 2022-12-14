import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import { postTodos } from "../../api/todos";

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const onAdd = () => {
    const todo = {text: todoText, done: false }
    postTodos(todo).then((response) => {
      dispatch(addTodo(response.data));
    })
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
