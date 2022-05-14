// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import "./Header.css";
// import app from "../../../Firebase/firebase.init";

// function Header() {
//   const [users, setUser] = useState({});
//   const [navClassActive, setNavClassActive] = useState(false);

//   useEffect(() => {
//     onAuthStateChanged(app, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({});
//       }
//     });
//   }, [users]);

//   const logOut = () => {
//     signOut(app)
//       .then(() => {
//         // Sign-out successful.
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   };

//   const navActive = () => {
//     setNavClassActive(!navClassActive);
//   };

//   return (
//     <>
//       <nav>
//         <div className="navbar">
//           <div className="logo">
//             <h2> Shaunak 's</h2>
//           </div>
//           <div
//             className={navClassActive ? "nav__items nav-active" : "nav__items"}
//           >
//             <Link to="/"> Home </Link>
//             {users.uid && <Link to="/manageitems"> Manage Items </Link>}
//             {users.uid && <Link to="/myitems"> My Items </Link>}
//             {users.uid && <Link to="/additems">Add Items </Link>}
//             <Link to="/blog"> Blog </Link>
//             <Link to="/contact"> Contact </Link>
//             <div className="logreg__mobile">
//               <div className="login"></div>
//               {users.uid ? (
//                 <button onClick={logOut}>LogOut</button>
//               ) : (
//                 <button>
//                   <Link to="/login"> LogIn </Link>
//                 </button>
//               )}
//             </div>
//           </div>
//           <div className="humbarger" onClick={navActive}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//         </div>
//         <div className="logreg">
//           <div className="login"></div>
//           {users.uid ? (
//             <button onClick={logOut}>LogOut</button>
//           ) : (
//             <button>
//               <Link to="/login"> LogIn </Link>
//             </button>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Header;
