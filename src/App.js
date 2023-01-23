import React from 'react'
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Home/Home';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />       
        </Routes>

    </div>
  )
}

export default App