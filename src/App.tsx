import "./App.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Timetable from "./timetable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timetable" element={<Timetable/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
