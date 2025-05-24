import React from "react";
import { Link } from "react-router-dom";
import "./button.style.css";

const Button = ({ mailto, label }) => {
  return (
    <button
      className="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      {label}
    </button>
  );
};

export default Button;
