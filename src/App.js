import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
