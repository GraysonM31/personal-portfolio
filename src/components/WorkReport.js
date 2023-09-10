import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import headerImg from "../assets/img/allianceIT-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import sharePointImg from "../assets/img/sharepointHomePage.png";
// import { WorkSkills } from './components/WorkSkills'
import { WorkSkills } from './WorkSkills'



export const WorkReport = () => {
  return (
    <section className="banner-workterm" id="workterm">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{"Summer 2023 Work Term Report"}</h1>
            <h2>{"AllianceIT - Project Manager Intern"}</h2>
            <span className="wrap"></span>
            <p></p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <figure>
              <img src={headerImg} alt="header" />
            </figure>
           
          </Col>
        </Row>
      </Container>

      <Container className="mid-section">
        <Row>
          <Col xs={12} md={6} xl={5}>
            <figure>
                <img src={sharePointImg} alt="header" />
                <figcaption>SharePoint homepage for day to day work</figcaption>
              </figure>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <Row>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                    <h3>Overview</h3>
                    <p className="paragraph">
                    For my first Co-op work, I worked for AllianceIT as a project manager intern. Although this role did not directly relate to my area of study, it provided me with skills that will help me succeed in future positions. 
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                    <h3>Job Description</h3>
                    <p className="paragraph">
                      Day to day I was responsible for PCO work. This included:
                      <ul>
                        <li>
                          <strong>Meeting Minutes</strong>
                        </li>
                        <li>
                          <strong>Status Reporting</strong>
                        </li>
                        <li>
                          <strong>Raid logs</strong>
                        </li>
                        <li>
                          <strong>Attending all meetings</strong>
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
                        <strong>Asking more questions when necessary</strong>
                        </li>
                        <li>
                        <strong>Improving my Excel Skills</strong>
                        </li>
                        <li>
                        <strong>Continuing to work on my organizational Skills</strong>
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
                    Throughout my co-op, I had the opportunity to develop and refine a wide range of skills that are essential in any professional setting.
                    <ul>
                      <li>
                        <strong>Communication Skills</strong>
                      </li>
                      <li>
                        <strong>Project management Skills</strong> 
                      </li>
                      <li>
                        <strong>Organizational Skills</strong>
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
            {/* <img className="secondPicture" src={placeholder} alt="header" /> */}
          </Col>
          <Col xs={12} md={6} xl={7}>
            {/* Your existing content */}
          </Col>
        </Row>
      </Container>
      <WorkSkills/>



    


    </section>
  );
};
