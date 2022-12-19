import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../api/todos";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { addTodos } from "./todoSlice";


const TodoList = () => {
  const todos = useSelector((state) => {
    return state.todoList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((response)=>{
      dispatch(addTodos(response.data));
    });
  }, [dispatch]);

  return (
    <>
      <h2>Todo List</h2>
        <TodoGroup todos={todos} />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
