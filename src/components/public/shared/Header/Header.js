import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/manageitems">Manage Items</Link>
          <Link to="/additems">Add Items</Link>
          <Link to="/myitems">My Items</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="logo">
          <h2>Shaunak's</h2>
        </div>
      </nav>
    </>
  );
}

export default Header;
