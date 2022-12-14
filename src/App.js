import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./features/todo/TodoList";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DoneList from "./pages/DoneListPage";
import Layout from "./Layout/Layout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<TodoList/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/done" element={<DoneList/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
