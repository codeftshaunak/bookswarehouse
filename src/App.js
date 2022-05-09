import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./components/public/Pages/AddItems/AddItems";
import Home from "./components/public/Pages/Home/Home";
import Shop from "./components/public/Pages/Shop/Shop";
import Header from "./components/public/shared/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/additems" element={<AddItems />}></Route>
      </Routes>
    </>
  );
}

export default App;
