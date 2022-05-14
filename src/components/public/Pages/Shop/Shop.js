// import React, { useEffect, useState } from "react";
// import setBookItem from "../../../hooks/setBookItem";
// import Bookshop from "../Bookshop/Bookshop";
// import ManageProduct from "../ManageProduct/ManageProduct";
// import "./Shop.css";

// function Shop() {
//   const [booksitem] = setBookItem();
//   const booksItem = booksitem.slice(0, 6);

//   return (
//     <>
//       <div className="books__shop">
//         <h1>Smaple Products</h1>
//       </div>
//       <div className="books__details">
//         {booksItem.map((books) => (
//           <Bookshop key={books._id} books={books}></Bookshop>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Shop;