import React from 'react';
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'; // Assuming you have this component defined
import logo1 from '../assets/img/chemistry.png';
import logo2 from '../assets/img/automation.png';
import logo3 from '../assets/img/data.png';

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
      url: '', 
    },

    {
      title: 'Covid-19 Screening Form Automation',
      description: 'Using Selenium in python to automatically complete the University of Guelph Covid-19 screening form',
      imgUrl: logo3,
      url: '', 
    },
  ];

  return (
    <section className="project d-flex align-items-center justify-content-center" id="projects">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h2 className="text-center">Projects</h2>
            <p className="text-center">Hover for more details</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    {projectsArr.map((project, index) => (
                      <Col key={index} md={4} sm={6} className="mb-4">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={""} alt="Background" />
    </section>
  );
};
