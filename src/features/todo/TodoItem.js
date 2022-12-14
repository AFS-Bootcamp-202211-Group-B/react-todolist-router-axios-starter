import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import TodoGroup from "./TodoGroup";
import { putTodo , deletedo } from "../../api/todos";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    var todoObj = { ...todo, done: !todo.done};
    putTodo(todo.id,todoObj)
    .then((response) => {
    dispatch(toggleTodo(todo.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deletedo(todo.id)
    .then((response)=>{
      dispatch(deleteTodo(todo.id));
    })
    
  };

  if (props.done)
  {
    return(
      <div className = "box">
        {todo.text}
      </div>
    );
  }

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
