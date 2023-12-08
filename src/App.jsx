import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";
import Photo from "./pages/Photo";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>}  />
        <Route path="/form" element={<Form/>} />
        <Route path="/photo" element={<Photo/>} />
      </Routes>
    </div>
  );
}

export default App;
