import React from 'react';
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import logo1 from '../assets/img/chemistry.png';
import logo2 from '../assets/img/automation.png';
import logo3 from '../assets/img/data.png';
import { motion } from 'framer-motion'; // Add framer-motion for animations

export const Projects = () => {
  const projectsArr = [
    {
      title: 'BIRTA Modernization Project',
      description: 'Modernizing the BIRTA application using Azure, Firebase, HTML, CSS and JavaScript',
      imgUrl: logo2,
      url: 'http://birta-v2.azurewebsites.net/index.html', 
    },
    {
      title: 'Molecule Modeling Project',
      description: 'Full stack project to create custom SVG files of a Molecule from a given .SDF file',
      imgUrl: logo1,
      url: '#', 
    },
    {
      title: 'Covid-19 Screening Form Automation',
      description: 'Using Selenium in python to automatically complete the University of Guelph Covid-19 screening form',
      imgUrl: logo3,
      url: '#', 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2>Projects</h2>
              <p>Explore my recent work and projects that showcase my skills and expertise in web development and automation.</p>
              
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Featured</Nav.Link>
                  </Nav.Item>
                </Nav>
                
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projectsArr.map((project, index) => (
                        <Col key={index} md={4}>
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <ProjectCard {...project} />
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};