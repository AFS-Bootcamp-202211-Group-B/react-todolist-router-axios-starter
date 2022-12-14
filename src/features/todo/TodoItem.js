import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, addTodo } from "./todoSlice";
import { putTodos } from "../../api/todos";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    // dispatch(toggleTodo(todo.id));
    putTodos(todo).then((response)=>{
      dispatch(toggleTodo(todo.id));
    }, [dispatch]);
    
  };

  const onDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <span className="times" onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
