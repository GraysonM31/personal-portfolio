import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/grayson-mongru/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="" />
            </a>
            <a href="#">
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