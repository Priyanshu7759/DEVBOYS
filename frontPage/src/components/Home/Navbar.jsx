import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Learnify</div>
        <ul className="nav-links">
          <li>
            <NavLink to="#">Home</NavLink>
          </li>
          <li>
            <NavLink to="./find tutor.html">Find a Tutor</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
          <li>
            <NavLink to="#">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp" className="login">
              Login/Signin
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
