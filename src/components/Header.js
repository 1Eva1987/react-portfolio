import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navBar">
      <div className="logo">
        <h1>Ieva</h1>
      </div>
      <div className="navLinks">
        <Link to="/home"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/contacts"> Contacts </Link>
      </div>
    </div>
  );
}
export default Header;
