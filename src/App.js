import React from "react";
import "./index.css";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Footer from "./components/footer/footer";

import FoodDetail from "./pages/fooddetail/foodDetail";
import Menu from "./pages/menu/menu";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import ItemDetail from "./pages/Itemdetail/itemdetail";
import Contact from "./pages/contact/contact";

const App = () => {
 

  return (
    <>
    <ToastContainer/>
 
      <div className="app">
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/contact" element={<Contact/>}/>
        <Route path="/item/:id" element={<ItemDetail/>}/>
        </Routes>
      </div>
      <Footer /> 
    </>
  );
};

export default App;
