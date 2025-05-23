import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Skills = () => {

     const responsive = {
          superLargeDesktop: {
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
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python-logo"/>
                                             
                                   </div>
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C-Logo"/>

                                   </div>
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React-Logo"/>
                                   </div>
                                   <div className="item">
                                        
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java-Logo"/>
          
                                   </div>
                                   <div className="item">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium-Logo"/>
          
                                   </div>
                                   <div className="item">
                                        
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="Ubuntu-Logo"/>
                                   
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