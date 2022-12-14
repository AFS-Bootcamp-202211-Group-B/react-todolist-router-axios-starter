import TodoItem from "./TodoItem";
import {List,Typography} from "antd";
const TodoGroup = (props) => {
  return props.todos.map((todo) => {
    return(
    
    <TodoItem todo={todo} key={todo.id} />
    
    ) 
  });
};

export default TodoGroup;
