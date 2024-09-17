import React, { useState } from 'react'
import { Modal, Input } from 'antd';
export default function UpdateModal(props) {
    const [todoText, setTodoText] = useState("");

    const onTextChange = (event) => {
        setTodoText(event.target.value);
    }
    return (
        <Modal
            title="Update Modal"
            open={props.isModalOpen}
            onOk={()=>props.handleUpdate(todoText)}
            onCancel={()=>props.handleCancel()}
        >
            <Input
                placeholder={props.placeholder}
                type="text"
                name="todo"
                value={todoText}
                onChange={onTextChange}
            />
        </Modal>
    )
}
