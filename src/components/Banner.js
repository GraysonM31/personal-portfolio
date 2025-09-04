import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/memoji.PNG";
import { motion, AnimatePresence } from 'framer-motion';

export const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Web Developer", "Software Engineer", "Student", "Tech Enthusiast"];
  
  // Rotate through roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span 
                className="tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                Welcome to my Portfolio
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Hi! I'm Grayson Mongru
              </motion.h1>
              
              <div className="role-container">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="role-text"
                  >
                    I'm a <span className="highlighted-text">{roles[roleIndex]}</span>
                  </motion.h2>
                </AnimatePresence>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                As a passionate software engineering student, I am driven by the endless possibilities of technology, and I strive to capture my creativity to create new and exciting projects.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:graysonmongru@gmail.com'}
              >
                Let's Connect <ArrowRightCircle size={25} />
              </motion.button>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="header-img-container"
            >
              <motion.img 
                src={headerImg} 
                alt="Header Img"
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}