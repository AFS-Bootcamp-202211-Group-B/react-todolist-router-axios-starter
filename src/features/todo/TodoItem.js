import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { deleteTodo as deleteTodoAPI, toggleTodo as toggleTodoAPI } from "../../api/todos"
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    toggleTodoAPI(todo).then(() => {
      dispatch(toggleTodo(todo.id))
    })
    .catch(() => alert('failed to toggle'))    
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodoAPI(todo.id)
      .then(() => {
        dispatch(deleteTodo(todo.id))
      })
      .catch(() => alert('failed to delete'))
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
