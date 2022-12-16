import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, putTestUpdate } from "./todoSlice";
import "./TodoItem.css";
import TodoGroup from "./TodoGroup";
import { putTodo, deletedo, putText, getTodos } from "../../api/todos";
import { useState, useEffect } from "react";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space, Input, Collapse } from 'antd';
import { useRef } from "react";
import { SearchOutlined } from '@ant-design/icons';

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const { confirm } = Modal;
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);


  useEffect(() => {
    setMessage(todo.text);
  }, []);

  const showConfirm = () => {
    confirm({
      title: 'Do you Want to update this item?',
      icon: <ExclamationCircleFilled />,
      // content: <Input defaultValue = {todo.text} onChange={handleChange}  id="message" value={message}/>,
      content: <input
        ref={inputRef}
        type="text"
        defaultValue={todo.text}
      />,
      onOk() {
        handleOk();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };



  const onToggle = () => {
    var todoObj = { ...todo, done: !todo.done };
    putTodo(todo.id, todoObj)
      .then((response) => {
        dispatch(toggleTodo(response.data.id));
      })
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deletedo(todo.id)
      .then((response) => {
        dispatch(deleteTodo(todo.id));
      });

  };

  const handleOk = () => {

    const changedTodo = { ...todo, text: inputRef.current.value ?? message };
    
    putText(todo.id, changedTodo)
      .then((response) => {
        console.log(response);
        dispatch(putTestUpdate(response.data));
      });
  };

  if (props.done) {
    return (
      <div className="box">
        {todo.text}
      </div>
    );
  }

  return (
    <div className="box"    >
      <span className={todo.done ? "done" : ""} onClick={onToggle} >{todo.text}</span>
      <Space wrap>
        <Button onClick={onDelete} type="primary" danger >Delete</Button>
        <Button onClick={showConfirm} type="dashed" icon={<SearchOutlined />}></Button>

      </Space>
    </div>

  );
};

export default TodoItem;
