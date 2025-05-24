import React from "react";
import "./about.style.css";
import Robot from "../assets/robots-bg.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <header>
          <h2>Kids Robotics Program</h2>
          <p className="tagline"> Learn • Build • Play</p>
        </header>
        <div className="program-info">
          <article className="program-details">
            <h3>Schedule:</h3>
            <ul>
              <li>June 10 - July 10 </li>
              <li>3 Days per Week</li>
              <li>Price: $200 per 1 Month (Includes all materials!)</li>
              <li>Ages: 7-14 </li>
              <li>Location: 1400 E Touhy Ave #160, Des Plaines, IL 60018 </li>
              <li>Limited spots available - sign up today!</li>
            </ul>
          </article>
          <div className="robot">
            <img src={Robot} alt="robot-image" className="robot-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
