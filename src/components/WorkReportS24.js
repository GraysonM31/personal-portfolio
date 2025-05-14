import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import onLogo from "../assets/img/OL.png";
import { WorkSkillsS24 } from "./WorkSkillsS24";
import office from "../assets/img/office-mnr.jpg";


function DemoWebsite() {
    return (
      <Container>
        <h3 className="text-white"> Bear Wise Proof of Concept</h3>
        <Row>
          <Col xs={12} md={6} xl={5}>
            <Card className="rounded p-4 mb-4">
              <Card.Body>
                <h3>Website Demo</h3>
                <p className="paragraph">
                  This is a demonstration of the bear incident and tracking application that I developed to replace a legacy system. The application is designed to be user-friendly and efficient in tracking bear incidents.
                </p>
                <a href="http://birta-v2.azurewebsites.net" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit Website
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <Card className="rounded p-4 mb-4">
              <Card.Body>
                <h3>Application Features</h3>
                <p className="paragraph">
                  The application includes the following features:
                  <ul>
                    <li><strong>Incident Reporting:</strong> Users can report bear incidents with detailed information.</li>
                    <li><strong>Real-time Tracking:</strong> Track bear movements and incidents in real-time.</li>
                    <li><strong>Data Analysis:</strong> Analyze incident data to identify patterns and trends.</li>
                    <li><strong>User Management:</strong> Manage user roles and permissions within the application.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }







export const WorkReportS24 = () => {
  return (
    <section className="banner-workterm" id="worktermS24">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{"Summer 2024 Work Term Report"}</h1>
            <h2>{"GovTechON - Service Designer"}</h2>
            <span className="wrap"></span>
            <p></p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <figure>
              <img src={onLogo} alt="header" />
            </figure>
           
          </Col>
        </Row>
      </Container>

      <Container className="mid-section">
        <Row>
          <Col xs={12} md={6} xl={5}>
            <figure>
                <img src={office} alt="header" />
                <figcaption>MNR Office in Peterborough</figcaption>
              </figure>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <Row>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                    <h3>Overview</h3>
                    <p className="paragraph">
                        As a part of the IT2 program I had the opportunity to work as a service design with the government of Ontario Ministry of Natural Resources. This experience taught me how to work with a team to design and implement an IT service that meets the needs of the end user.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                    <h3>Job Description</h3>
                    <p className="paragraph">
                      Day to day I had numerous responsiblities. including:
                      <ul>
                        <li>
                          <strong>Attend and assist in user workshops</strong>
                        </li>
                        <li>
                          <strong>contribute techinical solution to problems</strong>
                        </li>
                        <li>
                          <strong>create proof of concept application to replace legacy systems</strong>
                        </li>
                      </ul>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                    <h3>Learning Goals</h3>
                    <p className="paragraph">
                    At the start of my work term, I established three clear learning objectives.                     
                     <ul>
                        <li>
                        <strong>Improve presentation skills</strong>
                        </li>
                        <li>
                        <strong>Improve written deliverables </strong>
                        </li>
                        <li>
                        <strong>Learn more about the Azure Cloud Service</strong>
                        </li>
                      </ul>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                  <h3>Skills</h3>
                  <p className="paragraph">
                    I had the opportunity to develop and refine a wide range of new skills that are transferable to my next Co-op.
                    <ul>
                      <li>
                        <strong>Problem solving skills</strong>
                      </li>
                      <li>
                        <strong>Coding skills</strong> 
                      </li>
                      <li>
                        <strong>Communication Skills</strong>
                      </li>
                      <li>
                        <strong>User requirements gathering</strong>
                      </li>
                    </ul>
                  </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>



      <Container>
        
        <Row>
          <Col xs={12} md={6} xl={5}>
          </Col>
          <Col xs={12} md={6} xl={7}>
          </Col>
        </Row>
      </Container>

      <WorkSkillsS24/>
      
      <DemoWebsite/>


    </section>
  );
};
