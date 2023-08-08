import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, JustifyLeft } from "react-bootstrap-icons";
import headerImg from "../assets/img/allianceIT-logo.png";
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import "bootstrap/dist/css/bootstrap.min.css";
import placeholder from  "../assets/img/placeholder.png"


export const WorkReport = () => {

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8 offset-md-2">
//           {/* Page Header */}
//           <div className="workform-Header mt-5">
//             <h1 className="text-center">Work Term Report</h1>
//           </div>

//           {/* Introduction Section */}
//           <div className="mt-4">
//             <h2>Introduction</h2>
//             <p>
//               Add your introduction here. Describe the purpose and context of
//               your work term report.
//             </p>
//           </div>

//           {/* Skills Section */}
//           <div className="mt-4">
//             <h2>Skills Gained</h2>
//             <p>
//               List the skills you acquired during your work term. Describe how
//               they contributed to your professional growth.
//             </p>
//             {/* You can add a list of skills or any other content here */}
//           </div>

//           {/* Projects Section */}
//           <div className="mt-4">
//             <h2>Projects</h2>
//             <p>
//               Detail the significant projects you worked on during your
//               co-op. Include the technologies, challenges, and achievements.
//             </p>
//             {/* You can add a list of projects or any other content here */}
//           </div>

//           {/* Conclusion Section */}
//           <div className="mt-4">
//             <h2>Conclusion</h2>
//             <p>
//               Summarize your overall work term experience. Reflect on the
//               lessons learned and how the experience will impact your future
//               career.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

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







     </section>


   );
};
