import React, { useEffect, useState } from "react";
import Bookshop from "../Bookshop/Bookshop";
import "./Shop.css";

function Shop() {
  const [booksitem, setBooksItem] = useState([]);
  const booksItem = booksitem.slice(0, 7);
  useEffect(() => {
    fetch("https://peaceful-atoll-26773.herokuapp.com/bookshop")
      .then((res) => res.json())
      .then((data) => setBooksItem(data));
  }, []);

  return (
    <>
      <div className="books__shop">
        <h1>Smaple Products</h1>
        {/* <h4>
          Before you buy any book's let me tell you why you should read books.
        </h4>
        <p>
          "Books help us understand who we are and how we are to behave. They
          show us what community and friendship mean; they show us how to live
          and die"
          <br />
          <span>-ANNE LAMOTT</span>
        </p> */}
      </div>
      <div className="books__details">
        {booksItem.map((books) => (
          <Bookshop key={books._id} books={books}></Bookshop>
        ))}
      </div>
    </>
  );
}

export default Shop;
