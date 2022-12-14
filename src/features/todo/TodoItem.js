import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { updateTodoApi,deleteTodoApi } from "../../api/todos";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    updateTodoApi(todo).then(response =>{
      dispatch(toggleTodo(response.data));
    });
    //dispatch(toggleTodo(todo.id));
  };

  const onDelete = (event) => {
    event.stopPropagation();
    //dispatch(deleteTodo(todo.id));

    deleteTodoApi(todo.id).then(response =>{
      dispatch(deleteTodo(response.data.id));
    });
    
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
