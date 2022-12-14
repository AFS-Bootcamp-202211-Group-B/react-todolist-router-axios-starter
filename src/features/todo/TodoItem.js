import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodosText } from "./todoSlice";
import { putTodos, deleteTodos } from "../../api/todos";
import "./TodoItem.css";
import { Button, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons'



const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    const content = {...todo, done: !todo.done }
    putTodos(todo.id, content).then((response) => {
      // dispatch(toggleTodo(response.data.id));
      dispatch(toggleTodo(response.data.id));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodos(todo.id).then((response) => {
      dispatch(deleteTodo(response.data.id));
    })
  };

  const onEdit = (event) => {
    const content = {...todo, text: event}
    putTodos(todo.id, content).then((response) => {
      dispatch(updateTodosText(response.data));
    })
  };

  const { Paragraph } = Typography;
  return (
    <div className="box">
      <Paragraph
        editable={{
          onChange: onEdit,
          text: todo.text
        }}
      >
        <span onClick={onToggle} className={todo.done ? "done" : ""}>
          {todo.text}
        </span>

        <Button onClick={onDelete} type="danger" style={{color:'red'}} icon={<CloseOutlined />} size="small"></Button>
        
      </Paragraph>
    </div>
  );
};

export default TodoItem;
