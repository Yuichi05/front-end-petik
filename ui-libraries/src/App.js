import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses.js";
import Dashboard from "./pages/Dashboard.js";
import Login from "./component/auth/Login.js";
import Register from "./component/auth/Register.js";
import Detail from "./pages/Detail.js";
import TableCourse from "./course/TableCourse.js";
import CourseDetail from "./pages/DetailCoursePage.js";
import AddCourse from "./course/AddCourse.js";
import NotFund from "./component/NotFund.js";
import AddTrainer from "./traniner/AddTrainer.js";
import TableTrainer from "./traniner/TableTrainer.js";
import EditCourse from "./course/EditCourse.js";
import EditTrainer from "./traniner/EditTrainer.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/table-course" element={<TableCourse />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/course/edit/:id" element={<EditCourse />} />
          <Route path="/*" element={<NotFund />} />
          <Route path="/table-trainer" element={<TableTrainer />} />
          <Route path="/add-trainer" element={<AddTrainer />} />
          <Route path="/trainer/edit/:id" element={<EditTrainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
