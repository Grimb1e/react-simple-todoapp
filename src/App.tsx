import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoList } from "../components/todolist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
