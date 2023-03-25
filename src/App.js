import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import MyHeader from "./components/MyHeader";
import Signup from "./page/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
