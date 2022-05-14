import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="search-text">
          <div className="form">
            <h4>SIGN UP TO OUR NEWSLETTER</h4>
            <form id="search-form" className="form-search form-horizontal">
              <input
                type="text"
                className="input-search"
                placeholder="Email Address"
              />
              <button type="submit" className="btn-search">
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="container">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Gallery</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
