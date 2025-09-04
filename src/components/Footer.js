import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { motion } from 'framer-motion';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // If on homepage, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to homepage then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const navigateToWorkReports = () => {
    navigate('/workreport');
  };

  const navigateToHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <footer className="footer">
      <Container>
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <img 
              src={logo} 
              alt="Logo"
              onClick={navigateToHome}
              style={{ cursor: 'pointer' }} 
            />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }} style={{ cursor: 'pointer' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavigation('skills'); }} style={{ cursor: 'pointer' }}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavigation('projects'); }} style={{ cursor: 'pointer' }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/workreport" onClick={(e) => { e.preventDefault(); navigateToWorkReports(); }} style={{ cursor: 'pointer' }}>
                  Work Reports
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/in/grayson-mongru/" target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn" />
            </a>
            <a href="https://github.com/GraysonM31" target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/graysonmongru/" target="_blank" rel="noopener noreferrer">
              <img src={navIcon3} alt="Instagram" />
            </a>
          </div>
        </motion.div>
        <Row>
          <Col>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Grayson Mongru. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};