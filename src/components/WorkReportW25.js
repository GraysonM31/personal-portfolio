import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { WorkSkillsW25 } from "./WorkSkillsW25";
import logo from "../assets/img/purolator-logo.png";
import coop1 from "../assets/img/WinterCoopEvent-01.jpg";
import coop2 from "../assets/img/WinterCoopEvent-17.jpg";
import coop3 from "../assets/img/WinterCoopEvent-52.jpg";

export const WorkReportW25 = () => {
  return (
    <section className="banner-workterm" id="worktermW25">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{"Winter 2025 Work Term Report"}</h1>
            <h2>{"Purolator Digital Lab - QA Developer"}</h2>
            <span className="wrap"></span>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <figure>
              <img src={logo} alt="header" />
            </figure>
          </Col>
        </Row>
      </Container>

      {/* Carousel Section */}
      <Container className="mid-section mb-5">
        <Row>
          <Col xs={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={coop1}
                  alt="Co-op Event 1"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h5>Co-op Event 2025</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={coop2}
                  alt="Co-op Event 2"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h5>Co-op Event 2025</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={coop3}
                  alt="Co-op Event 3"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h5>Co-op Event 2025</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Content Section */}
      <Container className="my-5">
        <Row className="mb-4">
          <Col xs={12} md={6} className="mb-4">
            <Card className="h-100 roundedp-4 text-center d-flex align-items-center justify-content-center">
              <Card.Body>
                <h3>Overview</h3>
                <p className="paragraph">
                  During my Winter 2025 work term, I worked as a QA Developer Co-op at Purolator's Digital Lab. This role provided me with hands-on experience in QA, software testing, and development, while collaborating with a dynamic team to ensure the delivery of high-quality software solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card className="h-100 roundedp-4 text-center d-flex align-items-center justify-content-center">
              <Card.Body>
                <h3>Job Description</h3>
                <p className="paragraph">
                  My responsibilities as a QA Developer Co-op included:
                  <ul className="text-start">
                    <li>Designing and executing test cases to ensure software functionality and performance.</li>
                    <li>Collaborating with developers to identify and resolve software defects.</li>
                    <li>Participating in Agile activities such as sprint planning and retrospectives to align with team goals.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <Card className="h-100 roundedp-4 text-center d-flex align-items-center justify-content-center">
              <Card.Body>
                <h3>Learning Goals</h3>
                <p className="paragraph">
                  At the start of my work term, I set the following learning objectives:
                  <ul className="text-start">
                    <li>Gain foundational knowledge of Azure cloud services and learn how to work with and manage applications in the cloud.</li>
                    <li>Improve my ability to test code effectively and gain knowledge of different testing methodologies.</li>
                    <li>Enhance my ability to manage tasks efficiently and meet deadlines effectively in a software development environment.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <Card className="h-100 roundedp-4 text-center d-flex align-items-center justify-content-center">
              <Card.Body>
                <h3>Skills</h3>
                <p className="paragraph">
                  Throughout this work term, I developed and refined several key skills, including:
                  <ul className="text-start">
                    <li>Testing skills: Writing and maintaining test cases to improve testing efficiency.</li>
                    <li>Problem-solving: Identifying and resolving software defects in a timely manner.</li>
                    <li>Collaboration: Working closely with cross-functional teams to ensure project success.</li>
                    <li>Attention to detail: Ensuring software quality by thoroughly testing all features and functionality.</li>
                  </ul>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <WorkSkillsW25 />
    </section>
  );
};