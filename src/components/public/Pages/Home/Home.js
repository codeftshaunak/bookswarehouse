import React from "react";
import Footer from "../../shared/Footer/Footer";
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
          <h4>
            Read Our <span>Books</span>
          </h4>
          <p>
            "Books help us understand who we are and how we are to behave. They
            show us what community and friendship mean; they show us how to live
            and die"
          </p>
          <span>-ANNE LAMOTT</span>
        </div>
        <div className="right">
          <img
            src="https://img.freepik.com/free-vector/people-library-flat-vector-illustration_74855-6607.jpg?t=st=1652059121~exp=1652059721~hmac=55804f4c3aa92100979e0d75c21bdb33c41d0891a0c2ee25483d06362378647c&w=996"
            alt="bookshelf"
          />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
