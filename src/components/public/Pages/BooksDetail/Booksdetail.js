import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Booksdetail.css";

function Booksdetail() {
  const { booksid } = useParams();
  const [booksDetail, setBookDetails] = useState({});
  let numberofQ = parseInt(booksDetail.quantity);
  const [quantitys, setQuantitys] = useState(numberofQ);

  useEffect(() => {
    setQuantitys(numberofQ);
  });

  useEffect(() => {
    const url = `https://peaceful-atoll-26773.herokuapp.com/booksdetail/${booksid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookDetails(data));
  }, []);

  const {
    _id,
    productName,
    authorName,
    description,
    imageURL,
    price,
    productcategory,
    supplierName,
  } = booksDetail;

  const getNewQu = (event) => {
    event.preventDefault();
    const quantityNum = event.target.quantitydata.value;
    const quantityNumIncrease = parseInt(quantityNum);
    setBookDetails(quantitys + quantityNumIncrease);
    console.log(quantitys + quantityNumIncrease);
  };

  return (
    <div className="booksdetais">
      <div className="books__detail">
        <h2>Books Details</h2>
        <div className="image">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="content">
          <h2 className="book__title">{productName}</h2>
          <h4 className="book__author">By: {authorName}</h4>
          <h5 className="book__seller">#Best Seller</h5>
          <h4>Price:{price}tk</h4>
          <h4>Quantity:{quantitys}</h4>
          <h4 className="book__category">{productcategory}</h4>
          <h5>Supplied By:{supplierName}</h5>
          <h6>Book Description:{description}</h6>
          <div className="book__btns">
            <form onSubmit={getNewQu}>
              <input type="number" name="quantitydata" required />
              <button className="book__details">Update</button>
            </form>
            <button className="book__addtocart">Delivered</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booksdetail;
