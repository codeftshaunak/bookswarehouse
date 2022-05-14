import React from "react";
import { toast, ToastContainer } from "react-toastify";

function ManageProducts(books) {
  const { _id, productName, quantity } = books.books;
  const showProd = (id) => {
    const procede = window.confirm("Really Wanna Delete This Product");
    if (procede) {
      const url = `https://peaceful-atoll-26773.herokuapp.com/booksdetail/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Delete Product Successfully 🦄", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
  };

  return (
    <>
      <div className="table">
        <h4>Product Id:-{_id}</h4>
        <h4>{productName}</h4>
        <h4>Availabile Qantity:-{quantity}</h4>
        <button className="book__addtocart" onClick={() => showProd(_id)}>
          Delete
        </button>
        <ToastContainer />
      </div>
    </>
  );
}

export default ManageProducts;
