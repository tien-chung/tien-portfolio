import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { EXPERIENCE_DES } from "../utils/constants";

const Experience = () => {
  return (
    <section className="experience" id="Experience">
      <Container>
        <h2>Learning & Growth Journey</h2>
        <p>{EXPERIENCE_DES}</p>
        <Row className="center">
          <Col xs={12} md={4}>
            <h3>Education</h3>
          </Col>
          <Col xs={12} md={4}>
            <h3>Work Experience</h3>
          </Col>
          <Col xs={12} md={4}>
            <h3>Personal Projects</h3>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience;