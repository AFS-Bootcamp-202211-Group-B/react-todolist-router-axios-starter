import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateTodo, deleteTodo } from "./todoSlice";
import "./TodoItem.css";
import { updateTodoApi, deleteTodoApi } from "../../api/todos";
import { Checkbox, Modal, Input } from "antd";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const TodoItem = (props) => {
    const { todo } = props;
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [text, setText] = useState("");

    const onToggle = () => {
        const toUpdate = {
            ...todo,
            done: !todo.done,
        };
        updateTodoApi(toUpdate).then((response) => {
            dispatch(updateTodo(response.data));
        });
    };

    const onDelete = (event) => {
        event.stopPropagation();
        deleteTodoApi(todo.id).then((response) => {
            dispatch(deleteTodo(response.data.id));
        });
        setIsModalOpen(false);
    };
    const updateText = () => {
        const toUpdate = {
            ...todo,
            text: text,
        };
        updateTodoApi(toUpdate).then((response) => {
            dispatch(updateTodo(response.data));
        });
        setIsModalOpen(false);
    };

    return (
        <div className="box">
            <Checkbox onChange={onToggle} checked={todo.done}>
                <span className={todo.done ? "done" : ""}>{todo.text}</span>
            </Checkbox>
            <CloseOutlined className="times" onClick={onDelete} />
            &nbsp;
            <EditOutlined onClick={() => setIsModalOpen(true)} />
            <Modal
                title="Please enter text to update"
                open={isModalOpen}
                onOk={updateText}
                onCancel={() => setIsModalOpen(false)}
            >
                <TextArea
                    style={{ height: 120, resize: "none" }}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </Modal>
        </div>
    );
};

export default TodoItem;
