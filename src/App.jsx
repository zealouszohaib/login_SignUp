import "./App.css";
import Login from "./Login";
import Register from "./Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const accessToken = localStorage?.getItem("token");
function App() {
  return (
    <Router>
      <Routes>
        {!accessToken && <Route path="/login" element={<Login />} />}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
