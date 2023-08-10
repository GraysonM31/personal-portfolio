import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/allianceIT-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import placeholder from  "../assets/img/placeholder.png"
// import { Skills } from './Skills'



export const WorkReport = () => {


return (



     //header

     <section className="banner-workterm" id="workterm">
       <Container>
         <Row className="align-items-center">
           <Col xs={12} md={6} xl={7}>
             {/* <span className="tagline">Did you pray today? cuz if you didn't...</span> */}
             <h1>{"Summmer 2023 Work Term Report,"}</h1>
             <h2>{"AllianceIT - Project Manager intern"}</h2>
             <span className="wrap">{""}</span>
             <p>
             </p>
           </Col>
           <Col xs={12} md={6} xl={5}>
             <img src={headerImg} alt="header" />
           </Col>
         </Row>
       </Container>

       <Container className="mid-section">
          <h3>Overview</h3>
          <p className="paragraph">For my first co-op work term I had a postion with AllianceIT as a project manager intern where day to day I handled many PCO and project management task. During my work term I learned many skills..</p>
          <Col xs={12} md={6} xl={5}>
             <img src={placeholder} alt="header" />
          </Col>
       </Container>


       <Container>
          <h3>What I learned</h3>
          <p className="paragraph">blah blah blah blah blah.</p>
          <Col xs={12} md={6} xl={5}>
             <img className="secondPicture" src={placeholder} alt="header" />
          </Col>
       </Container>

       {/* <Skills/> */}

     </section>




   );
};  
