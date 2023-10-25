import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Navbar />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
