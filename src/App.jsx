import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Todos from "./routes/Todos";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Todos />} />
            {/* <Route path='/login' element={<Login />} /> */}
            {/* <Route path='/register' element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
