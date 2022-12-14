import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { putTodos, deleteTodos } from "../../api/todos";
import { addTodo } from "./todoSlice";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    const content = { text: todo.text, done: !todo.done }
    const id = todo.id
    putTodos(id, content).then((response) => {
      dispatch(toggleTodo(response.data.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodos(todo.id).then((response) => {
      dispatch(deleteTodo(response.data.id));
    })
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
