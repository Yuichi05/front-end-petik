import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopRate from "./pages/TopRate.js";
import Dashboard from "./pages/Dashboard.js";
import Login from "./component/auth/Login.js";
import Register from "./component/auth/Register.js";
import Detail from "./component/Detail.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/top" element={<TopRate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
