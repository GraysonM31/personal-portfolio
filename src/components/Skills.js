import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import softwareImage from "../assets/img/softwareIMG.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import Cicon from "../assets/img/Icon/C-icon.svg"
import htmlIcon from "../assets/img/Icon/html-icon.svg"
import pythonIcon from "../assets/img/Icon/python-icon.svg"






export const Skills = () => {

     const responsive = {
          superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };

     return(

          <section className="skill" id="skills">
               <Container>
                    <Row>
                         <Col>
                         <div className="skill-bx">
                              <h2>
                                   A little about me...
                              </h2>
                              <p>Here are some of my tech skills!</p>
                              <Carousel responsive={responsive} infinite={true} className="skill-silder">
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
                                             
                                   </div>
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />

                                   </div>
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                   </div>
                                   <div className="item">
                                        
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          
                                   </div>
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" />
          
                                   </div>
                                   <div className="item">
                                        
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
                                   
                                   </div>
                              </Carousel>
                         </div>
                         </Col>
                    </Row>
               </Container>
               {/* <img className="background-image-left" src={colorSharp}/> */}
          </section>


     )

}