import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <h1>AppleStore</h1>
      </a>
      <ul className="navLinks">
        <a href="/" className="navLink">
          <li>Inicio</li>
        </a>
        <a href="/" className="navLink">
          <li>Celulares</li>
        </a>
        <a href="/" className="navLink">
          <li>
            <CartWidget />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
