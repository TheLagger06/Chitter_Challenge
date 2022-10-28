import React from "react";
import './App.css';
import { BrowserRouter as Router, useNavigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from "./components/Register";
import AddComment from "./components/AddComment";
import Home from "./components/Home";
import Test from "./components/test";



function App() {

  
  
  return (
    <>
      <Router>
      
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/comment" element={<AddComment />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;


