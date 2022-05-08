import React from "react";
import "./Bookshop.css";

function Bookshop(books) {
  const { _id, title, image, author, prices, category } = books.book;

  return (
    <>
      <div className="books__detail">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <h2 className="book__title">{title}</h2>
          <h4 className="book__author">By: {author}</h4>
          <h5 className="book__seller">#Best Seller</h5>
          <h4>{prices}tk</h4>
          <h4 className="book__category">{category}</h4>
          <div className="book__btns">
            <button className="book__addtocart">Add To Cart</button>
            <button className="book__details">Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookshop;
