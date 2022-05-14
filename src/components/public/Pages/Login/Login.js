// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import "./Login.css";
// import app from "../../../Firebase/firebase.init";

// function Login() {
//   let navigate = useNavigate();
//   const provider = new GoogleAuthProvider();

//   const googleProvider = () => {
//     signInWithPopup(app, provider)
//       .then((result) => {
//         navigate("/");
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         alert(errorMsg);
//       });
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();
//     const email = event.target.email.value;
//     const pass = event.target.pass.value;

//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, pass)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         navigate("/");
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   };

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Email </label>
//           <input type="email" name="email" required />
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//         </div>
//         <div className="button-container">
//           <input type="submit" value="LogIn" />
//         </div>
//         <div className="bottomelement">
//           <Link to="../register">Create An Account</Link>
//           <p>Or</p>
//         </div>
//         <div className="signin__with__facebook" onClick={googleProvider}>
//           <FontAwesomeIcon icon={faGoogle} />
//           <p>Sign In With Google</p>
//         </div>
//         <br />
//       </form>
//     </div>
//   );

//   return (
//     <>
//       <div className="login-app">
//         <h2>Hey! Just Do It</h2>
//         <div className="login-form">
//           <div className="form">
//             <form onSubmit={handleSubmit}>
//               <div className="input-container">
//                 <label>Email </label>
//                 <input type="email" name="email" required />
//               </div>
//               <div className="input-container">
//                 <label>Password </label>
//                 <input type="password" name="pass" required />
//               </div>
//               <div className="button-container">
//                 <input type="submit" value="LogIn" />
//               </div>
//               <div className="bottomelement">
//                 <Link to="../register">Create An Account</Link>
//                 <p>Or</p>
//               </div>
//               <div className="signin__with__facebook" onClick={googleProvider}>
//                 <FontAwesomeIcon icon={faGoogle} />
//                 <p>Sign In With Google</p>
//               </div>
//               <br />
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;