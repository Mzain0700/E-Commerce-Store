import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light bg-dark py-3 shadow-sm">
      <div className="container">


        <NavLink className="navbar-brand" to="/">
          <h1 >Ecommerce Store</h1>
        </NavLink>



        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01"  >
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            {/* <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/components/html/contactus.html">

                   <a href="contactus.html">Contact</a>
                  Contact
                </NavLink>  */}
          </div>
        </div>
        <div className="nav-link buttons text-align-right" id="buttonleft"  >
          <NavLink to="/Login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i> Login
          </NavLink>
          <NavLink to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i> Register
          </NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i>
            Cart (
            {state.length})
          </NavLink>
        </div>

      </div>


    </nav >
  );
}
