import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import excelLogo from '../assets/img/excel.png';
import officeLogo from '../assets/img/office.png';


export const WorkSkills = () => {
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
    <section className="WorkSkills" id="WorkSkills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>What did I learn...</h2>
              <p>Here are various skills and concepts that I learned. </p>
              <Carousel responsive={responsive} infinite={true} className="skill-silder">
                <div className="item">
                  <h4>Meeting Minutes</h4>
                  <p>
                    As a part of this job I had to complete meeting minutes for each stand-up meeting that occured. Throughout the term I learned how to more effciently record these notes and summerize the key ideas.
                  </p>
                </div>
                <div className="item">
                  <h4>Status Reporting</h4>
                  <p>
                  Learned the basics of status reporting, including color coding based on importance and following up with the project manager to ensure timely updates.
                  </p>
                </div>
                <div className="item">
                  <h4>Time Management</h4>
                  <p>
                  I believe that possessing strong time management abilities will be crucial for my future professional endeavors. My initial Co-op experience helped me to recognize the significance of time management, not just on a personal level, but also within an organization.                  </p>
                </div>
                <div className="item">
                  <h4>Raid Logs</h4>
                  <p>
                    During my co-op, I gained valuable experience in managing RAID logs. These logs are crucial in project management as they help identify and address potential risks, track assumptions made during project planning, manage and resolve issues as they arise, and keep track of project dependencies. I learned how to effectively update and maintain RAID logs, ensuring that all project stakeholders were well-informed about any potential challenges and dependencies.
                  </p>
                </div>
                <div className="item">
                  <h4>SharePoint</h4>
                  <img
                    src={officeLogo}
                    alt="Office-Logo"
                    style={{maxWidth: 200, maxHeight: 200}}
                  />

                  
                </div>
                <div className="item">
                  <h4>Excel</h4>
                  <img
                    src={excelLogo}
                    alt="Office-Logo"
                    style={{ maxWidth: 200, maxHeight: 200 }}
                  />


               
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
