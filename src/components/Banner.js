import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/art.PNG";
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["React", "C", "Python", "Bootstrap", "Software Developer", "Java"];
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Website!</span>
            <h1>{"Hi I'm Grayson "} </h1>
            <span className="wrap">{text}</span>
            <p>
              As a passionate software engineering student, I am driven by the endless possibilities of technology, and I strive to turn innovative ideas into functional and user-friendly software solutions that can shape the future
            </p>
            <button onClick={() => console.log("connect")}>
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
