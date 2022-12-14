import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "./todoSlice";
import { deleteTodo as deleteTodoAPI, toggleTodo as toggleTodoAPI, updateTodoText } from "../../api/todos"
import "./TodoItem.css";
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from "react";
import UpdateModal from './UpdateModal'

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)

  const onToggle = () => {
    toggleTodoAPI(todo).then(() => {
      dispatch(toggleTodo(todo.id))
    })
      .catch(() => alert('failed to toggle'))
  };

  const onDelete = (event) => {
    event.stopPropagation();
    deleteTodoAPI(todo.id)
      .then(() => {
        dispatch(deleteTodo(todo.id))
      })
      .catch(() => alert('failed to delete'))
  };

  const onOpenUpdateModal = (event) => {
    event.stopPropagation()
    setIsOpenUpdateModal(true)
  }

  const handleCancel = (event) => {
    setIsOpenUpdateModal(false);
  };
  const onUpdate = (newTodoText) => {
    const newTodoObj = { id: todo.id, text: newTodoText };
    updateTodoText(newTodoObj)
      .then((response) => {
        dispatch(updateTodo(newTodoObj))
        setIsOpenUpdateModal(false)
      })
      .catch(() => { setIsOpenUpdateModal(false); alert('fail to update todo item') })
  }
  return (
    <>
      <div className="box" onClick={onToggle}>
        <span className={todo.done ? "done" : ""}>{todo.text}</span>
        <span className="times" style={{ float: 'right', marginRight: '10px' }} onClick={onDelete}>
          <CloseOutlined />
        </span>
        <span className="" style={{ float: 'right' }} onClick={onOpenUpdateModal}>
          <EditOutlined />
        </span>

      </div>
      <UpdateModal
        isModalOpen={isOpenUpdateModal}
        placeholder={todo.text}
        handleUpdate={onUpdate}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default TodoItem;
