import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const WorkSkillsF23 = () => {
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
    <section className="WorkSkillsF23" id="WorkSkills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>What did I learn...</h2>
              <p>Here are various skills and concepts that I learned. </p>
              <Carousel responsive={responsive} infinite={true} className="skill-silder">
                <div className="item">
                  <h4>Selenium automation framework</h4>
                  <p>As a test automation developer, I immersed myself in the intricacies of automation, focusing particularly on the Selenium automation framework. My main responsiblity involved front-end UI testing for the Co-operators Policy Center. Taking charge of each product line, including Auto, Hab, Commercial, and Farm, I executed an automated test suite that tested each product from start to finish. This initiative not only heightened my proficiency in leveraging the Selenium framework but also allowed me to ensure the robustness and reliability of the Policy Center across diverse product lines. The hands-on experience of orchestrating automated tests for distinct product categories proved to be an enriching endeavor, deepening my expertise in test automation within a professional setting.
                  </p>
                </div>
                <div className="item">
                  <h4>Git/version control</h4>
                  <p>
                  Throughout my co-op term at the Co-operators, I honed my skills in utilizing Git and version control systems, gaining a comprehensive understanding of their role in collaborative coding environments. Initially acquainted with the basics, I actively sought opportunities to enhance my proficiency in Git, delving into more advanced techniques. Embracing the collaborative nature of version control, I improved my ability to manage code repositories efficiently. This experience not only fortified my understanding of Git but also empowered me with the skills needed to navigate and contribute effectively to code bases in a professional setting.
                  </p>
                </div>
                <div className="item">
                  <h4>Java programming skills</h4>
                  <p>
                  During my work term, I worked in the Java language, marking my first substantial experience working with this versatile programming platform. Navigating through a real-world code base for the first time, I encountered challenges that significantly expanded my understanding of Java and sharpened my problem-solving skills. The hands-on exposure to a professional code base proved to be a transformative learning experience, allowing me to grasp intricate details of Java's functionality and architecture. As I grappled with coding intricacies, my programming skills saw notable improvement, paving the way for a more confident and capable approach to Java development.
                  </p>
                </div>
                <div className="item">
                  <h4>Testing methodology</h4>
                  <p>
                  During my work term, I delved into the realm of software testing methodologies, gaining invaluable insights into the professional application of these practices. One significant aspect of my role involved actively engaging in regression and pre-release regression testing, where I honed my ability to identify and rectify potential issues before software releases. I delved into the intricacies of unit testing, understanding its pivotal role in ensuring the functionality of isolated components. Embracing various types of software testing best practices became second nature as I navigated the dynamic landscape of quality assurance. This comprehensive exposure not only broadened my understanding of software testing but also equipped me with practical skills to contribute effectively to the development lifecycle.
                  </p>
                </div>
                {/* <div className="item">
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
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
