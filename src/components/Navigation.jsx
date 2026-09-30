import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <NavLink
          to="/"
          className="navbar-brand"
        >
          E-Commerce
        </NavLink>

        <div className="navbar-nav">

          <NavLink
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="nav-link"
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className="nav-link"
          >
            Cart
          </NavLink>

          <NavLink
            to="/checkout"
            className="nav-link"
          >
            Checkout
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navigation;