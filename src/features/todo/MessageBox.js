import React from 'react';
import { useState } from 'react';
import { Modal, Input } from 'antd';
import { EditOutlined  } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { updateTodoTextApi } from "../../api/todos";
import { updateTodo } from "./todoSlice";


export default function MessageBox({item}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [textarea, setTextarea] = useState("");
    const dispatch = useDispatch();

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
        const newTodoObj = { id: item.id, text: textarea };
        updateTodoTextApi(newTodoObj).then((response) => {
            dispatch(updateTodo(response.data));
        });
        setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const handleChange= (e) => {
        setTextarea(e.target.value);
    }

    return (
      <>
        <EditOutlined onClick={showModal}>
        </EditOutlined>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <textarea value={textarea} onChange={handleChange} />

        </Modal>
      </>
    );
}
