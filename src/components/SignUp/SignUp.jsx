import React from "react";
import Girl from "../assets/smiley-girl.jpg";
import { useRef } from "react";
import "./signUp.style.css";
import Button from "../Button/Button";

const SignUp = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <img src={Girl} alt="stem" className="form-img" />
      <form className="form">
        <div className="form-header">
          <h1>Join now</h1>
        </div>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-placeholder"
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Surname"
            className="form-placeholder"
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Phone number"
            className="form-placeholder"
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            name="name"
            placeholder="Email"
            className="form-placeholder"
          />
        </div>
        <Button
          label="Submit"
          
          mailto="mailto:zh8alina@gmail.com"
        />
        {/* <input type="submit" value="Submit" className="form-button" /> */}
      </form>
    </div>
  );
});

export default SignUp;
