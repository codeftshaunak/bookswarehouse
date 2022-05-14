// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import app from "../../../Firebase/firebase.init";
// import "./MyItem.css";
// const axios = require("axios");
// function MyItems() {
//   const [users] = useAuthState(app);
//   const [item, setItem] = useState([]);
//   useEffect(() => {
//     if (users) {
//       const manageItem = async () => {
//         const email = users.email;
//         const url = `https://peaceful-atoll-26773.herokuapp.com/myitems?email=${email}`;
//         const { data } = await axios.get(url);
//         setItem(data);
//       };
//       console.log(users);
//       manageItem();
//     } else {
//     }
//   }, [users]);

//   return (
//     <div>
//       {item.map((item) => (
//         <div className="books__detail">
//           <div className="image">
//             <img src={item.imageURL} alt={item.productName} />
//           </div>
//           <div className="content">
//             <h2 className="book__title">{item.productName}</h2>
//             <h4 className="book__author">By: {item.authorName}</h4>
//             <h5 className="book__seller">#Best Seller</h5>
//             <h4>Price:{item.price}tk</h4>
//             <h4>Quantity:{item.quantity}</h4>
//             <h4 className="book__category">{item.productcategory}</h4>
//             <h5>Supplied By:{item.supplierName}</h5>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyItems;