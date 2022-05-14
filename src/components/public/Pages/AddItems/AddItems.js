import React, { useState } from "react";
import app from "../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AddItems.css";

function AddItems() {
  const [user] = useAuthState(app);
  const handleAddProduct = (event) => {
    event.preventDefault();
    const productName = event.target.productname.value;
    const supplierName = event.target.suppliername.value;
    const authorName = event.target.authorname.value;
    const productcategory = event.target.productcategory.value;
    const imageURL = event.target.imageurl.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const description = event.target.productdescription.value;
    const xxx = event.target.xxx.value;
    const email = user.email;

    const product = {
      productName,
      authorName,
      supplierName,
      productcategory,
      imageURL,
      price,
      quantity,
      description,
      email,
      xxx,
    };

    //Send data to server
    fetch("https://peaceful-atoll-26773.herokuapp.com/additems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        alert("Product Add Successfully");
        event.target.reset();
      });
  };

  //get data from ui

  return (
    <>
      <form className="formname" onSubmit={handleAddProduct}>
        <h3>Add The Product</h3>

        <input
          type="text"
          name="productname"
          placeholder="Product Title"
          required
        />
        <input
          type="text"
          name="authorname"
          placeholder="Author Name"
          required
        />
        <input
          type="text"
          name="suppliername"
          placeholder="Supplier Name"
          required
        />
        <input type="text" name="xxx" placeholder="Supplier Name" required />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          disabled
        />
        <input
          type="text"
          name="productcategory"
          placeholder="Products Category"
          required
        />
        <textarea
          name="productdescription"
          cols="10"
          rows="3"
          required
          placeholder="Write the description"
        ></textarea>
        <input type="text" name="imageurl" placeholder="Image URL" required />
        <input type="number" name="price" placeholder="Price" required />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="submit" value="Add Product" />
      </form>
    </>
  );
}

export default AddItems;
