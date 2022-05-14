// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Bookshop.css";

// function Bookshop(books) {
//   const { booksid } = useParams();
//   const {
//     _id,
//     productName,
//     authorName,
//     imageURL,
//     price,
//     productcategory,
//     quantity,
//     supplierName,
//   } = books.books;
//   const navigate = useNavigate();
//   const showBooks = (id) => {
//     navigate(`booksdetail/${id}`);
//   };

//   return (
//     <>
//       <div className="books__detail">
//         <div className="image">
//           <img src={imageURL} alt={productName} />
//         </div>
//         <div className="content">
//           <h2 className="book__title">{productName}</h2>
//           <h4 className="book__author">By: {authorName}</h4>
//           <h5 className="book__seller">#Best Seller</h5>
//           <h4>Price:{price}tk</h4>
//           <h4>Quantity:{quantity}</h4>
//           <h4 className="book__category">{productcategory}</h4>
//           <h5>Supplied By:{supplierName}</h5>
//           <div className="book__btns">
//             <button className="book__details" onClick={() => showBooks(_id)}>
//               Update Product
//             </button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }

// export default Bookshop;
