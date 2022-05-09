import React from "react";
import Shop from "../Shop/Shop";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="section__1">
        <h2>Become A Partner & Earn</h2>
        <h3>Tk 30,000/Per Month</h3>
        <img
          src="https://img.freepik.com/free-vector/people-doodle-vector-happy-workers-green-office-characters_53876-143503.jpg?t=st=1651986238~exp=1651986838~hmac=2ef7aed705dc1170681743069911031973031b06cef0b81135bc482b04b3df7a&w=740"
          alt="becomepartner"
        />
        <br />
        <button>Join us</button>
      </div>

      <div className="section__3">{<Shop></Shop>}</div>

      <div className="section__2">
        <div className="left">
          <h4>Read Our Books</h4>
          <p>
            "Books help us understand who we are and how we are to behave. They
            show us what community and friendship mean; they show us how to live
            and die"
          </p>
          <span>-ANNE LAMOTT</span>
        </div>
        <div className="right">
          <img
            src="https://pixabay.com/get/ge4363770b58899bd3f5e36f98378f48e85b7fa5efeb9c6e2f5ea94e9d56bbdde487d4fcece9e2851dd15ee6122a7816b3c482a24540734e514a0c3299ba52c35ec9eccb934d54ce88a47aba7560fd017_1280.jpg"
            alt="bookshelf"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
