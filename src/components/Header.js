import React from "react";
import "../components/Header.css";

function Header() {
  return (
    <div className="navBar">
      <div className="logo">
        <h1>Ieva</h1>
      </div>
      <div className="navLinks">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">My Work</a>
        <a href="#">Skills</a>
        <a href="#">Contact me</a>
      </div>
    </div>
  );
}
export default Header;
