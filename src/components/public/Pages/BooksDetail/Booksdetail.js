import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Booksdetail.css";

function Booksdetail() {
  const { booksid } = useParams();
  const [booksDetail, setBookDetails] = useState({});
  const quantityData = useRef("");

  useEffect(() => {
    const url = `https://peaceful-atoll-26773.herokuapp.com/booksdetail/${booksid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookDetails(data));
  }, [booksDetail]);

  const {
    _id,
    productName,
    authorName,
    description,
    imageURL,
    price,
    quantity,
    productcategory,
    supplierName,
  } = booksDetail;

  //Update or restock
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const quantityNum = parseInt(quantity);
    const currQuantity = quantityData.current.value;
    const currQuantityInt = parseInt(currQuantity);
    const result = quantityNum + currQuantityInt;

    console.log(quantityNum);
    console.log(currQuantity);
    const updateProduct = {
      result,
    };

    //Send data to server
    const url = `https://peaceful-atoll-26773.herokuapp.com/booksdetail/${booksid}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Restock Product Successfully 🦄", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        event.target.reset();
      });
  };

  //Handle delibery
  const handleDelivered = () => {
    const quantityData = parseInt(quantity);
    const result = quantityData - 1;
    const updateProduct = {
      result,
    };
    //Send data to server
    if (quantityData > 0) {
      const url = `https://peaceful-atoll-26773.herokuapp.com/booksdetail/${booksid}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          toast("1item Delivered Successfully 🦄", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
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
          <h4>Quantity:{quantity}</h4>
          <h4 className="book__category">{productcategory}</h4>
          <h5>Supplied By:{supplierName}</h5>
          <h6>Book Description:{description}</h6>
          <div className="book__btns">
            <form className="formnamebook" onSubmit={handleUpdateProduct}>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                ref={quantityData}
                required
              />
              <button
                type="submit"
                value="Update Product"
                className="book__addtocart"
              >
                Restock
              </button>
            </form>
          </div>
          <button className="book__addtocart" onClick={() => handleDelivered()}>
            Delivered
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Booksdetail;