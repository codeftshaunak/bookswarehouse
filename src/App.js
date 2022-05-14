import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./components/public/Pages/AddItems/AddItems";
import Blog from "./components/public/Pages/Blog/Blog";
import Booksdetail from "./components/public/Pages/BooksDetail/Booksdetail";
import Home from "./components/public/Pages/Home/Home";
import Login from "./components/public/Pages/Login/Login";
import ManageProduct from "./components/public/Pages/ManageProduct/ManageProduct";
import MyItems from "./components/public/Pages/MyItems/MyItems";
import Notfound from "./components/public/Pages/NotFound/Notfound";
import Register from "./components/public/Pages/Register/Register";
import Header from "./components/public/shared/Header/Header";
import RequireAuth from "./components/public/shared/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/booksdetail/:booksid"
          element={
            <RequireAuth>
              <Booksdetail />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageProduct />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
