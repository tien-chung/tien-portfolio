import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ACHIEVEMET_DES } from '../utils/constants';
import whiteBelt from '../assets/img/whiteBelt/white-belt.png';
import yellowBelt from '../assets/img/yellowBelt/yellow-belt.png';
import greenBelt from '../assets/img/greenBelt/green-belt.png';
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
  const navigate = useNavigate();
      
  return (
    <section className="achievement" id="Achievements">
      <Container>
        <Row className="bg-color">
          <Col>
            <h2>Learning Achievements</h2>
            <div className="achievement-bx">
              <p>{ACHIEVEMET_DES}</p>
              <Row>
                <Col xs={12} md={4} xl={4} className="item">
                  <img src={whiteBelt} alt="white-belt"/>
                  <h5>White Belt</h5>
                </Col>
                <Col xs={12} md={4} xl={4} className="item">
                  <img src={yellowBelt} alt="yellow-belt"/>
                  <h5>Yellow Belt</h5>
                </Col>
                <Col xs={12} md={4} xl={4} className="item">
                  <img src={greenBelt} alt="green-belt"/>
                  <h5>Green Belt</h5>
                </Col>
              </Row>
              <button onClick={() => navigate('/Achievements')}>Click here to see more!</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Achievements;