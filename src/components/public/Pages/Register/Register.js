import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../../Firebase/firebase.init";
import "./Register.css";

function Register() {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const googleProvider = () => {
    signInWithPopup(app, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        const errorMsg = error.message;
        alert(errorMsg);
      });
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pass.value;
    createUserWithEmailAndPassword(app, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        {/* <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="confpass" required />
        </div> */}
        <div className="button-container">
          <input type="submit" value="Register" />
        </div>
        <div className="bottomelement">
          Alredy Have An Account? <Link to="../login">LogIn</Link>
          <p>Or</p>
        </div>
        <div className="signin__with__facebook" onClick={googleProvider}>
          <FontAwesomeIcon icon={faGoogle} />
          <p>Sign In With Google</p>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="login-app">
        <div className="login-form">
          <div className="title">Register</div>
          {isSubmitted ? <div>User is successfully Register</div> : renderForm}
        </div>
      </div>
    </>
  );
}

export default Register;
