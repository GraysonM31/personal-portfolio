import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const WorkSkillsW25 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="WorkSkillsW25" id="WorkSkills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>What did I learn...</h2>
              <p>Here are various skills and concepts that I learned during my work term:</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <h4>Azure Cloud Services</h4>
                  <p>
                    Gained a better understanding of Azure cloud services, including Azure Virtual Machines, App Services, and Functions. Worked on a C# .NET application utilizing Azure Function Apps and learned from senior team members.
                  </p>
                </div>
                <div className="item">
                  <h4>Testing Methodologies</h4>
                  <p>
                    Improved my ability to test code effectively by learning unit testing, integration testing, and end-to-end testing. Reviewed and analyzed test cases, wrote unit tests, and identified and resolved bugs in the codebase.
                  </p>
                </div>
                <div className="item">
                  <h4>Task Management</h4>
                  <p>
                    Enhanced my ability to manage tasks efficiently by using time-tracking applications, breaking down large tasks into smaller subtasks, and regularly reviewing progress. Improved self-reflection and received positive feedback on task management.
                  </p>
                </div>
                <div className="item">
                  <h4>Collaboration</h4>
                  <p>
                    Worked closely with cross-functional teams, including developers and product managers, to ensure project success. Participated in Agile ceremonies such as sprint planning and retrospectives to align with team goals.
                  </p>
                </div>
                <div className="item">
                  <h4>Problem-Solving</h4>
                  <p>
                    Identified and resolved software defects in a timely manner. In some cases, I independently fixed issues, while in others, I collaborated with the appropriate individuals to address them effectively.
                  </p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};