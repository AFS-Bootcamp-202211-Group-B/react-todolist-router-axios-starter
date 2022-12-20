import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodosText } from "./todoSlice";
import { putTodos, deleteTodos } from "../../api/todos";
import "./TodoItem.css";
import { Button, Modal,Input } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons'
import { useState } from "react";


const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const onToggle = () => {
    const newTodo = {...todo, done: !todo.done}
    putTodos(newTodo).then((response) => {
      dispatch(toggleTodo(response.data));
    })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodos(todo.id).then((response) => {
      dispatch(deleteTodo(response.data));
    })
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newText, setNewText] = useState("");


  const handleOk = () => {
    const newTodo = {...todo, text: newText}
    putTodos(newTodo).then((response) => {
      dispatch(updateTodosText(response.data));
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setNewText("");
    setIsModalOpen(false);
  };

  const onTextChange = (event) => {
    setNewText(event.target.value);
  };

  const onEdit = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="box">
   
        <span onClick={onToggle} className={todo.done ? "done" : ""}>
          {todo.text}
        </span>

        <Button onClick={onDelete} type="danger" style={{color:'red'}} icon={<CloseOutlined />} size="small"></Button>
        
        <Button icon={<EditOutlined />} onClick={onEdit} title="Edit" />

        <Modal title="Update Todo Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Input
            placeholder={todo.text}
            value={newText}
            onChange={onTextChange}
          />
        </Modal>
    </div>
  );
};

export default TodoItem;
