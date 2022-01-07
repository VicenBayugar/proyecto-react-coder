import React from "react";
import "./NavBar.css";
import Carrito from "../../assets/carrito-de-compras.png";

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
            <img src={Carrito} alt="" width={"25px"} />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
