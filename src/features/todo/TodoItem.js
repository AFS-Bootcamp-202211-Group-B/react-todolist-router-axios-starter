import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";
import { updateTodoApi,deleteTodoApi } from "../../api/todos";
import "./TodoItem.css";
import  MessageBox  from './MessageBox';


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
    console.log(todo.id);
    deleteTodoApi(todo.id).then(response =>{
      dispatch(deleteTodo(todo.id));
    }).catch((event) => alert('failed to delete ' + event));
    
  };

  return (
    <div className="box">
      <span  onClick={onToggle} className={todo.done ? "done" : ""}>{todo.text}</span>
      <span className="times" onClick={onDelete}>
        &times;
      </span>
      <span>
      <MessageBox item={todo}/>
      </span>

    </div>
  );
};

export default TodoItem;
