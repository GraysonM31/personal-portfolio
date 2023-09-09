import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/memoji.PNG";


export const Banner = () => {

  const handleContactClick = () =>{
    window.location.href = "mailto:gmongru@uoguelph.ca"
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>{"Hi👋,"}</h1>
            <h2>{"I'm Grayson Mongru"}</h2>
            <span className="wrap">{""}</span>
            <p>
              As a passionate software engineering student, I am driven by the endless possibilities of technology, and I strive to capture my creativity to create new and exciting projects
            </p>
            <button onClick={handleContactClick}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
