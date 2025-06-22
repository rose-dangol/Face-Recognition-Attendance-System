import React from "react";
import Login from "../src/Component/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Home from "./Component/Home/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
