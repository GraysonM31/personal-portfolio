import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WorkSkillsS24 = () => {
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
    <section className="WorkSkillsS24" id="WorkSkills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>What did I learn...</h2>
              <p>Here are various skills and concepts that I learned. </p>
              <Carousel responsive={responsive} infinite={true} className="skill-silder">
                <div className="item">
                  <h4>Public Sector Work</h4>
                  <p>
                    Gained experience working within the public sector, understanding the unique challenges and requirements of government projects, and ensuring compliance with regulations and standards.
                  </p>
                </div>
                <div className="item">
                  <h4>Requirements Gathering</h4>
                  <p>
                    Learned to effectively gather and analyze requirements from various stakeholders, ensuring that the developed application met the needs of end-users and aligned with project goals.
                  </p>
                </div>
                <div className="item">
                  <h4>User Centric Design</h4>
                  <p>
                    Applied user-centric design principles to create an intuitive and accessible interface for the bear incident and tracking application, focusing on user experience and usability.
                  </p>
                </div>
                <div className="item">
                  <h4>App Development</h4>
                  <p>
                    Developed a full stack application to replace a legacy system, utilizing modern technologies and frameworks to create a robust and scalable solution for tracking bear incidents.
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
