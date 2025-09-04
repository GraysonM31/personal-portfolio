import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion } from "framer-motion";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Define skill levels and categories
  const skillsData = {
    languages: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      }
    ],
    frameworks: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        name: ".NET",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
      }
    ],
    tools: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        name: "Selenium",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
      },
      {
        name: "Ubuntu",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
      }
    ],
    databases: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      }
    ]
  };
  
  // Helper function to get skills based on active category
  const getSkills = () => {
    if (activeCategory === "all") {
      return [
        ...skillsData.languages,
        ...skillsData.frameworks,
        ...skillsData.tools,
        ...skillsData.databases
      ];
    }
    return skillsData[activeCategory];
  };

  const categoryColors = {
    languages: { primary: '#7f5af0', secondary: '#c77dff' },
    frameworks: { primary: '#2cb67d', secondary: '#4dd4ac' },
    tools: { primary: '#ff8906', secondary: '#f9c846' },
    databases: { primary: '#3da9fc', secondary: '#7cc6fe' },
    all: { primary: '#7f5af0', secondary: '#2cb67d' }
  };

  const getCategoryColor = () => {
    return categoryColors[activeCategory];
  };
  
  const categoryIcons = {
    languages: "bi bi-code-slash",
    frameworks: "bi bi-box",
    tools: "bi bi-tools",
    databases: "bi bi-database",
    all: "bi bi-grid-3x3-gap"
  };
  
  return (
    <section className="skills-section" id="skills">
      <div className="skills-bg-gradient"></div>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Row className="text-center mb-5">
            <Col>
              <motion.h2 
                className="section-title skills-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Technical <span className="text-gradient">Skills</span>
              </motion.h2>
              <motion.p 
                className="section-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Tools and Tech I've been exposed too
              </motion.p>
            </Col>
          </Row>
          
          <Row className="mb-5 justify-content-center">
            <Col xs={12} lg={9} className="skills-category-container">
              <Nav 
                className="skills-filter-tabs" 
                variant="pills"
                activeKey={activeCategory}
                onSelect={(key) => setActiveCategory(key)}
              >
                <Nav.Item>
                  <Nav.Link eventKey="all">
                    <i className={categoryIcons.all}></i>
                    <span>All</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="languages">
                    <i className={categoryIcons.languages}></i>
                    <span>Languages</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="frameworks">
                    <i className={categoryIcons.frameworks}></i>
                    <span>Frameworks</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tools">
                    <i className={categoryIcons.tools}></i>
                    <span>Tools</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="databases">
                    <i className={categoryIcons.databases}></i>
                    <span>Databases</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="skills-grid-container"
          >
            <Row className="skills-grid">
              {getSkills().map((skill, index) => (
                <Col xs={6} md={4} lg={3} xxl={2} key={index}>
                  <motion.div 
                    className="skill-card"
                    style={{
                      '--card-accent': getCategoryColor().primary,
                      '--card-accent-secondary': getCategoryColor().secondary
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: `0 15px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(${getCategoryColor().primary.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`
                    }}
                  >
                    <motion.div 
                      className="skill-icon-container"
                      whileHover={{ rotate: 10 }}
                      animate={{ 
                        y: [0, -4, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2 + index % 2,
                        ease: "easeInOut",
                        delay: index * 0.1 % 0.5
                      }}
                    >
                      <img src={skill.icon} alt={skill.name} />
                    </motion.div>
                    
                    <h3>{skill.name}</h3>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};