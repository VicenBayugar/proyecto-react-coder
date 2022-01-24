import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <h1>MegaStore</h1>
      </NavLink>
      <ul className="navLinks">
        <li>
          <NavLink
            to="/category/electronics"
            className="navLink"
            activeClassName="currentCategory"
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/jewelery"
            className="navLink"
            activeClassName="currentCategory"
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/men's clothing"
            className="navLink"
            activeClassName="currentCategory"
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/women's clothing"
            className="navLink"
            activeClassName="currentCategory"
          >
            Women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="navLink"
            activeClassName="currentCategory"
          >
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
