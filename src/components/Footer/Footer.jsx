import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h3> 🧠 About Us</h3>
        <p>
          We are a passionate team of educators and engineers committed to
          inspiring kids through STEM education. Our mission is to nurture
          curiosity and creativity by teaching robotics, coding, and critical
          thinking in a fun and interactive way.
        </p>
      </div>
      <div className="footer-info">
        <h3>🔧 Services </h3>
        <ul>
          {" "}
          <li>Summer Robotics Camp (Ages 7–14) </li>
          <li>Beginner Coding Workshops </li>{" "}
          <li>Hands-on Robot Building Sessions </li>{" "}
          <li>STEM Challenges & Team Projects </li>
          <li>nd-of-Camp Robotics Showcase for Parents.</li>
        </ul>
      </div>
      <div className="footer-info">
        <h3>📞 Contact Us</h3>
        <p>Location: 1400 E Touhy Ave #160, Des Plaines, IL </p>
        <p>Email: info@kidsrobotics.com </p>
        <p>Phone: (123) 456-7890 </p>
        <p> Hours: Mon–Fri, 9 AM – 5 PM </p>
      </div>
    </div>
  );
};

export default Footer;
