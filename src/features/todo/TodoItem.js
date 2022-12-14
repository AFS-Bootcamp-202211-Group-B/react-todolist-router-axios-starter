import { useDispatch } from "react-redux";
import todoSlice, { toggleTodo, deleteTodo, editTodo } from "./todoSlice";
import { DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { Button,Modal,Input } from 'antd';
import { putTodos, deleteTodos, putTodoText } from "../../api/todos";
import { useState } from "react";
import "./TodoItem.css";

const TodoItem = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoText, setTodoText] = useState("");
  const { todo } = props;
  const newTodo = {id: todo.id, text: todoText};
  const handleOk = () => {
    putTodoText(newTodo).then((response) => {
      dispatch(editTodo(newTodo));
    }, [dispatch]);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  
  const dispatch = useDispatch();

  const onToggle = () => {
    // dispatch(toggleTodo(todo.id));
    putTodos(todo).then((response)=>{
      dispatch(toggleTodo(todo.id));
    }, [dispatch]);
    
  };

  const onDelete = (event) => {
    event.stopPropagation();
    // dispatch(deleteTodo(todo.id));
    deleteTodos(todo.id).then((response)=>{
      dispatch(deleteTodo(todo.id));
    }, [dispatch]);
  };

  const onEdit = () => {
    setIsModalOpen(true);
    
  }

  return (
    <div className="box">
      <span className={todo.done ? "done" : ""} onClick={onToggle} >{todo.text}</span>
      <Button icon={<DeleteOutlined />}onClick={onDelete}/>
      <Button icon={<EditOutlined />}onClick={onEdit}/>
      <Modal title="Update Todo item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input
          placeholder="update your todo"
          value={todoText}
          onChange={onTextChange}
          size="middle"
          style={{ width: 400 }}
        />
      </Modal>
    </div>
  );
};

export default TodoItem;
