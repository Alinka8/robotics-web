import React from "react";
import Logo from "./assets/logoTwo.jpeg";
import { useRef } from "react";
import "./navBar.style.css";

const NavBar = ({ home, program, signup, contact }) => {
  const scrollToSection = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" className="logo-image" />
        </div>
        <div className="nav-items">
          <li onClick={() => scrollToSection(home)}>
            <a href="#">Home</a>
          </li>
          <li onClick={() => scrollToSection(program)}>
            <a href="#">Program</a>
          </li>
          <li onClick={() => scrollToSection(signup)}>
            <a href="#">Sign up</a>
          </li>
          <li onClick={() => scrollToSection(contact)}>
            <a href="#">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
