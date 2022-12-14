import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../api/todos";
import { addTodo } from "./todoSlice";
import { Button, Input, Tooltip, Col } from 'antd'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const TodoGenerator = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const onTextChange = (event) => {
    setTodoText(event.target.value);
  }

  const onAdd = () => {
    const newTodoObj = { text: todoText, done: false };
    createTodo(newTodoObj)
      .then((response) => {
        dispatch(addTodo(response.data))
        setTodoText("")
      })
      .catch(() => alert('fail to create new todo item'))
  }

  return (
    <>
      <Input.Group compact>
        <Col span={10}>
          <Input
            placeholder="input your todo"
            type="text"
            name="todo"
            value={todoText}
            onChange={onTextChange}
          />
        </Col>
        <Button type='primary' onClick={onAdd}>add</Button>
      </Input.Group>
    </>
  );
};

export default TodoGenerator;
