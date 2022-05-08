import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/public/Pages/Home/Home";
import Header from "./components/public/shared/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
