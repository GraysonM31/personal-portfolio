import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/memoji.PNG";
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';

export const Banner = () => {

  const handleContactClick = () =>{
    window.location.href = "mailto:gmongru@uoguelph.ca"
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my Website!</span> */}
            <h1>{"Hi, I'm Grayson 👋"} </h1>
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
            {/* <Spline scene="https://prod.spline.design/jbUxMssMYB6KbRw1/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/u0E5dDoW2hJe2pdg/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/roE6iyeF8XlFvRY3/scene.splinecode"/> */}
            {/* <Spline scene="https://prod.spline.design/Xz13smKR7Duzeckt/scene.splinecode" backgroundColor="transparent" /> */}
            {/* <p>Play some Jenga</p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
