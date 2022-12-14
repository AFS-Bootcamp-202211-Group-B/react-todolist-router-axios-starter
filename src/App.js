import "./App.css";
import TodoList from "./features/todo/TodoList";
import {Route , Routes} from "react-router-dom";
import NotFoundPage  from "./features/pages/NotFoundPage";
import AboutPage from "./features/pages/AboutPage";
import DonePage from "./features/pages/DonePage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      {/*<TodoList />*/}
      <Routes>
        <Route path ="/" element={<Layout />} >
          <Route index element={<TodoList />} />
          <Route path="/about" element ={<AboutPage />} />
          <Route path="/*" element ={<NotFoundPage />} />
          <Route path="/done" element ={<DonePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//navigation: Homepage Aboutpage Donepage
//content: Todolist＞
// navugation : links
// tolist page -> todoList
// about page ->text
// done list page  ->DoneList (not editable)
// 404 page -> text