import { useDispatch, useSelector } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "./todoSlice";
import { DeleteOutlined,EditOutlined} from '@ant-design/icons';
import { Button,Modal,Input,message, Popconfirm} from 'antd';
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
    message.success('Updated!');
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onTextChange = (event) => {
    setTodoText(event.target.value);
  };

  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList);
  const onToggle = () => {
    // dispatch(toggleTodo(todo.id));
    putTodos(todo).then((response)=>{
      dispatch(toggleTodo(todo.id));
    }, [dispatch]);
    
    message.success('Updated the todo status!');
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
  const confirm = (e) => {
    message.success('Deleted!');
    onDelete(e);
  };
  const cancel = (e) => {
    message.error('Be careful to click delete button!');
  };

  return (
    <div className="box">
      <span className={todo.done ? "done" : ""} onClick={onToggle} style={{cursor: "pointer"}}>{todo.text}</span>
      <span className="trigger-button">
        <Button icon={<EditOutlined />}onClick={onEdit} title="Edit" style={{marginRight:"10px"}}/>
        <Popconfirm
          title="Are you sure to delete this todo item?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
          >   
          <Button danger title="Delete" icon={<DeleteOutlined />}/>
        </Popconfirm>
        
        
      </span>
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
