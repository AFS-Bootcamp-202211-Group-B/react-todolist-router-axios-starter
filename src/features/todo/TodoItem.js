import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, addTodo } from "./todoSlice";
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { putTodos, deleteTodos } from "../../api/todos";
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
    deleteTodos(todo.id).then((response)=>{
      dispatch(deleteTodo(todo.id));
    }, [dispatch]);
  };

  return (
    <div className="box" onClick={onToggle}>
      <span className={todo.done ? "done" : ""}>{todo.text}</span>
      <Button icon={<DeleteOutlined />}onClick={onDelete}/>
    </div>
  );
};

export default TodoItem;
