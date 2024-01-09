import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import headerImg from "../assets/img/CooperatorsLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import headoffice from "../assets/img/cooperators-headoffice.jpg";
// import { WorkSkills } from './components/WorkSkills'
import {WorkSkillsF23} from './WorkSkillsF23'



export const WorkReportF23 = () => {
  return (
    <section className="banner-workterm" id="worktermf23">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{"Fall 2023 Work Term Report"}</h1>
            <h2>{"Co-operators - Test Automation"}</h2>
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
                <img src={headoffice} alt="header" />
                <figcaption>Co-operators office downtown Guelph</figcaption>
              </figure>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <Row>
              <Col xs={12} md={6} className="mb-4">
                <Card className="roundedp-4">
                  <Card.Body>
                    <h3>Overview</h3>
                    <p className="paragraph">
                    I had the opportunity to serve as a test automation developer. This experience not only allowed me to contribute significantly to the development of automated testing processes but also provided invaluable insights into the management and collaborative aspects of working with a code base.
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
                          <strong>Regression Testing</strong>
                        </li>
                        <li>
                          <strong>Reviewing and modifying datasheets</strong>
                        </li>
                        <li>
                          <strong>Fixing bugs and adding features to the test suite</strong>
                        </li>
                        <li>
                          <strong>placeholder</strong>
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
                        <strong>Improve my java coding skills</strong>
                        </li>
                        <li>
                        <strong>Ask more questions during meetings</strong>
                        </li>
                        <li>
                        <strong>Get more comfortable working with version control systems at a professional level (Git & Bitbucket)</strong>
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
                    I had the opportunity to develop and refine a wide range of skills that are essential in any professional setting.
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
                        <strong>Software Automation</strong>
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
      <WorkSkillsF23/>



    


    </section>
  );
};
