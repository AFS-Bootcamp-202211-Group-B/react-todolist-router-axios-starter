import DoneItem from "./DoneItem";

const DoneGroup = (props) => {
  return props.todos.map((todo) => {
    return <DoneItem todo={todo} key={todo.id} />;
  });
};

export default DoneGroup;
