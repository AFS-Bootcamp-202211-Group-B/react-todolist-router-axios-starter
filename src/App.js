import "./App.css";
import TodoList from "./features/todo/TodoList";
import {  Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
 import DoneList from "./features/done/DoneList";
import Layout from "./layout/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<TodoList />} />
          <Route path ="/about" element={<AboutPage />} />
          <Route path ="/done" element={<DoneList/>} />
          <Route path ="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
 
//navigation: Homepage AboutPage DonePage
//content:    TodoList

//todolist page -> TodoList
//about page -> text
// done list page -> DoneList (not editable)
// 404 page -> text
