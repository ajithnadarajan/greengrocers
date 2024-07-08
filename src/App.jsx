import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./Home";
import Login from "./components/Login";
import About from "./components/About";
import Carts from "./assets/Carts";
import Fruits from "./assets/Fruits";
import Nuts from "./assets/Nuts";
import Navigationbar from "./pages/Navigationbar";
import Contact from "./components/Contact";
import WebFooter from "./pages/WebFooter";


export default function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/vegetables" element={<Carts/>} />
        <Route path="/fruits" element={<Fruits/>} />
        <Route path="/nuts" element={<Nuts/>} />
      </Routes>
    </BrowserRouter>
  );
}
