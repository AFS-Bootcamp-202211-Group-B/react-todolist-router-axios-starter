import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { getAllTodos } from "../../api/todos";
import { useEffect } from "react";
import { setTodo } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector(state => state.todoList)
  const dispatch = useDispatch()
  useEffect(() => {
    getAllTodos()
      .then(response => {
        dispatch(setTodo(response.data));
      })
      .catch(e => console.log(e))
  }, [])
  return (
    <>
      <TodoGroup todos={todos} />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
