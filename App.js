
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import './App.css';
import Weather from "./weatherinfo";
import Login from "./Login";
import Signup from "./Signup";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/weather' element={<Weather/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}
