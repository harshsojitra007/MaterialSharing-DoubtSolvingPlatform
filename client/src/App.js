import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHeader from './Components/NavbarHeader';
import Signup from './Components/Signup';
import Login from './Components/Login';
import HomePage from "./Pages/HomePage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
