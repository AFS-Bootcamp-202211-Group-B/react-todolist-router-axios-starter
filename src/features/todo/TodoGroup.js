import TodoItem from "./TodoItem";
import { Avatar, List } from "antd";

const TodoGroup = (props) => {
    // return props.todos.map((todo) => {
    //   return <TodoItem todo={todo} key={todo.id} />;
    // });
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.todos}
            renderItem={(todo) => (
                <List.Item>
                    <TodoItem todo={todo} key={todo.id} />
                </List.Item>
            )}
        />
    );
};

export default TodoGroup;
