import React from "react";
import "./home.style.css";
import Kids from "../assets/children.jpg";
import { useRef } from "react";

const Home = ({ program }) => {
  const scrollToSection = (elementRef) => {
    if (elementRef?.current) {
      window.scroll({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="user-box">
        <img src={Kids} alt="image" className="image" />
        <div className="overlay"></div>
        <div className="container">
          <h2>KIDS SUMMER ROBOTICS</h2>
          <p>LEARN BUILD PLAY</p>
          <button onClick={() => scrollToSection(program)} className="button">Join Now </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
