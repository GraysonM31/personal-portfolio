import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from "react-router-dom"; // Import the Link component
import { BrowserRouter } from "react-router-dom"; // Make sure to import BrowserRouter


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/workreport">Work Report</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/grayson-mongru/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/GraysonM31">
              <img src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/graysonmongru/">
              <img src={navIcon3} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Grayson Mongru. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
