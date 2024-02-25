import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import Sliader from './Pages/Sliader';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/' element={<Sliader/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App