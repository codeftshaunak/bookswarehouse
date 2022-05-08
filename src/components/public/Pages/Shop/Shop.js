import React, { useEffect, useState } from "react";
import Bookshop from "../Bookshop/Bookshop";
import "./Shop.css";

function Shop() {
  const [booksItem, setBooksItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookshop")
      .then((res) => res.json())
      .then((data) => setBooksItem(data));
  }, []);

  return (
    <>
      <div className="books__shop">
        <h1>Welcome to the book shop</h1>
        <h4>
          Before you buy any book's let me tell you why you should read books.
        </h4>
        <p>
          "Books help us understand who we are and how we are to behave. They
          show us what community and friendship mean; they show us how to live
          and die"
          <br />
          <span>-ANNE LAMOTT</span>
        </p>
      </div>
      <div className="books__details">
        {/* {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something wants wrong...</h1>
        ) : (
          booksItem.map((books) => (
            <Bookshop key={books.id} book={books}></Bookshop>
          ))
        )} */}

        {booksItem.map((books) => (
          <Bookshop key={books._id} book={books}></Bookshop>
        ))}
      </div>
    </>
  );
}

export default Shop;
