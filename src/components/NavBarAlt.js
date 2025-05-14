import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../assets/img/Logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBarAlt = () => {
  const [activeLink, setActiveLink] = useState('workterm');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value, sectionId) => {
    setActiveLink(value);
    navigate('/workreport'); // Navigate to the /workreport page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
      }
    }, 0);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => onUpdateActiveLink('workterm', 'workterm')}
              className={activeLink === 'workterm' ? 'active navbar-link' : 'navbar-link'}
            >
              WorkTermS23
            </Nav.Link>
            <Nav.Link
              onClick={() => onUpdateActiveLink('worktermf23', 'worktermf23')}
              className={activeLink === 'worktermf23' ? 'active navbar-link' : 'navbar-link'}
            >
              WorkTermF23
            </Nav.Link>
            <Nav.Link
              onClick={() => onUpdateActiveLink('worktermS24', 'worktermS24')}
              className={activeLink === 'worktermS24' ? 'active navbar-link' : 'navbar-link'}
            >
              WorkTermS24
            </Nav.Link>
            <Nav.Link
              onClick={() => onUpdateActiveLink('worktermW25', 'worktermW25')}
              className={activeLink === 'worktermW25' ? 'active navbar-link' : 'navbar-link'}
            >
              WorkTermW25
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
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
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};