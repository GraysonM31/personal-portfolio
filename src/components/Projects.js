import Nav from 'react-bootstrap/Nav'
import {ProjectCard} from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import peach from "../assets/img/peach.png"

import {Col, Row, Tab, Container} from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"




export const Projects = () =>{


     const projectsArr = [
          {
               title: "Molecule Modeling Project",
               description: "Description1",
               imgUrl: projImg1,
          },
     
          {
               title: "Covid-19 Data Project",
               description: "Description2",
               imgUrl: projImg2,
          },
     
          {
               title: "",
               description: "Description3",
               imgUrl: projImg3,
          },
     ]



     return (
          <section className = "project" id="project">
               <Container>
                    <Row>
                         <Col>
                              <h2>Projects</h2>
                              <p>text text text text text text text text text text text</p>
                              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                   <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                                        <Nav.Item>
                                             <Nav.Link eventKey="first">Tab One</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                             <Nav.Link eventKey="Third">Tab Three</Nav.Link>
                                        </Nav.Item>
                                   </Nav>
                                   <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                             <Row>
                                               {
                                                  projectsArr.map((project, index) => {
                                                       return(
                                                            <ProjectCard
                                                                Key={index}
                                                                {...project}
                                                                />
                                                       )
                                                  })
                                               }
                                             </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">Loren Ispsum</Tab.Pane>
                                        <Tab.Pane eventKey="third">Loren Ispsum</Tab.Pane>
                                   </Tab.Content>
                              </Tab.Container>
                         </Col>
                    </Row>
               </Container>
               <img className='background-image-right' src={colorSharp2}/>
          </section>


     )



}




     

